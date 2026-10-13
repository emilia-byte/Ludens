// Contenido del sitio de Ludens SA.
// Fuente: https://www.ludenssa.com/ (en inglés en el original, adaptado al español).
// El texto original está en los comentarios `source` como referencia.

export const site = {
  name: "Ludens SA",
  legalName: "LUDENS SA",
  // Original: "Managed Digital Marketing Platform - All your advertisements in one place"
  tagline: "Plataforma de marketing digital gestionado: todos tus anuncios en un solo lugar.",

  contact: {
    // El sitio actual dice "Misiones 1481"; usamos la dirección que indicó el cliente.
    address: "Luis Bonavita 1294",
    city: "Montevideo, Uruguay",
    phoneDisplay: "097 078 100",
    phoneHref: "tel:+59897078100",
    // TODO: confirmar email. El sitio muestra "Info@Ludenssa.com" pero el mailto apunta a otra dirección.
    email: "info@ludenssa.com",
    whatsapp: "https://wa.me/59897078100",
    linkedin: "https://www.linkedin.com/company/ludens-sa",
  },

  hero: {
    // Original: "AMBITION IS THE FIRST STEP TOWARDS LUDENS S.A"
    title: "Optimizamos y gestionamos tus campañas para maximizar el retorno",
    subtitle:
      "Google Ads, Facebook Ads, Taboola y más, con estrategia, ejecución y análisis en manos de un solo equipo.",
  },

  about: {
    // Original "About us"
    paragraphs: [
      "Ludens SA ofrece soluciones en profundidad, basadas en años de experiencia, para optimizar tu ROI.",
      "Nuestra estrategia integral abarca contenido, selección de medios y planificación de ad sets, analizando esfuerzos pasados e investigando optimizaciones actuales para llegar a la audiencia más relevante y lograr resultados más rentables.",
      "Nuestro equipo domina PPC, CPC, CPA y muchas otras facetas de las campañas online. De Google Ads a Facebook Ads y marketing de contenidos, te ayudamos a encontrar las formas más inteligentes de alcanzar tus objetivos, clientes e ingresos.",
    ],
  },

  // Original: no hay cifras en el sitio actual.
  metrics: [
    { value: "TODO", label: "Cuentas gestionadas" },
    { value: "TODO", label: "Años de experiencia" },
    { value: "TODO", label: "Inversión publicitaria gestionada" },
    { value: "TODO", label: "Plataformas de anuncios" },
  ],

  services: {
    // Original: "What We Do" / "Closely listen to our clients existing modes of operation"
    title: "Qué hacemos",
    subtitle: "Escuchamos de cerca cómo opera cada cliente antes de proponer.",
    // El sitio actual solo lista los nombres; las descripciones son redacción nueva para revisar.
    items: [
      { icon: "megaphone", title: "Marketing", description: "Estrategia y gestión de campañas PPC, CPC y CPA en Google, Meta y Taboola." },
      { icon: "palette", title: "Diseño", description: "Creatividades y piezas visuales pensadas para convertir." },
      { icon: "share", title: "Redes sociales", description: "Contenido y pauta en redes con foco en audiencias relevantes." },
      { icon: "globe", title: "Sitios web", description: "Sitios y landings rápidos, medibles y listos para campañas." },
      { icon: "smartphone", title: "Apps móviles", description: "Desarrollo y promoción de aplicaciones móviles." },
      { icon: "layers", title: "Plataformas", description: "Herramientas propias para gestionar cuentas publicitarias a escala." },
    ],
  },

  marketOnline: {
    url: "https://www.marketonline.me/",
    // Fuente: marketonline.me — "Centralised Campaign Management Made Easier"
    title: "Orgullosos de ser los dueños de MarketOnline",
    description:
      "MarketOnline es nuestra plataforma de gestión centralizada de campañas: permite a agencias y marcas administrar Google Ads, Facebook Ads y Taboola desde un único entorno.",
    features: [
      "Control multiplataforma desde una sola interfaz",
      "Acceso seguro con entornos de navegador controlados",
      "Estructura multi-tenant para separar clientes, equipos y proyectos",
      "Tarjetas dedicadas por cuenta para controlar presupuesto y gasto",
    ],
    cta: "Conocé MarketOnline",
  },

  process: {
    title: "Cómo trabajamos",
    steps: [
      { title: "Estrategia", description: "Definimos exactamente tus objetivos, ya sea captar clientes o aumentar ventas, y armamos una estrategia de marketing integral." },
      { title: "Publicidad", description: "Analizamos tu negocio y creamos un plan de ejecución que aprovecha cada oportunidad de crecimiento." },
      { title: "Resultados", description: "Te acompañamos desde la planificación hasta la ejecución, los reportes y el análisis de resultados." },
      { title: "Optimización", description: "Monitoreamos los resultados en cada etapa y los usamos para conseguir aún más." },
    ],
  },
} as const;
