import useLanguageStore from "@/zeustand/languageStore";

export const translate = (text: { en: string; nl: string }) => {
  const { language } = useLanguageStore();
  return text[language];
};
