import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectsPage() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Projeto A",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
      image: "/src/assets/project1.jpg", // Substitua pela imagem do projeto
      link: "https://www.exemplo-projeto-a.com",
    },
    {
      id: 2,
      title: "Projeto B",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
      image: "/src/assets/project2.jpg", // Substitua pela imagem do projeto
      link: "https://www.exemplo-projeto-b.com",
    },
    // Adicione mais projetos aqui
  ];

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-3xl font-bold mb-8 text-white">
          {t("components.projects.title")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer perspective-1000"
              onClick={() => setSelectedProject(project)}
              whileHover={{ rotateY: 10 }}
              whileTap={{ rotateY: -10 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent rounded-b-lg">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
            >
              <motion.div
                className="bg-white rounded-lg p-8 shadow-2xl max-w-2xl relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  aria-label="Close"
                >
                  &times;
                </button>
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="mb-4">{selectedProject.description}</p>
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Ver projeto
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
