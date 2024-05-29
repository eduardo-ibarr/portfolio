import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="text-gray-400 bg-gray-900 body-font flex justify-center items-center py-10">
      <div className="container mx-auto px-5 w-full max-w-4xl">
        <div className="text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            {t("pages.contact.title")}
          </h1>
          <p className="mb-8 leading-relaxed text-base text-gray-400">
            {t("pages.contact.description")}
          </p>
          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="flex flex-col items-center">
              <a
                href="https://wa.me/55997186370"
                aria-label={t("pages.contact.aria.whatsapp")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size="3rem"
                  className="text-green-500 hover:text-green-600"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-2 text-gray-400">
                {t("pages.contact.whatsapp")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="https://linkedin.com/in/eduardo-ibarr"
                aria-label={t("pages.contact.aria.linkedin")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  size="3rem"
                  className="text-blue-500 hover:text-blue-600"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-2 text-gray-400">
                {t("pages.contact.linkedin")}
              </p>
            </div>
            <div className="flex flex-col items-center">
              <a
                href="mailto:eduardoibarr56@gmail.com"
                aria-label={t("pages.contact.aria.email")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MdEmail
                  size="3rem"
                  className="text-red-500 hover:text-red-600"
                  aria-hidden="true"
                />
              </a>
              <p className="mt-2 text-gray-400">{t("pages.contact.email")}</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="mb-4">
              {t("pages.contact.supportText")}{" "}
              <a
                href="https://app.picpay.com/user/eduardo.ibarr.de.paula"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline"
                aria-label={t("pages.contact.aria.picpay")}
              >
                PicPay
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
