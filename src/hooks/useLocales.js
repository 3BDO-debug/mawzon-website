import { useTranslation } from "react-i18next";
/* import useSettings from './useSettings';
 */ // config
import { allLangs, defaultLang } from "../../config";
import { useRecoilState } from "recoil";
import { themeModeAtom } from "@/recoil";
import { useEffect } from "react";

// ----------------------------------------------------------------------

export default function useLocales() {
  const { i18n, t: translate } = useTranslation();

  const [theme, setTheme] = useRecoilState(themeModeAtom);

  const langStorage =
    typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "";

  const currentLang =
    allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

  const handleChangeLanguage = (newlang) => {
    i18n.changeLanguage(newlang);
    setTheme({ ...theme, direction: "rtl" });
    document.dir = newlang === "en" ? "ltr" : "rtl";
  };

  useEffect(() => {
    if (theme.direction === "rtl") {
      i18n.changeLanguage("ar");
    } else {
      i18n.changeLanguage("en");
    }
  }, []);

  return {
    onChangeLang: handleChangeLanguage,
    translate: (text, options) => translate(text, options),
    currentLang,
    allLangs,
  };
}
