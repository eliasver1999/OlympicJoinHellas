import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineArrowUp } from "react-icons/ai";

type Props = {
  containerId?: string;
  threshold?: number;
};

const ScrollToTop = ({ containerId = "scroll-container", threshold = 300 }: Props) => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const container = containerId
      ? document.getElementById(containerId)
      : null;
    const target: HTMLElement | Window = container ?? window;

    const getScrollTop = () =>
      container ? container.scrollTop : window.scrollY;

    const onScroll = () => setVisible(getScrollTop() > threshold);

    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [containerId, threshold]);

  const scrollUp = () => {
    const container = containerId
      ? document.getElementById(containerId)
      : null;
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollUp}
          aria-label="Scroll to top"
          className="fixed z-30 bottom-6 right-6 bg-[#326da8] hover:bg-[#274f7a] text-slate-50 rounded-full p-3 shadow-lg transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
        >
          <AiOutlineArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
