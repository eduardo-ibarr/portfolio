import { useTranslation } from "react-i18next";
import { Experience } from "../../models/experience";

export default function ExperiencePage() {
  const { t } = useTranslation();

  const { experiences } = t("experiences", {
    returnObjects: true,
  }) as { experiences: Experience[] };

  return (
    <section className="text-gray-300 bg-gray-900 body-font flex flex-col">
      <div className="container mx-auto px-5 py-10 flex-grow">
        <h2 className="text-3xl font-semibold mb-10 text-white md:text-center text-start">
          {t("components.about.experience.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition duration-300 ease-in-out p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">
                {exp.company} - {exp.location}
              </p>
              <p className="text-sm text-gray-300 mb-2">
                {exp.startDate} - {exp.endDate} ({exp.duration})
              </p>
              <p className="text-sm text-gray-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
