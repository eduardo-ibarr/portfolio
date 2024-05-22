import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="text-gray-400 bg-gray-900 body-font h-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t("components.hero.title")}
          </h1>
          <p className="mb-8 leading-relaxed">
            {t("components.hero.description")}
          </p>
          <div className="flex justify-center">
            <Link to="/about">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {t("components.hero.buttons.about")}
              </button>
            </Link>

            <Link to="/projects">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                {t("components.hero.buttons.projects")}
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded w-64 h-64 md:w-96 md:h-96"
            alt="hero"
            src="/src/assets/profile_image.png"
          />
        </div>
      </div>
    </section>
  );
}
