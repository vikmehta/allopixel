import type { Lang } from "@/lib/i18n";

type Section = { heading: string; body: string[] };
type Policy = {
  label: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
};

const EMAIL = "info.allopixel@gmail.com";

export const privacy: Record<Lang, Policy> = {
  en: {
    label: "Legal",
    title: "Privacy Policy",
    updated: "Last updated: November 2, 2026",
    intro:
      "We respect your privacy. This page explains, in plain language, what personal information AllôPixel collects through this website, why, who can see it, and how you can control it.",
    sections: [
      {
        heading: "Who we are",
        body: [
          `AllôPixel is a small creative studio offering brand, web design and related services. In this policy, "we" and "us" mean AllôPixel.`,
          `The person responsible for protecting personal information at AllôPixel can be reached at ${EMAIL}.`,
        ],
      },
      {
        heading: "What we collect",
        body: [
          "When you send us a message through the contact form, we collect your name, your email address, the type of project, your budget range and the message you write.",
          "If you email us directly, we keep your email address and the content of your message.",
          "Please don't include sensitive information (for example health or financial details) in your message. We don't need it to answer you.",
          "This website does not use analytics tools, advertising trackers or tracking cookies.",
        ],
      },
      {
        heading: "Why we collect it",
        body: [
          "We use your details only to reply to your enquiry, prepare a quote and, if you hire us, run your project.",
          "We won't add you to a mailing list or send you marketing emails unless you ask us to.",
        ],
      },
      {
        heading: "Who we share it with",
        body: [
          "We don't sell your information. To run the website and answer you, we rely on a few service providers:",
          "• Our contact form is handled by a third-party form service (Formspree), which receives your submission and forwards it to our inbox.",
          "• We read and answer messages using an email service (Gmail, provided by Google).",
          "• Our website host may keep standard technical records, such as your IP address, to keep the site running and secure.",
          "Some of these providers store or process information outside Québec and outside Canada, including in the United States. We may also disclose information if the law requires us to.",
        ],
      },
      {
        heading: "How long we keep it",
        body: [
          "If you contact us and no project goes ahead, we delete your enquiry within 12 months.",
          "If you become a client, we keep your information for the length of the project and for as long as the law requires us to keep business records.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "This website does not set cookies to track you or to show you advertising.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          `You can ask us at any time, by writing to ${EMAIL}, to tell you what personal information we hold about you, to correct it, to delete it, or to stop using it. We will reply within 30 days.`,
          "If you are not satisfied with our answer, you can contact the Commission d'accès à l'information du Québec (cai.gouv.qc.ca).",
        ],
      },
      {
        heading: "Keeping your information safe",
        body: [
          "We take reasonable steps to protect your information, and we limit who can see it. No method of sending information over the internet is completely secure. If a confidentiality incident affecting you occurs, we will tell you as the law requires.",
        ],
      },
      {
        heading: "Changes to this policy",
        body: [
          "If we change this policy, we will update the date at the top of this page.",
        ],
      },
      {
        heading: "Questions",
        body: [`Write to us at ${EMAIL}.`],
      },
    ],
  },
  fr: {
    label: "Légal",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : 2 novembre 2026",
    intro:
      "Nous respectons votre vie privée. Cette page explique, en langage simple, quels renseignements personnels AllôPixel recueille par l'entremise de ce site, pourquoi, qui peut y accéder et comment vous pouvez les contrôler.",
    sections: [
      {
        heading: "Qui nous sommes",
        body: [
          `AllôPixel est un petit studio créatif qui offre des services d'image de marque, de conception web et des services connexes. Dans cette politique, « nous » désigne AllôPixel.`,
          `La personne responsable de la protection des renseignements personnels chez AllôPixel peut être jointe à ${EMAIL}.`,
        ],
      },
      {
        heading: "Ce que nous recueillons",
        body: [
          "Lorsque vous nous écrivez par le formulaire de contact, nous recueillons votre nom, votre adresse courriel, le type de projet, votre fourchette de budget et le message que vous rédigez.",
          "Si vous nous écrivez directement par courriel, nous conservons votre adresse courriel et le contenu de votre message.",
          "Veuillez ne pas inclure de renseignements sensibles (par exemple des données de santé ou financières) dans votre message. Nous n'en avons pas besoin pour vous répondre.",
          "Ce site n'utilise ni outil d'analyse, ni traceur publicitaire, ni témoin de suivi.",
        ],
      },
      {
        heading: "Pourquoi nous les recueillons",
        body: [
          "Nous utilisons vos renseignements uniquement pour répondre à votre demande, préparer une soumission et, si vous nous engagez, réaliser votre projet.",
          "Nous ne vous inscrirons pas à une liste d'envoi et ne vous enverrons pas de courriels promotionnels, sauf si vous nous le demandez.",
        ],
      },
      {
        heading: "Avec qui nous les partageons",
        body: [
          "Nous ne vendons pas vos renseignements. Pour faire fonctionner le site et vous répondre, nous faisons appel à quelques fournisseurs de services :",
          "• Notre formulaire de contact est géré par un service tiers (Formspree), qui reçoit votre envoi et le transmet à notre boîte de réception.",
          "• Nous lisons et répondons aux messages à l'aide d'un service de courriel (Gmail, fourni par Google).",
          "• Notre hébergeur peut conserver des relevés techniques standards, comme votre adresse IP, pour assurer le bon fonctionnement et la sécurité du site.",
          "Certains de ces fournisseurs conservent ou traitent des renseignements à l'extérieur du Québec et du Canada, notamment aux États-Unis. Nous pouvons aussi communiquer des renseignements si la loi l'exige.",
        ],
      },
      {
        heading: "Combien de temps nous les conservons",
        body: [
          "Si vous nous contactez et qu'aucun projet n'a lieu, nous supprimons votre demande dans les 12 mois.",
          "Si vous devenez client, nous conservons vos renseignements pendant la durée du projet et aussi longtemps que la loi nous oblige à garder les documents d'entreprise.",
        ],
      },
      {
        heading: "Témoins (cookies)",
        body: [
          "Ce site ne dépose pas de témoins pour vous suivre ou vous montrer de la publicité.",
        ],
      },
      {
        heading: "Vos droits",
        body: [
          `Vous pouvez en tout temps nous demander, en écrivant à ${EMAIL}, de vous indiquer quels renseignements personnels nous détenons à votre sujet, de les corriger, de les supprimer ou d'en cesser l'utilisation. Nous répondrons dans les 30 jours.`,
          "Si notre réponse ne vous satisfait pas, vous pouvez vous adresser à la Commission d'accès à l'information du Québec (cai.gouv.qc.ca).",
        ],
      },
      {
        heading: "La protection de vos renseignements",
        body: [
          "Nous prenons des mesures raisonnables pour protéger vos renseignements et limitons les personnes qui y ont accès. Aucune méthode de transmission par Internet n'est entièrement sécuritaire. Si un incident de confidentialité vous touchait, nous vous en informerions comme la loi l'exige.",
        ],
      },
      {
        heading: "Modifications de cette politique",
        body: [
          "Si nous modifions cette politique, nous mettrons à jour la date en haut de cette page.",
        ],
      },
      {
        heading: "Questions",
        body: [`Écrivez-nous à ${EMAIL}.`],
      },
    ],
  },
};
