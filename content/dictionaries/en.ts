import type { Dictionary } from "./es";

// English. TODO: review by a native speaker before publishing.
export const en: Dictionary = {
  meta: {
    title: "LUDENS SA | Digital marketing in Montevideo",
    description:
      "Ludens SA is a digital marketing agency in Montevideo. We optimize and manage campaigns on Google, Meta and Taboola, and we own MarketOnline.",
  },

  common: {
    newTab: "(opens in a new tab)",
    homeLabel: "Ludens, go to home",
  },

  nav: {
    links: ["Services", "MarketOnline", "Process", "Contact"],
    cta: "Contact us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Menu",
    primaryNav: "Main",
    language: "Language",
    skipToContent: "Skip to content",
  },

  hero: {
    title: "Optimized campaigns, managed end to end.",
    subtitle:
      "One team for your campaigns on Google Ads, Meta and Taboola. Strategy, execution and analysis focused on your ROI.",
    primaryCta: "Contact us",
    secondaryCta: "See services",
  },

  metrics: {
    title: "Years of experience working for your return.",
    body: "We analyze what you have already done, research what works today and put your ads in front of the most relevant audience. Our team masters PPC, CPC, CPA and every facet of online campaigns.",
    labels: ["Accounts managed", "Years of experience", "Ad spend managed", "Ad platforms"],
  },

  services: {
    title: "What we do",
    subtitle:
      "Before we propose anything, we listen to how your business operates. Then we put together the services you need.",
    items: [
      {
        title: "Marketing",
        description: "Strategy and management of PPC, CPC and CPA campaigns on Google, Meta and Taboola.",
      },
      { title: "Design", description: "Creatives and visual assets built to convert." },
      {
        title: "Social media",
        description: "Content and paid social focused on relevant audiences.",
      },
      { title: "Websites", description: "Fast, measurable websites and landing pages ready for campaigns." },
      { title: "Mobile apps", description: "Development and promotion of mobile applications." },
      { title: "Platforms", description: "In-house tools to manage ad accounts at scale." },
    ],
  },

  marketOnline: {
    title: "Proud owners of MarketOnline.",
    description:
      "MarketOnline is our centralized campaign management platform. Agencies and brands run Google Ads, Facebook Ads and Taboola from a single environment.",
    features: [
      "Multi-platform control from a single interface",
      "Secure access through controlled browser environments",
      "Multi-tenant structure to separate clients, teams and projects",
      "Dedicated cards per account to control budget and spend",
    ],
    cta: "Discover MarketOnline",
    imageAlt: "Screenshot of the MarketOnline platform",
  },

  process: {
    title: "How we work",
    subtitle: "Four stages, one team by your side at every step.",
    steps: [
      {
        title: "Strategy",
        description:
          "We define exactly what your goals are, whether that is acquiring customers or growing sales, and build a comprehensive marketing strategy.",
      },
      {
        title: "Advertising",
        description:
          "We analyze your business and create an execution plan that makes the most of every growth opportunity.",
      },
      {
        title: "Results",
        description:
          "We work with you from planning through execution, reporting and results analysis.",
      },
      {
        title: "Optimization",
        description: "We monitor results at every stage and use them to win even more.",
      },
    ],
  },

  contact: {
    title: "Let's talk about your campaigns",
    subtitle: "Tell us what you want to achieve and we'll reply with a concrete proposal.",
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
      optional: "(optional)",
      submit: "Send message",
      submitting: "Sending…",
      success: "Thank you! We received your message and will get back to you shortly.",
      error: "We couldn't send your message. Please try again or email or WhatsApp us directly.",
      notConfigured:
        "The form isn't connected yet. Please reach us by email or WhatsApp in the meantime.",
      errors: {
        nameRequired: "Please enter your name.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email, for example name@company.com.",
        messageRequired: "Tell us how we can help.",
        messageShort: "Your message must be at least 10 characters long.",
      },
    },
  },

  footer: {
    tagline: "All your ads in one place.",
    legalNav: "Legal",
    cookiePolicy: "Cookie policy",
    cookieSettings: "Cookie settings",
    rights: "All rights reserved.",
    phone: "Phone",
  },

  cookieBanner: {
    title: "We use cookies",
    body: "We use essential cookies to make the site work and, only if you accept, analytics cookies to understand how it is used.",
    policyLink: "Read the cookie policy",
    accept: "Accept",
    reject: "Reject",
  },

  cookiePolicy: {
    title: "Cookie policy",
    description: "How LUDENS SA uses cookies and similar technologies on its website.",
    lastUpdated: "Last updated",
    intro:
      "At LUDENS SA (“Ludens”) we use cookies and similar technologies on this website. This policy explains what they are, which ones we use, why, and how you can accept them, reject them or change your choice at any time.",
    whatTitle: "What are cookies?",
    what: "Cookies are small text files that a website stores in your browser when you visit it. They are used, for example, to remember your preferences or to collect statistics about how the site is used. We also use the browser's local storage (localStorage), which works in a similar way.",
    whichTitle: "Which cookies we use",
    table: {
      type: "Type",
      purpose: "Purpose",
      duration: "Duration",
      rows: [
        {
          type: "Essential",
          detail: "ludens-cookie-consent (local storage)",
          purpose:
            "Stores your cookie choice so we don't ask you again on every visit. They don't require consent because the site needs them to work.",
          duration: "Until you delete it or change your choice",
        },
        {
          type: "Analytics",
          detail: "Google Analytics (_ga, _ga_*)",
          purpose:
            "Measure, in aggregate, how many people visit the site and which sections they view, so we can improve it. They are only activated if you accept them.",
          duration: "Up to 2 years",
        },
      ],
    },
    noAds: "We don't use advertising cookies and we don't sell information about your visits to third parties.",
    manageTitle: "How to manage your consent",
    manage: [
      "The first time you visit the site we show a notice so you can accept or reject non-essential cookies. Until you choose, only essential cookies are active. You can change your decision at any time using the “Cookie settings” link in the footer.",
      "You can also block or delete cookies in your browser settings. If you do, some features of the site may not work as expected.",
    ],
    thirdPartiesTitle: "Third parties",
    thirdParties:
      "If you accept analytics cookies, Google LLC may process browsing data under its own privacy policy. The data is used in aggregate and with the IP address anonymized.",
    legalTitle: "Legal framework",
    legal:
      "We process personal data in accordance with Law No. 18.331 on the Protection of Personal Data of the Oriental Republic of Uruguay and its complementary regulations. You can exercise your rights of access, rectification, update, inclusion and deletion by writing to us at the contact details below.",
    changesTitle: "Changes to this policy",
    changes:
      "We may update this policy to reflect changes to the site or to the regulations. If the change is significant, we will ask for your consent again.",
    contactTitle: "Contact",
  },
};
