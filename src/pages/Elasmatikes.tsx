import React from "react";
import Footer from "../component/Footer/Footer";
import { Gallery } from "../component/Gallery/Gallery";
import Navbar from "../component/Navbar/Navbar";
import ScrollToTop from "../component/ScrollToTop/ScrollToTop";
import { useTranslation } from "react-i18next";

type Props = {};
const images = [
  "s1.jpg",
  "s2.jpg",
  "s3.jpg",
  "s4.jpg",
  "s5.jpg",
  "s6.jpg",
  "s7.jpg",
  "s8.jpg",
  "s9.jpg",
  "s10.jpg",
  "s11.jpg",
  "s12.jpg",
  "s13.jpg",
  "s14.jpg",
  "s15.jpg",
  "s16.jpg",
];
const Elasmatikes = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div
      id="scroll-container"
      className="bg-slate-50 lg:snap-y lg:snap-mandatory relative z-0 text-gray-700 h-screen  overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#326da8]/80"
    >
      <Navbar />
      <ScrollToTop />
      <section
        className="-mt-[100px] 2xl:h-screen h-[1500px] w-screen snap-start "
        id="hero"
      >
        <Gallery title={t("gallery.platework")} images={images} />
      </section>

      <section className="snap-start" id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Elasmatikes;
