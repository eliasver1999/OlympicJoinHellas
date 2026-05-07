import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PhoneNavbar.css";

import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useActiveSection } from "../../hooks/useActiveSection";

type Props = {};

const HOME_SECTIONS = ["hero", "about", "services", "contact"];
const starting = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.1, type: "linear", opacity: { duration: 1 } },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, type: "linear", opacity: { duration: 1.4 } },
  },
};
const text = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    rotateY: 180,
    transition: {
      delay: 0.1,
      type: "linear",
      opacity: { duration: 1.4 },
      rotateY: { duration: 1 },
    },
  },
};
const variantMenu = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
  exit: {
    y: "-100vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
};

const variantImage3 = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 1 } },
  },
};
const row1 = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.5 } },
  },
  exit: {
    y: "-200vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row2Left = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row2Right = {
  hidden: {
    x: "50vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "200vh",
    opacity: 0,
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row3Left = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row3Center = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.5 } },
  },
  exit: {
    y: "200vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row3Right = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "200vh",
    opacity: 0,
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const ModernNav = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  const active = useActiveSection(HOME_SECTIONS);

  const linkClass = (section: string, width: string) =>
    `${
      active === section
        ? "underline decoration-[#326da8]"
        : "hover-underline-animation"
    } text-[#e4e4e6] text-2xl ${width} text-center `;

  return (
    <div className="relative z-30 ">
      <motion.button
        className=" fixed z-40 lg:top-8 top-6 right-[17px]  space-y-1  items-center justify-center px-4 py-3 rounded-tl-sm rounded-bl-sm"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "#326da8" }}
        initial={false}
      >
        <motion.div
          className="hamburger--top h-12"
          animate={{
            y: isOpen ? 6 : 0,
            rotate: isOpen ? 60 : 0,
          }}
          transition={{
            delay: 0.1,
            y: { duration: 0.1 },
            rotate: { duration: 0.5 },
            default: { ease: "linear" },
          }}
        ></motion.div>
        <motion.div
          className="hamburger--middle"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            delay: 0.1,
            opacity: { duration: 0.5 },

            default: { ease: "linear" },
          }}
        ></motion.div>
        <motion.div
          className="hamburger--bottom"
          animate={{
            y: isOpen ? -6 : 0,
            rotate: isOpen ? 120 : 0,
          }}
          transition={{
            delay: 0.1,
            y: { duration: 0.1 },
            rotate: { duration: 0.5 },
            default: { ease: "linear" },
          }}
        ></motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={` ${
              isOpen ? "fixed z-30" : "absolute z-0"
            }  top-0 right-0  w-screen h-screen grid grid-cols-3`}
            variants={starting}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="lg:grid hidden grid-cols-5 lg:col-span-2 ">
              {isOpen && (
                <motion.div
                  className="bg-[#326da8] col-span-5 relative flex container justify-center items-center"
                  variants={variantImage3}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8) ),url(${"/assets/society.jpeg"}) `,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="stage">
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image1.jpg')`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                        variants={row1}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/elasmatourgikes">
                            {t("services.platework")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                    </div>
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image2.jpg')`,
                          backgroundPosition: "center left",
                          backgroundSize: "cover",
                        }}
                        variants={row2Left}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/#services">
                            {t("services.pipefitting")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                      <motion.div
                        className="cell"
                        variants={row2Right}
                        style={{
                          backgroundImage: `url('/image3.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/#services" className="text-center">
                            {t("services.boiler")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                    </div>
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image4.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        variants={row3Left}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/#services" className="text-center">
                            {t("services.inertGas")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image5.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        variants={row3Center}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/#services" className="text-center">
                            {t("services.insulation")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/imag6.jpg')`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                        variants={row3Right}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      >
                        <motion.h4
                          className="text-slate-50 flex justify-center items-center h-full bg-[#326da8]"
                          variants={text}
                          initial="initial"
                          whileHover="hover"
                        >
                          <NavLink to="/#services" className="text-center">
                            {t("services.ventilation")}
                          </NavLink>
                        </motion.h4>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {isOpen && (
              <motion.div
                className="bg-gray-500 h-full lg:col-span-1 col-span-3"
                variants={variantMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="h-full flex flex-col justify-center space-y-12 items-center bg-neutral-900">
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={linkClass("hero", "w-1/3")}
                    to="/#hero"
                  >
                    {t("nav.home")}
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={linkClass("about", "w-2/3")}
                    to="/#about"
                  >
                    {t("nav.about")}
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={linkClass("services", "w-2/3")}
                    to="/#services"
                  >
                    {t("nav.services")}
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={linkClass("contact", "w-2/3")}
                    to="/#contact"
                  >
                    {t("nav.contact")}
                  </NavLink>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernNav;
