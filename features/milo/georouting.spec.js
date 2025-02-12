module.exports = {
  name: 'Georouting Feature',
  features: [
    {
      tcid: '0',
      name: '@Georouting modal',
      desc: 'User accessing DE page from US locale.',
      path: '/de/drafts/nala/features/georouting/georouting',
      data: {
        title: "This Adobe site doesn't match your location.",
        text: "Based on your location, we think you may prefer the United States website",
        button: 'United States',
        link: 'Deutschland',
        flag: 'United States',
        cookieName: 'international',
        cookieValue: 'de',
      },
      tags: '@georouting @smoke @regression @milo ',
    },

    {
      tcid: '1',
      name: '@Georouting with query param',
      desc: 'User is accessing the US page with a query parameter (akamaiLocale=DE).',
      path: '/drafts/nala/features/georouting/georouting?akamaiLocale=DE',
      data: {
        title: "Diese Adobe-Site passt nicht zu deinem Standort.",
        text: "Basierend auf deiner IP-Adresse könnte die Website für Deutschland passender sein.",
        button: 'Deutschland',
        link: 'United States',
        flag: 'Deutschland',
        cookieName: 'international',
        cookieValue: 'de',
      },
      tags: '@georouting @georouting-query-param @smoke @regression @milo',
    },

    {
      tcid: '2',
      name: '@Georouting through Change region',
      desc: 'User navigating to DE site through "Change region" modal.',
      path: '/drafts/nala/features/georouting/georouting',
      data: {
        title: "Diese Adobe-Site passt nicht zu deinem Standort.",
        text: "Basierend auf deiner IP-Adresse könnte die Website für Deutschland passender sein.",
        button: 'Deutschland',
        link: 'United States',
        flag: 'Deutschland',
        cookieName: 'international',
        cookieValue: 'de',
      },
      tags: '@georouting @smoke @regression @milo ',
    },

    {
      tcid: '3',
      name: '@Georouting multi tab',
      desc: 'User is accessing the CH page with a query parameter, the CH georouting modal will have multiple tabs for languages',
      path: '/drafts/nala/features/georouting/georouting?akamaiLocale=CH',
      data: {
        tab1: {
          name: 'Deutsch',
          title: 'Diese Adobe-Site passt nicht zu deinem Standort.',
          text: 'Basierend auf deiner IP-Adresse könnte die Website für Schweiz passender sein.',
          button: 'Schweiz',
          link: 'United States',
          flag: 'Schweiz',
        },
        tab2: {
          name: 'Français',
          title: 'Ce site Adobe ne correspond pas à votre zone géographique.',
          text: "Pour accéder à du contenu, des offres et des tarifs correspondant davantage à votre zone géographique, rendez-vous plutôt sur le site web Suisse.",
          button: 'Suisse',
          link: 'United States',
          flag: 'Suisse',
        },
        tab3: {
          name: 'Italiano',
          title: 'Questo sito Adobe non corrisponde alla tua posizione geografica.',
          text: "In base alla tua posizione, ti consigliamo di consultare il sito web di Adobe Svizzera, dove troverai contenuti, offerte e prezzi specifici per la tua area geografica.",
          button: 'Svizzera',
          link: 'United States',
          flag: 'Svizzera',
        },
      },
      tags: '@georouting @georouting-multi-tab @smoke @regression @milo ',
    },

    {
      tcid: '4',
      name: '@Georouting-off',
      desc: 'User is accessing "de" page for which georouting is turned off',
      path: '/de/drafts/nala/features/georouting/geo-off',
      tags: '@georouting @georouting-off @milo @smoke @regression',
    },

    {
      tcid: '5',
      name: '@Georouting modal close',
      desc: 'If user closes an georouting modal, the international cookie should not be added to the browser.',
      path: '/de/drafts/nala/features/georouting/georouting',
      data: {
        cookieName: 'international',
        cookieValue: 'de',
      },
      tags: '@georouting @georouting-close @regression @milo ',
    },
  ],
};
