// Todo el contenido del sitio de Ludens SA vive en este archivo.
// Fuente original: https://www.ludenssa.com/ (en inglés, adaptado al español).
// Los componentes solo leen de acá: para cambiar un texto, editalo en este archivo.

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
  description:
    "Ludens SA es una agencia de marketing digital de Montevideo. Optimizamos y gestionamos campañas en Google, Meta y Taboola, y somos dueños de MarketOnline.",

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

  nav: {
    links: [
      { label: "Servicios", href: "/#servicios" },
      { label: "MarketOnline", href: "/#marketonline" },
      { label: "Proceso", href: "/#proceso" },
      { label: "Contacto", href: "/#contacto" },
    ],
    cta: { label: "Contactanos", href: "/#contacto" },
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    skipToContent: "Saltar al contenido",
  },

  hero: {
    // Original: "Ambition is the first step towards Ludens S.A"
    eyebrow: "La ambición es el primer paso",
    title: "Campañas optimizadas, gestionadas de punta a punta.",
    subtitle:
      "Google Ads, Meta y Taboola en manos de un solo equipo: estrategia, ejecución y análisis enfocados en tu ROI.",
    primaryCta: { label: "Contactanos", href: "#contacto" },
    secondaryCta: { label: "Ver servicios", href: "#servicios" },
  },

  metrics: {
    title: "Años de experiencia puestos en tu retorno.",
    // Original "About us": "Ludens S.A provides in depth solutions that are based on years of experience to optimize your ROI..."
    body: "Analizamos lo que ya hiciste, investigamos qué funciona hoy y llevamos tus anuncios a la audiencia más relevante. Nuestro equipo domina PPC, CPC, CPA y cada faceta de las campañas online.",
    // TODO: el sitio actual no publica cifras. Reemplazar "XX" por datos reales antes de publicar.
    items: [
      { value: "XX", label: "Cuentas gestionadas" },
      { value: "XX", label: "Años de experiencia" },
      { value: "XX", label: "Inversión publicitaria gestionada" },
      { value: "XX", label: "Plataformas de anuncios" },
    ],
  },

  services: {
    // Original: "What We Do" / "Closely listen to our clients existing modes of operation"
    title: "Qué hacemos",
    subtitle:
      "Antes de proponer, escuchamos cómo opera tu negocio. Después armamos el equipo de servicios que necesitás.",
    // El sitio actual solo lista los nombres; las descripciones son redacción nueva para revisar.
    items: [
      {
        icon: "megaphone",
        title: "Marketing",
        description:
          "Estrategia y gestión de campañas PPC, CPC y CPA en Google, Meta y Taboola.",
      },
      {
        icon: "palette",
        title: "Diseño",
        description: "Creatividades y piezas visuales pensadas para convertir.",
      },
      {
        icon: "share",
        title: "Redes sociales",
        description: "Contenido y pauta en redes con foco en audiencias relevantes.",
      },
      {
        icon: "globe",
        title: "Sitios web",
        description: "Sitios y landings rápidos, medibles y listos para campañas.",
      },
      {
        icon: "smartphone",
        title: "Apps móviles",
        description: "Desarrollo y promoción de aplicaciones móviles.",
      },
      {
        icon: "layers",
        title: "Plataformas",
        description:
          "Herramientas propias para gestionar cuentas publicitarias a escala.",
      },
    ] satisfies { icon: IconName; title: string; description: string }[],
  },

  marketOnline: {
    url: "https://www.marketonline.me/",
    eyebrow: "Producto propio",
    // Fuente: marketonline.me ("Centralised Campaign Management Made Easier")
    title: "Orgullosos de ser los dueños de MarketOnline.",
    description:
      "MarketOnline es nuestra plataforma de gestión centralizada de campañas. Agencias y marcas administran Google Ads, Facebook Ads y Taboola desde un único entorno.",
    features: [
      "Control multiplataforma desde una sola interfaz",
      "Acceso seguro con entornos de navegador controlados",
      "Estructura multi-tenant para separar clientes, equipos y proyectos",
      "Tarjetas dedicadas por cuenta para controlar presupuesto y gasto",
    ],
    cta: "Conocé MarketOnline",
    image: {
      // TODO: reemplazar por la captura real del software (idealmente 1600×1000 px, PNG o WebP).
      src: "/marketonline-placeholder.svg",
      alt: "Captura de la plataforma MarketOnline",
      width: 1600,
      height: 1000,
    },
  },

  process: {
    title: "Cómo trabajamos",
    subtitle: "Cuatro etapas, un solo equipo acompañándote en cada una.",
    steps: [
      {
        title: "Estrategia",
        description:
          "Definimos exactamente tus objetivos, ya sea captar clientes o aumentar ventas, y armamos una estrategia de marketing integral.",
      },
      {
        title: "Publicidad",
        description:
          "Analizamos tu negocio y creamos un plan de ejecución que aprovecha cada oportunidad de crecimiento.",
      },
      {
        title: "Resultados",
        description:
          "Te acompañamos desde la planificación hasta la ejecución, los reportes y el análisis de resultados.",
      },
      {
        title: "Optimización",
        description:
          "Monitoreamos los resultados en cada etapa y los usamos para conseguir todavía más.",
      },
    ],
  },

  contactSection: {
    title: "Hablemos de tus campañas",
    subtitle:
      "Contanos qué querés lograr y te respondemos con una propuesta concreta.",
    labels: {
      address: "Dirección",
      phone: "Teléfono",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
    },
    form: {
      fields: {
        name: { label: "Nombre", autoComplete: "name" },
        email: { label: "Email", autoComplete: "email" },
        company: { label: "Empresa", autoComplete: "organization" },
        message: { label: "Mensaje", autoComplete: "off" },
      },
      optional: "(opcional)",
      submit: "Enviar mensaje",
      submitting: "Enviando…",
      success: "¡Gracias! Recibimos tu mensaje y te contactamos a la brevedad.",
      error:
        "No pudimos enviar el mensaje. Probá de nuevo o escribinos directamente por email o WhatsApp.",
      notConfigured:
        "El formulario todavía no está conectado. Escribinos por email o WhatsApp mientras tanto.",
      errors: {
        nameRequired: "Ingresá tu nombre.",
        emailRequired: "Ingresá tu email.",
        emailInvalid: "Ingresá un email válido, por ejemplo nombre@empresa.com.",
        messageRequired: "Contanos en qué te podemos ayudar.",
        messageShort: "El mensaje tiene que tener al menos 10 caracteres.",
      },
    },
  },

  footer: {
    tagline: "Plataforma de marketing digital gestionado: todos tus anuncios en un solo lugar.",
    cookiePolicy: { label: "Política de cookies", href: "/politica-de-cookies" },
    cookieSettings: "Configurar cookies",
    rights: "Todos los derechos reservados.",
  },

  cookieBanner: {
    title: "Usamos cookies",
    body: "Usamos cookies esenciales para que el sitio funcione y, solo si aceptás, cookies de analítica para entender cómo se usa.",
    policyLink: "Ver política de cookies",
    accept: "Aceptar",
    reject: "Rechazar",
  },
} as const;
