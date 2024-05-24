import { useTranslation } from "react-i18next";
import { Education } from "../../models/education";
import { Skill } from "../../models/skill";
import SkillProgress from "../../components/SkillProgress";

export default function AboutPage() {
  const { t } = useTranslation();

  const { skills } = t("skills", { returnObjects: true }) as {
    skills: Skill[];
  };
  const { educations } = t("educations", { returnObjects: true }) as {
    educations: Education[];
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font flex flex-col">
      <div className="container mx-auto px-10 py-10 flex-grow">
        <div className="flex flex-col lg:flex-row items-start lg:space-x-8">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl font-bold mb-6 text-white">
              {t("components.about.title")}
            </h1>
            <p className="mb-4 leading-relaxed">
              {t("components.about.description.first")}
            </p>
            <p className="mb-8 leading-relaxed">
              {t("components.about.description.second")}
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">
                {t("components.about.education.title")}
              </h2>
              <div className="bg-gray-800 bg-opacity-40 px-8 pt-8 pb-4 rounded-lg">
                {educations.map((education, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2">
                      {education.school}
                    </p>
                    <p className="text-sm text-gray-300 mb-2">
                      {education.graduation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white flex items-center">
                {t("components.about.skills.title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div key={index} className="text-sm text-gray-400 mb-2">
                    <SkillProgress skill={skill} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
