"use client"

import Link from "next/link"
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa6"
import stars from "@/images/testimonialStar.png"
import imgone from "@/images/testimonial.png"
import { sliderSettings } from "@/utils/CommonOneCol";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Image from "next/image";


const Testimonial = () => {
  const slides = [
    {
      id: 1,
      imageUrl: imgone,
      star: stars,
      rating:
        "12 reviews at Yelp",
      names: "Gloria Rose",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    },
    {
      id: 2,
      imageUrl: imgone,
      star: stars,
      rating:
        "22 reviews at Yelp",
      names: "Cyntia John",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    },
    {
      id: 3,
      imageUrl: imgone,
      star: stars,
      rating:
        "17 reviews at Yelp",
      names: "Blessed Samuel",
      detail:
        "Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking.",
    },
  ];
  return (
    <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] mt-[5rem] md:mt-[3rem]">
      <div className="flex flex-col md:flex-row w-[100%] justify-between gap-[2rem] md:gap-0">
        <div className="w-[100%] md:w-[30%]">
          <div className="flex gap-2 text-[#2F327D] items-center">
            <div className=" w-[6rem] h-[0.1rem] bg-[#2F327D]"></div>
            <h3 className="text-[1.2rem]">TESTIMONIAL</h3>
          </div>
          <h1 className="text-[3rem] text-[#2F327D] mt-[2.5rem]">What They Say?</h1>
          <div className="text-[#0009] mt-[2.5rem] flex flex-col gap-4">
            <p>TOTC has got more than 100k positive ratings from our users around the world.</p>
            <p>Some of the students and teachers were greatly helped by the Skilline.</p>
            <p>Are you too? Please give your assessment</p>
          </div>
          <button className=" mt-[2.5rem] border-[1px] border-[#49BBBD] border-r-[0px] border-r-[#fff] text-[#49BBBD] rounded-[30rem] flex items-center gap-6 pl-[2rem]"><p>Write your assessment</p><Link href="/" className="border-[1px] border-[#49BBBD] rounded-full p-[1rem]"><FaArrowRight /></Link></button>
        </div>
        <div className="w-[100%] md:w-[50%] relative">
          <Swiper {...sliderSettings} className="relative">
            <SliderButtons />
            {slides.map((slide) => (
              <SwiperSlide
                key={slide.id}
              >
                <div className="relative w-[100%] lg:w-[80%] md:h-[40rem]">
                  <Image src={slide.imageUrl} alt="" className="w-[28rem] rounded-3xl" />
                  <div className="absolute max-w-[30rem] bg-[#fff] flex bottom-[-2rem] right-0 rounded-xl z-10 shadow-sm shadow-[#00000015]">
                    <div className="h-[15rem] w-[0.6rem] bg-[orange] rounded-tl-2xl rounded-bl-2xl"></div>
                    <div className="w-full p-[2rem] flex flex-col gap-[2rem]">
                      <div className="flex gap-2">
                        <div className="h-[100%] w-[0.1rem] bg-[red]"></div>
                        <p>{slide.detail}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="font-medium">{slide.names}</p>
                        <div className="">
                          <Image src={slide.star} alt=""/>
                          <p>{slide.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;




const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-[15rem]  flex justify-between md:justify-normal gap-[54%] w-[100%] z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-[1.5rem] bg-[#fff] rounded-full"
      >
        <FaLessThan className="text-[#49BBBD] font-medium" />
      </button>
      <button onClick={() => swiper.slideNext()} className="p-[1.5rem] bg-[#fff] rounded-full shadow-sm shadow-[#0000003b]">
        <FaGreaterThan className="text-[#49BBBD] font-medium" />
      </button>
    </div>
  );
};