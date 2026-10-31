export const paypalNavData = {
  logo: {
    alt: "PayPal",
    href: "/",
  },
  menuItems: [
    {
      id: "personal",
      label: "Personal",
      segmentTitle: "PayPal for You",
      segmentHref: "#personal-checkout",
      subtext: null,
      sections: [
        {
          id: "explore-paypal",
          title: "Explore PayPal",
          links: [
            { text: "Paying with PayPal", href: "#paying-with-paypal" },
            { text: "Send & Request payments", href: "#send-request-payments" },
            { text: "Pay securely", href: "#pay-securely" },
          ],
        },
      ],
      actionPills: [
        { text: "Get the App", href: "#get-the-app", type: "pill" },
      ],
    },
    {
      id: "business",
      label: "Business",
      segmentTitle: "PayPal Open",
      segmentSubtext: "The platform for all business",
      segmentHref: "#business",
      sections: [
        {
          id: "accept-payments",
          title: "Accept Payments",
          links: [
            { text: "Online Checkout", href: "#online-checkout" },
            { text: "Invoicing", href: "#invoicing" },
            { text: "Payment Links", href: "#payment-links" },
          ],
        },
        {
          id: "risk-operations",
          title: "Risk & Operations",
          links: [
            { text: "Make Payments", href: "#make-payments" },
            { text: "Reporting Tools", href: "#reporting-tools" },
          ],
        },
      ],
      actionPills: [
        { text: "Get Started", href: "#get-started", type: "pill" },
        { text: "Fees", href: "#fees", type: "pill" },
        { text: "Business Resource Center", href: "#brc", type: "link" },
      ],
    },
    {
      id: "partners",
      label: "Partners",
      segmentTitle: "Become a Partner",
      segmentHref: "#become-a-partner",
      subtext: null,
      sections: [
        {
          id: "partner-network",
          title: "Partners",
          links: [
            { text: "Become a Partner", href: "#become-a-partner" },
            { text: "Partner Directory", href: "#partner-directory" },
          ],
        },
      ],
      actionPills: [],
    },
    {
      id: "useful-info",
      label: "Useful Info",
      segmentTitle: "Resources & Support",
      segmentHref: "#resources",
      subtext: null,
      sections: [
        {
          id: "compliance-security",
          title: "Security & Compliance",
          links: [
            { text: "Know your customer (KYC)", href: "#kyc" },
            { text: "Online Security", href: "#online-security" },
            { text: "Fraud Prevention", href: "#fraud-prevention" },
            { text: "Phishing Protection", href: "#phishing" },
          ],
        },
        {
          id: "regulatory-help",
          title: "Regulatory & Help",
          links: [
            { text: "PCI Compliance", href: "#pci-compliance" },
            { text: "Foreign Inward Remittance Advise (FIRA)", href: "#fira" },
            { text: "Tax Deducted at Source & Ariba registration", href: "#tds" },
            { text: "Help Centre", href: "#help-centre" },
          ],
        },
      ],
      actionPills: [],
    },
  ],
  auth: {
    login: {
      text: "Log In",
      href: "#login",
    },
    signup: {
      text: "Sign Up",
      href: "#signup",
    },
  },
  hero: {
    defaultSegment: "business",
    segments: [
      { id: "personal", label: "Personal" },
      { id: "business", label: "Business" },
    ],
    contentBySegment: {
      business: {
        title: "PayPal Open",
        subtitle: "One platform for your business needs",
        description:
          "PayPal Open unifies your PayPal business solutions to help you get paid, get growing, and get ahead.",
        primaryCta: {
          text: "Sign Up",
          href: "#signup",
        },
        secondaryCta: {
          text: "Contact Sales",
          href: "#contact-sales",
        },
      },
      personal: {
        title: "PayPal Open",
        subtitle: "One platform for your everyday payments",
        description:
          "Send, spend, and manage your money with confidence—all from one secure place.",
        primaryCta: {
          text: "Sign Up",
          href: "#signup",
        },
        secondaryCta: {
          text: "Get the App",
          href: "#get-the-app",
        },
      },
    },
  },
};
