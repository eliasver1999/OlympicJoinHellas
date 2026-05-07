import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "../ImageComponent/Image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
type Props = {};

const About = (props: Props) => {
  const { t } = useTranslation();
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center lg:text-3xl text-2xl text-slate-50 tracking-widest hover-underline-animation font-semibold cursor-pointer lg:px-96">
          {t("about.title")}
        </h4>
        <h5 className="lg:px-96 px-2 lg:mt-12 mt-4 lg:text-xl text-center text-slate-50  tracking-wider">
          {t("about.description1")}
        </h5>
        <h5 className="lg:px-0 px-2  lg:mt-24 mt-4 lg:text-xl text-center text-slate-50  tracking-wider">
          {t("about.description2")}
        </h5>
      </div>
      <div className="bottom-12 absolute w-screen px-12 lg:flex hidden flex-row justify-center items-center">
        <i className="review-swiper-button-prev border-2 rounded-full mr-2 text-white cursor-pointer">
          <AiOutlineArrowLeft size={32} />
        </i>

        <Swiper
          spaceBetween={4}
          slidesPerView={4}
          style={{ margin: 0 }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          className="lg:mx-32 lg:px-32"
        >
          <SwiperSlide className="mr-0">
            <Image url="./image1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./imag6.jpg" />
          </SwiperSlide>
        </Swiper>
        <i className="review-swiper-button-next border-2 rounded-full ml-2 text-white cursor-pointer">
          <AiOutlineArrowRight size={32} />
        </i>
      </div>
      <div className="bottom-12 absolute w-screen lg:px-12 px-2 lg:hidden flex flex-row justify-center items-center">
        <i className="review-swiper-button-prev border-2 rounded-full mr-2 text-white cursor-pointer">
          <AiOutlineArrowLeft size={32} />
        </i>

        <Swiper
          spaceBetween={4}
          slidesPerView={1}
          style={{ margin: 0 }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          className="lg:mx-32 lg:px-32"
        >
          <SwiperSlide className="mr-0">
            <Image url="./image1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./imag6.jpg" />
          </SwiperSlide>
        </Swiper>
        <i className="review-swiper-button-next border-2 rounded-full ml-2 mr-4 text-white cursor-pointer">
          <AiOutlineArrowRight size={32} />
        </i>
      </div>
    </div>
  );
};

export default About;
