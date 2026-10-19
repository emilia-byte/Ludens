import type { Dictionary } from "./es";

// Deutsch. TODO: vor der Veröffentlichung von einer Muttersprachlerin oder einem Muttersprachler prüfen lassen.
export const de: Dictionary = {
  meta: {
    title: "LUDENS SA | Digitales Marketing in Montevideo",
    description:
      "Ludens SA ist eine Agentur für digitales Marketing in Montevideo. Wir optimieren und verwalten Kampagnen auf Google, Meta und Taboola und sind Eigentümer von MarketOnline.",
  },

  common: {
    newTab: "(öffnet in einem neuen Tab)",
    homeLabel: "Ludens, zur Startseite",
  },

  nav: {
    links: ["Leistungen", "MarketOnline", "Ablauf", "Kontakt"],
    cta: "Kontakt aufnehmen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    menuTitle: "Menü",
    primaryNav: "Hauptnavigation",
    language: "Sprache",
    skipToContent: "Zum Inhalt springen",
  },

  hero: {
    title: "Optimierte Kampagnen, von A bis Z betreut.",
    subtitle:
      "Ein Team für Ihre Kampagnen auf Google Ads, Meta und Taboola. Strategie, Umsetzung und Analyse mit Fokus auf Ihren ROI.",
    primaryCta: "Kontakt aufnehmen",
    secondaryCta: "Leistungen ansehen",
  },

  metrics: {
    title: "Jahrelange Erfahrung für Ihre Rendite.",
    body: "Wir analysieren, was Sie bereits umgesetzt haben, prüfen, was heute funktioniert, und bringen Ihre Anzeigen vor die relevanteste Zielgruppe. Unser Team beherrscht PPC, CPC, CPA und alle Facetten von Online-Kampagnen.",
    labels: [
      "Betreute Konten",
      "Jahre Erfahrung",
      "Verwaltetes Werbebudget",
      "Werbeplattformen",
    ],
  },

  services: {
    title: "Was wir tun",
    subtitle:
      "Bevor wir etwas vorschlagen, hören wir zu, wie Ihr Unternehmen arbeitet. Dann stellen wir die Leistungen zusammen, die Sie brauchen.",
    items: [
      {
        title: "Marketing",
        description: "Strategie und Management von PPC-, CPC- und CPA-Kampagnen auf Google, Meta und Taboola.",
      },
      { title: "Design", description: "Werbemittel und visuelle Inhalte, die konvertieren." },
      {
        title: "Social Media",
        description: "Inhalte und bezahlte Social-Media-Kampagnen für relevante Zielgruppen.",
      },
      {
        title: "Websites",
        description: "Schnelle, messbare Websites und Landingpages, bereit für Kampagnen.",
      },
      { title: "Mobile Apps", description: "Entwicklung und Vermarktung mobiler Anwendungen." },
      {
        title: "Plattformen",
        description: "Eigene Tools, um Werbekonten im großen Maßstab zu verwalten.",
      },
    ],
  },

  marketOnline: {
    title: "Stolze Eigentümer von MarketOnline.",
    description:
      "MarketOnline ist unsere Plattform für zentrales Kampagnenmanagement. Agenturen und Marken steuern Google Ads, Facebook Ads und Taboola aus einer einzigen Umgebung.",
    features: [
      "Plattformübergreifende Steuerung über eine Oberfläche",
      "Sicherer Zugang über kontrollierte Browser-Umgebungen",
      "Multi-Tenant-Struktur zur Trennung von Kunden, Teams und Projekten",
      "Eigene Karten pro Konto zur Kontrolle von Budget und Ausgaben",
    ],
    cta: "MarketOnline entdecken",
    imageAlt: "Screenshot der Plattform MarketOnline",
  },

  process: {
    title: "So arbeiten wir",
    subtitle: "Vier Phasen, ein Team, das Sie bei jeder begleitet.",
    steps: [
      {
        title: "Strategie",
        description:
          "Wir legen Ihre Ziele genau fest, ob Neukundengewinnung oder mehr Umsatz, und entwickeln eine umfassende Marketingstrategie.",
      },
      {
        title: "Werbung",
        description:
          "Wir analysieren Ihr Unternehmen und erstellen einen Umsetzungsplan, der jede Wachstumschance nutzt.",
      },
      {
        title: "Ergebnisse",
        description:
          "Wir begleiten Sie von der Planung über die Umsetzung bis zu Reporting und Ergebnisanalyse.",
      },
      {
        title: "Optimierung",
        description: "Wir überwachen die Ergebnisse in jeder Phase und nutzen sie, um noch mehr zu erreichen.",
      },
    ],
  },

  contact: {
    title: "Sprechen wir über Ihre Kampagnen",
    subtitle: "Sagen Sie uns, was Sie erreichen möchten, und wir antworten mit einem konkreten Vorschlag.",
    labels: {
      address: "Adresse",
      phone: "Telefon",
      email: "E-Mail",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
    },
    form: {
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen",
      message: "Nachricht",
      optional: "(optional)",
      submit: "Nachricht senden",
      submitting: "Wird gesendet…",
      success: "Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze.",
      error:
        "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt per E-Mail oder WhatsApp.",
      notConfigured:
        "Das Formular ist noch nicht verbunden. Bitte kontaktieren Sie uns bis dahin per E-Mail oder WhatsApp.",
      errors: {
        nameRequired: "Bitte geben Sie Ihren Namen ein.",
        emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
        emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@firma.com.",
        messageRequired: "Sagen Sie uns, wie wir helfen können.",
        messageShort: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
      },
    },
  },

  footer: {
    tagline: "Alle Ihre Anzeigen an einem Ort.",
    legalNav: "Rechtliches",
    cookiePolicy: "Cookie-Richtlinie",
    cookieSettings: "Cookie-Einstellungen",
    rights: "Alle Rechte vorbehalten.",
    phone: "Tel.",
  },

  cookieBanner: {
    title: "Wir verwenden Cookies",
    body: "Wir verwenden notwendige Cookies, damit die Website funktioniert, und nur mit Ihrer Zustimmung Analyse-Cookies, um zu verstehen, wie sie genutzt wird.",
    policyLink: "Cookie-Richtlinie lesen",
    accept: "Akzeptieren",
    reject: "Ablehnen",
  },

  cookiePolicy: {
    title: "Cookie-Richtlinie",
    description: "Wie LUDENS SA Cookies und ähnliche Technologien auf ihrer Website verwendet.",
    lastUpdated: "Zuletzt aktualisiert",
    intro:
      "LUDENS SA (im Folgenden „Ludens“) verwendet auf dieser Website Cookies und ähnliche Technologien. Diese Richtlinie erklärt, was sie sind, welche wir verwenden, wozu, und wie Sie sie jederzeit akzeptieren, ablehnen oder Ihre Auswahl ändern können.",
    whatTitle: "Was sind Cookies?",
    what: "Cookies sind kleine Textdateien, die eine Website beim Besuch in Ihrem Browser speichert. Sie dienen zum Beispiel dazu, Ihre Einstellungen zu speichern oder Statistiken über die Nutzung der Website zu erheben. Wir verwenden außerdem den lokalen Speicher des Browsers (localStorage), der ähnlich funktioniert.",
    whichTitle: "Welche Cookies wir verwenden",
    table: {
      type: "Art",
      purpose: "Zweck",
      duration: "Dauer",
      rows: [
        {
          type: "Notwendig",
          detail: "ludens-cookie-consent (lokaler Speicher)",
          purpose:
            "Speichert Ihre Cookie-Auswahl, damit wir Sie nicht bei jedem Besuch erneut fragen. Sie erfordern keine Einwilligung, da sie für den Betrieb der Website erforderlich sind.",
          duration: "Bis Sie sie löschen oder Ihre Auswahl ändern",
        },
        {
          type: "Analyse",
          detail: "Google Analytics (_ga, _ga_*)",
          purpose:
            "Aggregiert messen, wie viele Personen die Website besuchen und welche Bereiche sie aufrufen, um sie zu verbessern. Sie werden nur aktiviert, wenn Sie zustimmen.",
          duration: "Bis zu 2 Jahre",
        },
      ],
    },
    noAds: "Wir verwenden keine Werbe-Cookies und verkaufen keine Informationen über Ihre Besuche an Dritte.",
    manageTitle: "So verwalten Sie Ihre Einwilligung",
    manage: [
      "Beim ersten Besuch zeigen wir Ihnen einen Hinweis, damit Sie nicht notwendige Cookies akzeptieren oder ablehnen können. Bis Sie wählen, sind nur notwendige Cookies aktiv. Sie können Ihre Entscheidung jederzeit über den Link „Cookie-Einstellungen“ in der Fußzeile ändern.",
      "Sie können Cookies auch in den Einstellungen Ihres Browsers blockieren oder löschen. In diesem Fall funktionieren einige Funktionen der Website möglicherweise nicht wie erwartet.",
    ],
    thirdPartiesTitle: "Dritte",
    thirdParties:
      "Wenn Sie Analyse-Cookies akzeptieren, kann Google LLC Nutzungsdaten gemäß ihrer eigenen Datenschutzerklärung verarbeiten. Die Daten werden aggregiert und mit anonymisierter IP-Adresse verwendet.",
    legalTitle: "Rechtsrahmen",
    legal:
      "Wir verarbeiten personenbezogene Daten gemäß dem Gesetz Nr. 18.331 zum Schutz personenbezogener Daten der Republik Östlich des Uruguay und den ergänzenden Vorschriften. Sie können Ihre Rechte auf Auskunft, Berichtigung, Aktualisierung, Aufnahme und Löschung ausüben, indem Sie uns über die unten angegebenen Kontaktdaten schreiben.",
    changesTitle: "Änderungen dieser Richtlinie",
    changes:
      "Wir können diese Richtlinie aktualisieren, um Änderungen der Website oder der Rechtslage zu berücksichtigen. Bei wesentlichen Änderungen bitten wir Sie erneut um Ihre Einwilligung.",
    contactTitle: "Kontakt",
  },
};
