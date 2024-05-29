import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-gray-300 bg-gray-900 body-font flex items-center py-10">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t("components.hero.title")}
          </h1>
          <p className="mb-8 leading-relaxed">
            {t("components.hero.description")}
          </p>
          <div className="flex sm:flex-row gap-4 sm:gap-0 flex-col justify-center">
            <Link to="/about">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-indigo-600 hover:bg-indigo-600 rounded text-lg">
                {t("components.hero.buttons.about")}
                <span className="sr-only">About Page</span>
              </button>
            </Link>

            <Link to="/contact">
              <button className="ml-0 sm:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-700 hover:text-white rounded text-lg">
                {t("components.hero.buttons.contact")}
                <span className="sr-only">Contact Page</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-lg md:max-w-sm"
            alt={t("components.hero.imageAltText")}
            src="/src/assets/profile_image.png"
          />
        </div>
      </div>
    </section>
  );
}
