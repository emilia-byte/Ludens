// Consentimiento de cookies guardado en localStorage del navegador.
// Mientras no haya una elección, no se carga nada no esencial.

export type ConsentStatus = "accepted" | "rejected";

const STORAGE_KEY = "ludens-cookie-consent";
const CHANGE_EVENT = "ludens:consent-change";
// Subir este número obliga a pedir el consentimiento de nuevo (por ejemplo, si cambia la política).
const CONSENT_VERSION = 1;

type StoredConsent = { status: ConsentStatus; version: number; date: string };

export function readConsent(): ConsentStatus | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as Partial<StoredConsent>;
    if (stored.version !== CONSENT_VERSION) return null;
    return stored.status === "accepted" || stored.status === "rejected" ? stored.status : null;
  } catch {
    return null;
  }
}

export function writeConsent(status: ConsentStatus) {
  const stored: StoredConsent = { status, version: CONSENT_VERSION, date: new Date().toISOString() };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Sin almacenamiento disponible: la elección vale solo para esta visita.
  }
  if (status === "rejected") removeAnalyticsCookies();
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Ignorar: no hay nada que borrar.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function subscribeToConsent(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// Borra las cookies de Google Analytics (_ga, _ga_*) si el usuario rechaza después de haber aceptado.
function removeAnalyticsCookies() {
  const domain = window.location.hostname.replace(/^www\./, "");
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.split("=")[0]?.trim();
    if (!name?.startsWith("_ga")) continue;
    for (const d of ["", `; domain=${domain}`, `; domain=.${domain}`]) {
      document.cookie = `${name}=; Max-Age=0; path=/${d}`;
    }
  }
}
