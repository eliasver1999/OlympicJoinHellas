import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";
type Props = {};

const Footer = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col  bottom-0">
      <div className=" bg-zinc-800 py-4">
        <div className="grid lg:grid-cols-4 items-start justify-between lg:px-24  px-12 gap-4">
          <div className=" mt-4">
            <h3 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              {t("footer.aboutHeading")}
            </h3>
            <p className="text-gray-200 text-justify">
              {t("about.description1")}
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              {t("footer.menuHeading")}
            </h2>
            <ul className="text-gray-200 list-disc text-center space-y-4 ">
              <li>
                <a
                  href="/#hero"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("footer.menu.home")}
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("footer.menu.about")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("footer.menu.services")}
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("footer.menu.contact")}
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              {t("footer.servicesHeading")}
            </h2>
            <ul className="text-gray-200 list-disc text-center space-y-4">
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.pipefitting")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.boiler")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.ventilation")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.insulation")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.inertGas")}
                </a>
              </li>
              <li>
                <a
                  href="/#services"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  {t("services.special")}
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              {t("footer.contactHeading")}
            </h3>
            <ul className="text-gray-200 list-none text-center space-y-4">
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <BsFillTelephoneFill color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082170</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <BsFillTelephoneFill color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082167</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <FaFax color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082171</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <MdEmail color="#326da8" />
                <h4 className="text-slate-50">olympicjoin@gmail.com</h4>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <h3 className="text-center text-gray-100">{t("footer.rights")}</h3>
      </div>
    </div>
  );
};

export default Footer;
