import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiCancel } from "react-icons/gi";

type Props = {
  activeImage: string;
  images: Array<string>;
  open: boolean;
  setOpen: (boolean: boolean) => void;
};
const modal = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 0.7 } },
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
export const ImageModal = ({ activeImage, images, open, setOpen }: Props) => {
  return (
    <>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="h-screen w-screen bg-gray-900/90 top-0 z-30 fixed"
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="absolute top-12 right-12">
              <button onClick={() => setOpen(false)}>
                <GiCancel size={40} color="white" />
              </button>
            </div>
            <div className="h-screen w-screen flex justify-center items-center">
              <img
                src={activeImage}
                alt=""
                decoding="async"
                className="rounded-md w-1/2"
              />
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};
