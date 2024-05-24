import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container ">
        <div className="mb-4 md:mb-0 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/eduardo-ibarr"
              className="text-white hover:underline"
            >
              eduardo-ibarr
            </a>
          </p>
          <p className="text-sm">{t("components.footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
