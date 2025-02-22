"use client"

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import imgone from "@/images/mark1.png";
import imgtwo from "@/images/mark2.png";
import imgthree from "@/images/mark3.png";
import imgfour from "@/images/mark4.png";
import img from "@/images/mark.png";
import { IoMdTime } from "react-icons/io";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { sliderSettings } from "@/utils/CommonFourCol";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Recommended = () => {
  const mark = [
    { id: 1, image: imgone },
    { id: 2, image: imgtwo },
    { id: 3, image: imgthree },
    { id: 4, image: imgfour },
    { id: 4, image: imgtwo },
    { id: 4, image: imgfour },
    { id: 4, image: imgone },
  ];
  return (
    <div className="bg-[#9dccff50] w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[2rem] md:pt-[3rem] md:pb-[3rem] ">
      <div className=" flex justify-between mb-[1.5rem] items-center">
        <h1 className="font-medium text-[1.5rem]">Recommended for you</h1>
        <h4 className="text-[#49BBBD] texe-[0.9rem]">See all</h4>
      </div>
      <Swiper {...sliderSettings}>
        <SliderButtons />

        {mark.map((item) => {
          return (
            <SwiperSlide key={item.id} className=" bg-[#fefefe] shadow-md shadow-[#0000001f] rounded-2xl p-[1.5rem] " >
                <div className="w-full  flex flex-col gap-[1.3rem] md:gap-[0.8rem] lg:gap-[1.3rem]">
                <Image src={item.image} alt="image" className="w-[100%]" />
                <div className="flex justify-between">
                  <div className="flex gap-2 md:gap-0 lg:gap-2 items-center">
                    <TfiLayoutGrid2 className="text-[1.4rem] md:text-[0.8rem] lg:text[1.4rem] text-[#d9d9d9]" />{" "}
                    <span className="text-[#696984] md:text-[0.8rem] lg:text[1rem]">
                      Design
                    </span>
                  </div>
                  <div className="flex gap-2 md:gap-0 lg:gap-2 items-center">
                    <IoMdTime className="text-[2rem] text-[#d9d9d9] md:text-[1rem] lg:text[1.4rem]" />{" "}
                    <span className="text-[#696984] md:text-[0.8rem] lg:text[1rem]">
                      3 Month
                    </span>
                  </div>
                </div>
                <h3 className="text-[1.3rem] md:text-[1rem] lg:text-[1.3rem] font-medium">
                  AWS Certified solutions Architect
                </h3>
                <p className="text-[#696984] md:text-[0.7rem] lg:text-[1rem]">
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do
                  eiusmod tempor
                </p>
                <div className="flex justify-between">
                  <div className=" flex gap-2 md:gap-1 lg:gap-2 items-center">
                    <Image src={img} alt="" />
                    <p className="md:text-[0.7rem] lg:text-[1rem]">Lina</p>
                  </div>
                  <div className="flex gap-2 md:gap-1 lg:gap-2 items-center">
                    <s className="text-[#696984] md:text-[0.7rem] lg:text-[1rem]">
                      $100
                    </s>{" "}
                    <p>$80</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Recommended;

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
      <button
        onClick={() => swiper.slideNext()}
        className="p-[0.7rem] bg-[#49BBBD] rounded-sm"
      >
        <FaGreaterThan className="text-[#ffff] font-medium" />
      </button>
    </div>
  );
};
