import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import profileImage from "../../assets/profile_image.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <header className="text-gray-400 bg-gray-900 body-font border-b border-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <button onClick={toggleSidebar} className="md:hidden mr-4">
            <FaBars className="text-white w-6 h-6" />
          </button>

          <Link
            to="/"
            className="flex flex-col md:flex-row title-font font-medium items-center text-white"
          >
            <img
              src={profileImage}
              alt="profile"
              className="w-10 h-10 rounded-full md:mr-3 hidden md:block"
            />
            <span className="text-xl text-center w-full md:text-left mt-2 md:mt-0">
              Eduardo Ibarr de Paula
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center mb-4 md:mb-0">
          <Link
            to="/about"
            className={`mr-5 hover:text-white ${
              location.pathname === "/about" ? "font-bold text-white" : ""
            }`}
          >
            {t("components.header.links.about")}
          </Link>

          <Link
            to="/experience"
            className={`mr-5 hover:text-white ${
              location.pathname === "/experience" ? "font-bold text-white" : ""
            }`}
          >
            {t("components.header.links.experience")}
          </Link>

          {/* <Link
            to="/projects"
            className={`mr-5 hover:text-white ${
              location.pathname === "/projects" ? "font-bold text-white" : ""
            }`}
          >
            {t("components.header.links.projects")}
          </Link> */}

          <Link
            to="/contact"
            className={`mr-5 hover:text-white ${
              location.pathname === "/contact" ? "font-bold text-white" : ""
            }`}
          >
            {t("components.header.links.contact")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center">
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
      </div>

      <motion.div
        className="fixed top-0 left-0 w-2/3 h-full bg-gray-800 text-white z-50 p-5 md:hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <button onClick={toggleSidebar} className="absolute top-4 right-4">
          <FaTimes className="w-6 h-6" />
        </button>
        <nav className="flex flex-col mt-10 space-y-4">
          <Link
            to="/about"
            className={`hover:text-white ${
              location.pathname === "/about" ? "font-bold text-white" : ""
            }`}
            onClick={toggleSidebar}
          >
            {t("components.header.links.about")}
          </Link>

          <Link
            to="/experience"
            className={`hover:text-white ${
              location.pathname === "/experience" ? "font-bold text-white" : ""
            }`}
            onClick={toggleSidebar}
          >
            {t("components.header.links.experience")}
          </Link>

          {/* <Link
            to="/projects"
            className={`hover:text-white ${
              location.pathname === "/projects" ? "font-bold text-white" : ""
            }`}
            onClick={toggleSidebar}
          >
            {t("components.header.links.projects")}
          </Link> */}

          <Link
            to="/contact"
            className={`hover:text-white ${
              location.pathname === "/contact" ? "font-bold text-white" : ""
            }`}
            onClick={toggleSidebar}
          >
            {t("components.header.links.contact")}
          </Link>

          <div className="flex mt-4">
            <button
              onClick={() => {
                i18n.changeLanguage("pt");
                setSelectedLanguage("pt");
                toggleSidebar();
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
                toggleSidebar();
              }}
              className={`hover:text-white ${
                selectedLanguage === "en" ? "font-bold text-white" : ""
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
