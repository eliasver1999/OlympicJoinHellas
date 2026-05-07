import React from "react";
import "../About/About.css";
import { MdMiscellaneousServices, MdAir } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiTeePipe } from "react-icons/gi";
import { GiGasStove, GiChemicalTank } from "react-icons/gi";
import { useTranslation } from "react-i18next";
type Props = {};
const starting = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "linear",
      x: { duration: 0.4 },
      opacity: { duration: 1 },
    },
  },
  hover: {
    backgroundColor: "#326da8",
    scale: 1.2,
    transition: { delay: 0.1, type: "linear", scale: { duration: 0.4 } },
  },
};
const startingLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "linear",
      x: { duration: 0.4 },
      opacity: { duration: 1 },
    },
  },
  hover: {
    backgroundColor: "#326da8",
    scale: 1.2,
    transition: { delay: 0.1, type: "linear", scale: { duration: 0.4 } },
  },
};
const Services = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center lg:text-3xl text-2xl text-slate-800 tracking-widest hover-underline-animation font-semibold cursor-pointer lg:px-96">
          {t("services.title")}
        </h4>
        <div className="w-screen h-full grid lg:grid-cols-6 grid-cols-2 gap-12 lg:px-0  lg:mt-48 mt-12 relative justify-center lg:items-center lg:space-x-12">
          <div className="lg:flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-4 lg:text-start text-center">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <GiTeePipe
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  {t("services.pipefitting")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center lg:absolute lg:top-24 space-y-4 lg:text-start text-center">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <GiChemicalTank
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  {t("services.boiler")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center lg:top-48 lg:absolute space-y-4 lg:text-start text-center">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <MdAir
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  {t("services.ventilation")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center lg:top-48 lg:absolute space-y-4 lg:text-start text-center">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <FaShip
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  {t("services.insulation")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center lg:top-24 absolute space-y-4 lg:text-start text-center">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <GiGasStove
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider  w-full h-full lg:text-start text-center">
                  {t("services.inertGasShort")}
                </h4>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center space-y-4">
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <MdMiscellaneousServices
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  {t("services.special")}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
