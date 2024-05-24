import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  return (
    <section className="text-gray-400 bg-gray-900 body-font flex flex-col min-h-screen">
      <div className="container mx-auto flex justify-center p-5">
        <button
          onClick={() => {
            i18n.changeLanguage("pt");
            setSelectedLanguage("pt");
          }}
          className={`mr-5 hover:text-white ${
            selectedLanguage === "pt" ? "font-bold text-white" : ""
          }`}
        >
          PT-BR
        </button>
        <button
          onClick={() => {
            i18n.changeLanguage("en");
            setSelectedLanguage("en");
          }}
          className={`hover:text-white ${
            selectedLanguage === "en" ? "font-bold text-white" : ""
          }`}
        >
          EN
        </button>
      </div>

      <div className="container mx-auto px-10 py-10 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-6 text-white">
          {t("pages.notfound.title")}
        </h1>
        <p className="mb-8 leading-relaxed text-center text-lg">
          {t("pages.notfound.description")}
        </p>
        <Link to="/" className="text-blue-500 hover:underline text-lg">
          {t("pages.notfound.homeLink")}
        </Link>
      </div>
    </section>
  );
}
