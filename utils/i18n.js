const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'nl',
  otherLanguages: ['en'],
  localeSubpaths: {
    nl: 'nl',
    en: 'en',
  },
});

// import NextI18Next from 'next-i18next';

// const NextI18NextInstance = new NextI18Next({
//   defaultLanguage: 'nl',
//   otherLanguages: ['en'],
//   localeSubpaths: {
//     nl: 'nl',
//     en: 'en',
//   },
// });

// export default NextI18NextInstance;

// /* Optionally, export class methods as named exports */
// export const {
//   appWithTranslation,
//   withTranslation,
// } = NextI18NextInstance;
