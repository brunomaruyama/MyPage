import "server-only";

const dictionaries = {
  en: () =>
    import("../../dictionaries/en.json").then((module) => module.default),
  pt: () =>
    import("../../dictionaries/pt.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  const selectedLocale = locale && dictionaries[locale] ? locale : "pt";
  return dictionaries[selectedLocale]();
};
