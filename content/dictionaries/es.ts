// Español (idioma principal). Este diccionario define la estructura que siguen todos los demás.
// Fuente original: https://www.ludenssa.com/ (en inglés, adaptado al español).

export const es = {
  meta: {
    title: "LUDENS SA | Marketing digital en Montevideo",
    description:
      "Ludens SA es una agencia de marketing digital de Montevideo. Optimizamos y gestionamos campañas en Google, Meta y Taboola, y somos dueños de MarketOnline.",
  },

  common: {
    newTab: "(se abre en una pestaña nueva)",
    homeLabel: "Ludens, ir al inicio",
  },

  nav: {
    links: ["Servicios", "MarketOnline", "Proceso", "Contacto"],
    cta: "Contactanos",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    menuTitle: "Menú",
    primaryNav: "Principal",
    language: "Idioma",
    skipToContent: "Saltar al contenido",
  },

  hero: {
    // Original: "Ambition is the first step towards Ludens S.A"
    eyebrow: "La ambición es el primer paso",
    title: "Campañas optimizadas, gestionadas de punta a punta.",
    subtitle:
      "Google Ads, Meta y Taboola en manos de un solo equipo: estrategia, ejecución y análisis enfocados en tu ROI.",
    primaryCta: "Contactanos",
    secondaryCta: "Ver servicios",
  },

  metrics: {
    title: "Años de experiencia puestos en tu retorno.",
    // Original "About us": "Ludens S.A provides in depth solutions that are based on years of experience to optimize your ROI..."
    body: "Analizamos lo que ya hiciste, investigamos qué funciona hoy y llevamos tus anuncios a la audiencia más relevante. Nuestro equipo domina PPC, CPC, CPA y cada faceta de las campañas online.",
    labels: [
      "Cuentas gestionadas",
      "Años de experiencia",
      "Inversión publicitaria gestionada",
      "Plataformas de anuncios",
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
        title: "Marketing",
        description: "Estrategia y gestión de campañas PPC, CPC y CPA en Google, Meta y Taboola.",
      },
      { title: "Diseño", description: "Creatividades y piezas visuales pensadas para convertir." },
      {
        title: "Redes sociales",
        description: "Contenido y pauta en redes con foco en audiencias relevantes.",
      },
      {
        title: "Sitios web",
        description: "Sitios y landings rápidos, medibles y listos para campañas.",
      },
      { title: "Apps móviles", description: "Desarrollo y promoción de aplicaciones móviles." },
      {
        title: "Plataformas",
        description: "Herramientas propias para gestionar cuentas publicitarias a escala.",
      },
    ],
  },

  marketOnline: {
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
    imageAlt: "Captura de la plataforma MarketOnline",
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

  contact: {
    title: "Hablemos de tus campañas",
    subtitle: "Contanos qué querés lograr y te respondemos con una propuesta concreta.",
    labels: {
      address: "Dirección",
      phone: "Teléfono",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Nombre",
      email: "Email",
      company: "Empresa",
      message: "Mensaje",
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
    legalNav: "Legal",
    cookiePolicy: "Política de cookies",
    cookieSettings: "Configurar cookies",
    rights: "Todos los derechos reservados.",
    phone: "Tel.",
  },

  cookieBanner: {
    title: "Usamos cookies",
    body: "Usamos cookies esenciales para que el sitio funcione y, solo si aceptás, cookies de analítica para entender cómo se usa.",
    policyLink: "Ver política de cookies",
    accept: "Aceptar",
    reject: "Rechazar",
  },

  // TODO: BORRADOR. La política de cookies (en todos los idiomas) debe ser revisada por un asesor legal.
  cookiePolicy: {
    title: "Política de cookies",
    description: "Cómo LUDENS SA usa cookies y tecnologías similares en su sitio web.",
    draftLabel: "Borrador:",
    draftNote:
      "este texto es una versión preliminar y está pendiente de revisión legal. No constituye asesoramiento jurídico.",
    lastUpdated: "Última actualización",
    intro:
      "En LUDENS SA (en adelante, “Ludens”) usamos cookies y tecnologías similares en este sitio web. Esta política explica qué son, cuáles usamos, para qué y cómo podés aceptarlas, rechazarlas o cambiar tu elección en cualquier momento.",
    whatTitle: "¿Qué son las cookies?",
    what: "Las cookies son pequeños archivos de texto que un sitio web guarda en tu navegador cuando lo visitás. Sirven, por ejemplo, para recordar tus preferencias o para obtener información estadística sobre cómo se usa el sitio. También usamos el almacenamiento local del navegador (localStorage), que funciona de forma similar.",
    whichTitle: "Qué cookies usamos",
    table: {
      type: "Tipo",
      purpose: "Finalidad",
      duration: "Duración",
      rows: [
        {
          type: "Esenciales",
          detail: "ludens-cookie-consent (almacenamiento local)",
          purpose:
            "Guardar tu elección sobre las cookies para no volver a preguntarte en cada visita. No requieren consentimiento porque son necesarias para el funcionamiento del sitio.",
          duration: "Hasta que la borres o cambies tu elección",
        },
        {
          type: "Analítica",
          detail: "Google Analytics (_ga, _ga_*)",
          purpose:
            "Medir de forma agregada cuántas personas visitan el sitio y qué secciones consultan, para mejorarlo. Solo se activan si las aceptás.",
          duration: "Hasta 2 años",
        },
      ],
    },
    noAds: "No usamos cookies publicitarias ni vendemos información sobre tus visitas a terceros.",
    manageTitle: "Cómo gestionar tu consentimiento",
    manage: [
      "La primera vez que visitás el sitio te mostramos un aviso para que aceptes o rechaces las cookies no esenciales. Hasta que elijas, solo funcionan las esenciales. Podés cambiar tu decisión en cualquier momento desde el enlace “Configurar cookies” en el pie de página.",
      "También podés bloquear o borrar las cookies desde la configuración de tu navegador. Si lo hacés, es posible que algunas funciones del sitio no se comporten como esperás.",
    ],
    thirdPartiesTitle: "Terceros",
    thirdParties:
      "Si aceptás las cookies de analítica, Google LLC puede tratar datos de navegación según su propia política de privacidad. Los datos se usan de forma agregada y con la dirección IP anonimizada.",
    legalTitle: "Marco legal",
    legal:
      "Tratamos los datos personales de acuerdo con la Ley N.º 18.331 de Protección de Datos Personales de la República Oriental del Uruguay y su normativa complementaria. Podés ejercer tus derechos de acceso, rectificación, actualización, inclusión y supresión escribiéndonos a los datos de contacto que figuran abajo.",
    changesTitle: "Cambios en esta política",
    changes:
      "Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa. Si el cambio es importante, te volveremos a pedir tu consentimiento.",
    contactTitle: "Contacto",
  },
};

export type Dictionary = typeof es;
