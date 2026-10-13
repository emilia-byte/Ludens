import type { Dictionary } from "./es";

// Français. TODO : faire relire par un locuteur natif avant publication.
export const fr: Dictionary = {
  meta: {
    title: "LUDENS SA | Marketing digital à Montevideo",
    description:
      "Ludens SA est une agence de marketing digital basée à Montevideo. Nous optimisons et gérons des campagnes sur Google, Meta et Taboola, et sommes propriétaires de MarketOnline.",
  },

  common: {
    newTab: "(s'ouvre dans un nouvel onglet)",
    homeLabel: "Ludens, aller à l'accueil",
  },

  nav: {
    links: ["Services", "MarketOnline", "Méthode", "Contact"],
    cta: "Nous contacter",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    menuTitle: "Menu",
    primaryNav: "Principal",
    language: "Langue",
    skipToContent: "Aller au contenu",
  },

  hero: {
    title: "Des campagnes optimisées, gérées de bout en bout.",
    subtitle:
      "Une seule équipe pour vos campagnes sur Google Ads, Meta et Taboola. Stratégie, exécution et analyse centrées sur votre ROI.",
    primaryCta: "Nous contacter",
    secondaryCta: "Voir les services",
  },

  metrics: {
    title: "Des années d'expérience au service de votre rentabilité.",
    body: "Nous analysons ce que vous avez déjà fait, étudions ce qui fonctionne aujourd'hui et diffusons vos annonces auprès de l'audience la plus pertinente. Notre équipe maîtrise le PPC, le CPC, le CPA et chaque facette des campagnes en ligne.",
    labels: [
      "Comptes gérés",
      "Années d'expérience",
      "Budget publicitaire géré",
      "Plateformes publicitaires",
    ],
  },

  services: {
    title: "Ce que nous faisons",
    subtitle:
      "Avant de proposer quoi que ce soit, nous écoutons comment fonctionne votre entreprise. Ensuite, nous réunissons les services dont vous avez besoin.",
    items: [
      {
        title: "Marketing",
        description: "Stratégie et gestion de campagnes PPC, CPC et CPA sur Google, Meta et Taboola.",
      },
      { title: "Design", description: "Créations et supports visuels pensés pour convertir." },
      {
        title: "Réseaux sociaux",
        description: "Contenus et publicité sociale ciblant des audiences pertinentes.",
      },
      {
        title: "Sites web",
        description: "Sites et landing pages rapides, mesurables et prêts pour vos campagnes.",
      },
      { title: "Applications mobiles", description: "Développement et promotion d'applications mobiles." },
      {
        title: "Plateformes",
        description: "Outils maison pour gérer des comptes publicitaires à grande échelle.",
      },
    ],
  },

  marketOnline: {
    title: "Fiers d'être les propriétaires de MarketOnline.",
    description:
      "MarketOnline est notre plateforme de gestion centralisée des campagnes. Agences et marques pilotent Google Ads, Facebook Ads et Taboola depuis un seul environnement.",
    features: [
      "Contrôle multiplateforme depuis une interface unique",
      "Accès sécurisé grâce à des environnements de navigation contrôlés",
      "Structure multi-tenant pour séparer clients, équipes et projets",
      "Cartes dédiées par compte pour maîtriser budget et dépenses",
    ],
    cta: "Découvrir MarketOnline",
    imageAlt: "Capture d'écran de la plateforme MarketOnline",
  },

  process: {
    title: "Notre méthode",
    subtitle: "Quatre étapes, une seule équipe à vos côtés à chacune d'elles.",
    steps: [
      {
        title: "Stratégie",
        description:
          "Nous définissons précisément vos objectifs, qu'il s'agisse d'acquérir des clients ou d'augmenter vos ventes, et construisons une stratégie marketing complète.",
      },
      {
        title: "Publicité",
        description:
          "Nous analysons votre activité et créons un plan d'exécution qui exploite chaque opportunité de croissance.",
      },
      {
        title: "Résultats",
        description:
          "Nous vous accompagnons de la planification à l'exécution, au reporting et à l'analyse des résultats.",
      },
      {
        title: "Optimisation",
        description: "Nous suivons les résultats à chaque étape et nous en servons pour obtenir encore plus.",
      },
    ],
  },

  contact: {
    title: "Parlons de vos campagnes",
    subtitle: "Dites-nous ce que vous voulez atteindre et nous vous répondrons avec une proposition concrète.",
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "E-mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Nom",
      email: "E-mail",
      company: "Entreprise",
      message: "Message",
      optional: "(facultatif)",
      submit: "Envoyer le message",
      submitting: "Envoi en cours…",
      success: "Merci ! Nous avons bien reçu votre message et revenons vers vous rapidement.",
      error:
        "Le message n'a pas pu être envoyé. Réessayez ou écrivez-nous directement par e-mail ou WhatsApp.",
      notConfigured:
        "Le formulaire n'est pas encore connecté. En attendant, écrivez-nous par e-mail ou WhatsApp.",
      errors: {
        nameRequired: "Indiquez votre nom.",
        emailRequired: "Indiquez votre e-mail.",
        emailInvalid: "Indiquez un e-mail valide, par exemple nom@entreprise.com.",
        messageRequired: "Dites-nous comment nous pouvons vous aider.",
        messageShort: "Le message doit contenir au moins 10 caractères.",
      },
    },
  },

  footer: {
    tagline: "Toutes vos annonces au même endroit.",
    legalNav: "Mentions légales",
    cookiePolicy: "Politique de cookies",
    cookieSettings: "Paramètres des cookies",
    rights: "Tous droits réservés.",
    phone: "Tél.",
  },

  cookieBanner: {
    title: "Nous utilisons des cookies",
    body: "Nous utilisons des cookies essentiels au fonctionnement du site et, uniquement si vous acceptez, des cookies d'analyse pour comprendre comment il est utilisé.",
    policyLink: "Lire la politique de cookies",
    accept: "Accepter",
    reject: "Refuser",
  },

  cookiePolicy: {
    title: "Politique de cookies",
    description: "Comment LUDENS SA utilise les cookies et technologies similaires sur son site web.",
    draftLabel: "Brouillon :",
    draftNote:
      "ce texte est une version préliminaire en attente de relecture juridique. Il ne constitue pas un conseil juridique.",
    lastUpdated: "Dernière mise à jour",
    intro:
      "LUDENS SA (ci-après « Ludens ») utilise des cookies et des technologies similaires sur ce site web. Cette politique explique ce qu'ils sont, lesquels nous utilisons, dans quel but, et comment vous pouvez les accepter, les refuser ou modifier votre choix à tout moment.",
    whatTitle: "Qu'est-ce qu'un cookie ?",
    what: "Les cookies sont de petits fichiers texte qu'un site web enregistre dans votre navigateur lorsque vous le visitez. Ils servent, par exemple, à mémoriser vos préférences ou à obtenir des statistiques sur l'utilisation du site. Nous utilisons aussi le stockage local du navigateur (localStorage), qui fonctionne de façon similaire.",
    whichTitle: "Les cookies que nous utilisons",
    table: {
      type: "Type",
      purpose: "Finalité",
      duration: "Durée",
      rows: [
        {
          type: "Essentiels",
          detail: "ludens-cookie-consent (stockage local)",
          purpose:
            "Enregistrer votre choix concernant les cookies pour ne pas vous le redemander à chaque visite. Ils ne nécessitent pas de consentement car ils sont indispensables au fonctionnement du site.",
          duration: "Jusqu'à ce que vous le supprimiez ou modifiiez votre choix",
        },
        {
          type: "Analyse",
          detail: "Google Analytics (_ga, _ga_*)",
          purpose:
            "Mesurer de façon agrégée combien de personnes visitent le site et quelles sections elles consultent, afin de l'améliorer. Ils ne sont activés que si vous les acceptez.",
          duration: "Jusqu'à 2 ans",
        },
      ],
    },
    noAds: "Nous n'utilisons pas de cookies publicitaires et ne vendons aucune information sur vos visites à des tiers.",
    manageTitle: "Gérer votre consentement",
    manage: [
      "Lors de votre première visite, nous affichons un bandeau pour que vous acceptiez ou refusiez les cookies non essentiels. Tant que vous n'avez pas choisi, seuls les cookies essentiels sont actifs. Vous pouvez modifier votre décision à tout moment via le lien « Paramètres des cookies » en bas de page.",
      "Vous pouvez aussi bloquer ou supprimer les cookies dans les réglages de votre navigateur. Dans ce cas, certaines fonctionnalités du site pourraient ne pas fonctionner comme prévu.",
    ],
    thirdPartiesTitle: "Tiers",
    thirdParties:
      "Si vous acceptez les cookies d'analyse, Google LLC peut traiter des données de navigation conformément à sa propre politique de confidentialité. Les données sont utilisées de façon agrégée et avec une adresse IP anonymisée.",
    legalTitle: "Cadre légal",
    legal:
      "Nous traitons les données personnelles conformément à la loi n° 18.331 sur la protection des données personnelles de la République orientale de l'Uruguay et à sa réglementation complémentaire. Vous pouvez exercer vos droits d'accès, de rectification, de mise à jour, d'inclusion et de suppression en nous écrivant aux coordonnées ci-dessous.",
    changesTitle: "Modifications de cette politique",
    changes:
      "Nous pouvons mettre à jour cette politique pour refléter des changements du site ou de la réglementation. Si le changement est important, nous vous redemanderons votre consentement.",
    contactTitle: "Contact",
  },
};
