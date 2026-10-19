// Datos del sitio que NO se traducen (contacto, URLs, imágenes, iconos).
// Los textos de cada idioma están en content/dictionaries/.

export type IconName =
  | "megaphone"
  | "palette"
  | "share"
  | "globe"
  | "smartphone"
  | "layers";

export const site = {
  name: "Ludens",
  legalName: "LUDENS SA",
  url: "https://www.ludenssa.com",

  contact: {
    // El sitio actual dice "Misiones 1481"; usamos la dirección indicada por el cliente.
    address: "Luis Bonavita 1294",
    city: "Montevideo, Uruguay",
    phoneDisplay: "097 078 100",
    phoneHref: "tel:+59897078100",
    // TODO: confirmar email. El sitio actual muestra este, pero su mailto apunta a otra dirección.
    email: "info@ludenssa.com",
    whatsapp: "https://wa.me/59897078100",
    linkedin: "https://www.linkedin.com/company/ludens-sa",
  },

  // Anclas de cada sección, en el mismo orden que dict.nav.links.
  sectionIds: ["servicios", "marketonline", "proceso", "contacto"],

  cookiePolicyPath: "politica-de-cookies",

  // Cifras de Ludens, en el mismo orden que dict.metrics.labels.
  metrics: [
    { value: "+7000" },
    { value: "+15" },
    { value: "+500M", unit: "USD" },
    { value: "5" },
  ] as { value: string; unit?: string }[],

  // Un icono por servicio, en el mismo orden que dict.services.items.
  serviceIcons: ["megaphone", "palette", "share", "globe", "smartphone", "layers"] as IconName[],

  marketOnline: {
    url: "https://www.marketonline.me/",
    image: {
      // Captura del panel de reportes de MarketOnline.
      src: "/marketonline-dashboard.webp",
      width: 1491,
      height: 971,
    },
  },

  // Fecha de la última actualización de la política de cookies (se formatea según el idioma).
  cookiePolicyUpdated: "2026-10-13",
};
