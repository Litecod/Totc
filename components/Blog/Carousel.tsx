"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import imgone from "@/images/slider1.png";
import imgtwo from "@/images/slider2.png";
import rounded from "@/images/sliderRounded.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { FaEye, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { sliderSettings } from "@/utils/CommonTwoCol";

const slides = [
  {
    id: 1,
    imageUrl: imgone,
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    imgaeurl: rounded,
    names: "Lliona",
    detail:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    id: 2,
    imageUrl: imgtwo,
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    imgaeurl: rounded,
    names: "Lliona",
    detail:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    id: 3,
    imageUrl: imgone,
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    imgaeurl: rounded,
    names: "Lliona",
    detail:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
  {
    id: 4,
    imageUrl: imgtwo,
    title:
      "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    imgaeurl: rounded,
    names: "Lliona",
    detail:
      "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
  },
];

export default function Carousel() {
  return (
    <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] mt-[5rem] md:mt-[3rem]  bg-[#9dccff50]">
      <div className=" flex justify-between mb-[1.5rem]">
        <h1 className="font-medium text-[1.5rem]">Recent Blog</h1>
        <h4 className="text-[#49BBBD] texe-[0.9rem]">See all</h4>
      </div>
      <Swiper {...sliderSettings} className="relative">
        <SliderButtons />
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="bg-[white] px-[2rem] py-[3rem] rounded-2xl"
          >
            <div className="relative w-full flex flex-col gap-4">
              <Image src={slide.imageUrl} alt="Image" />
              <h2>{slide.title}</h2>
              <div className="flex items-center gap-2">
                <Image src={slide.imgaeurl} alt="image" />
                <span>{slide.names}</span>
              </div>
              <p className="text-[#696984]">{slide.detail}</p>
              <div className="flex justify-between">
                <Link href="/" className="underline text-[#696984]">
                  Read More
                </Link>
                <div className="flex gap-3 items-center">
                  <FaEye className="text-[#49BBBD]"/>
                  <span className="text-[#696984]">251,232</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="float-right mt-[2rem] flex gap-6">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-[0.7rem] bg-[#49BBBD80] rounded-sm"
      >
        <FaLessThan className="text-[#ffff] font-medium" />
      </button>
      <button onClick={() => swiper.slideNext()} className="p-[0.7rem] bg-[#49BBBD] rounded-sm">
      <FaGreaterThan className="text-[#ffff] font-medium" />
      </button>
    </div>
  );
};
