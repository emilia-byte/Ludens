// Envío del formulario de contacto al servidor del sitio (app/api/contact/route.ts),
// que lo manda por email con Resend.

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export type ContactResult = "sent" | "not-configured";

type ContactRequest = ContactPayload & {
  // Campo trampa para bots (debe llegar vacío).
  website: string;
  lang: string;
};

export async function submitContact(payload: ContactRequest): Promise<ContactResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (response.status === 503) return "not-configured";
  if (!response.ok) throw new Error(`El envío falló con estado ${response.status}`);
  return "sent";
}
