import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

type Props = {};

const NotFound = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50 relative z-0 text-gray-700 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center text-center px-6 -mt-[100px]">
        <h1 className="text-7xl lg:text-9xl font-bold text-[#326da8]">
          {t("notFound.code")}
        </h1>
        <h2 className="mt-4 text-2xl lg:text-3xl font-semibold text-slate-700 tracking-wider">
          {t("notFound.title")}
        </h2>
        <p className="mt-4 text-slate-600 max-w-xl">
          {t("notFound.description")}
        </p>
        <NavLink
          to="/"
          className="mt-8 bg-[#326da8] text-slate-50 font-semibold tracking-wider px-6 py-3 rounded-md hover:bg-[#274f7a] transition-colors duration-300"
        >
          {t("notFound.back")}
        </NavLink>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
