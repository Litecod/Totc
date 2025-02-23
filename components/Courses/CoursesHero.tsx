"use client"


import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "@/utils/CommonThreeCol";
import imgone from "@/images/coursehero1.png";
import imgtwo from "@/images/coursehero2.png";
import imgthree from "@/images/coursehero3.png";
import smimage from "@/images/mark.png";
import Image from "next/image";
import { Course } from "@/data/item";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

const CoursesHero = () => {
  

  return (
    <div className="bg-[#9dccff50] w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[2rem] md:pt-[3rem] md:pb-[3rem] ">
      <div className="flex gap-4 md:gap-0 sm:justify-between mb-[1.5rem] items-center">
        <h1 className="font-medium sm:text-[1.5rem]">
          Welcome back, ready for your next lesson?
        </h1>
        <h4 className="text-[#49BBBD] texe-[0.9rem]">View History</h4>
      </div>

      <Swiper {...sliderSettings} className="relative">
        <SliderButtons />
        {Course.map((item) => (
          <SwiperSlide
            key={item.id}
            className="bg-[#ffff] shadow-sm shadow-[#00000018] rounded-2xl p-[1rem]"
          >
            <div className="w-full flex flex-col gap-2">
              <Image
                src={item.image}
                
                width={100}
                height={40}
                alt="Image"
                className="w-full"
              />
              <Link href={`/courses/${item.id}`} ><h3>AWS Certified Solutions Architect</h3></Link>
              <div className=" flex gap-4 items-center">
                <Image src={smimage} alt="Image" />
                <p>Lina</p>
              </div>
              <div className="w-[100%] h-[0.5rem] bg-[#D9D9D9] rounded-md">
                <div className="w-[70%] h-[100%] rounded-md bg-[#49BBBD]"></div>
              </div>
              <p className="text-right text-[#00000080]">lesson 5 of 7</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoursesHero;

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