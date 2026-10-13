// Idiomas del sitio. Para agregar uno: sumalo a `locales`, a `localeNames`
// y creá su diccionario en content/dictionaries/.

export const locales = ["es", "en", "pt", "it", "de", "nl", "fr", "he"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

// Nombre de cada idioma en su propio idioma, para el selector.
export const localeNames: Record<Locale, string> = {
  es: "Español",
  en: "English",
  pt: "Português",
  it: "Italiano",
  de: "Deutsch",
  nl: "Nederlands",
  fr: "Français",
  he: "עברית",
};

// Etiqueta para Open Graph (og:locale).
export const ogLocales: Record<Locale, string> = {
  es: "es_UY",
  en: "en_US",
  pt: "pt_BR",
  it: "it_IT",
  de: "de_DE",
  nl: "nl_NL",
  fr: "fr_FR",
  he: "he_IL",
};

const rtlLocales: ReadonlySet<Locale> = new Set(["he"]);

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return rtlLocales.has(locale) ? "rtl" : "ltr";
}

// Elige el mejor idioma según el header Accept-Language del navegador.
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.trim().slice(2)) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of preferred) {
    const base = tag.split("-")[0];
    // "iw" es el código antiguo de hebreo que todavía envían algunos navegadores.
    const normalized = base === "iw" ? "he" : base;
    if (hasLocale(normalized)) return normalized;
  }
  return defaultLocale;
}
