import { useTranslation } from "react-i18next";
import { Experience } from "../../models/experience";

export default function ExperiencePage() {
  const { t } = useTranslation();

  const { experiences } = t("experiences", {
    returnObjects: true,
  }) as { experiences: Experience[] };

  return (
    <section className="text-gray-400 bg-gray-900 body-font flex flex-col">
      <div className="container mx-auto px-10 py-10 flex-grow">
        <h2 className="text-2xl font-semibold mb-8 text-white sm:flex sm:justify-center">
          {t("components.about.experience.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-40 px-8 pt-8 pb-4 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
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
