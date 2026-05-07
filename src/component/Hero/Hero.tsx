import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";
import "./Links.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
type Props = {};
const starting = {
  hidden: {
    y: "50vw",
  },
  visible: {
    y: 0,
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.4 } },
  },
  hover: {
    backgroundColor: "#326da8",
    y: 20,
    transition: { delay: 0.1, type: "linear", y: { duration: 0.4 } },
  },
};

const TypewriterText = ({ words }: { words: string[] }) => {
  const [text] = useTypewriter({
    words,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <>
      <span className="text-slate-600 tracking-wider">{text}</span>
      <Cursor cursorColor="#326da8" />
    </>
  );
};

const Hero = (props: Props) => {
  const { t, i18n } = useTranslation();
  const words = t("hero.typewriter", { returnObjects: true }) as string[];
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      {" "}
      <h1 className="text-3xl lg:text-start text-center lg:text-6xl font-semibold lg:px-10">
        <TypewriterText key={i18n.language} words={words} />
      </h1>
      <div className="lg:flex hidden flex-row bottom-32 absolute justify-between lg:w-1/2 tracking-wide font-semibold ">
        <h4 className="cursor-pointer hover-underline-animation">
          {t("nav.home")}
        </h4>
        <a className="cursor-pointer hover-underline-animation" href="#about">
          {t("nav.about")}
        </a>
        <a
          className="cursor-pointer hover-underline-animation"
          href="#services"
        >
          {t("nav.services")}
        </a>
        <a className="cursor-pointer hover-underline-animation" href="#contact">
          {t("nav.contact")}
        </a>
      </div>
      <div className="absolute bottom-12">
        <a href="#about">
          <motion.button
            className="border-[#326da8] border-2 rounded-full p-1"
            variants={starting}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
          >
            <AiOutlineArrowDown
              size={32}
              className="text-[#326da8] hover:text-slate-50 transition-all duration-500"
            />
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
