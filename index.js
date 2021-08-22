const { fr } = require('./locales/fr');
const { en } = require('./locales/en');

let strings = {
  en: en,
  fr: fr
};

module.exports = {
  getLocale: function (language, string, ...vars) {
    let locale = strings[language][string];

    let count = 0;
    locale = locale.replace(/%VAR%/g,
        () => vars[count] !== null ? vars[count] : "%VAR%");

    return locale;
  }
}