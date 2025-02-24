"use client"

import { Swiper, useSwiper, SwiperSlide } from "swiper/react"
import { sliderSettings } from "@/utils/CommonFourCol";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import Image from "next/image";
import img from "@/images/students.png"

const Students = () => {
    const list = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
    ]
    return (
        <div className='relative w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] pt-[3rem] pb-[10rem] md:pb-[17rem] bg-[#9dccff96] -z-10'>
            <h1 className="text-[2rem] mb-[2rem]">What our students have to say</h1>

            <Swiper {...sliderSettings}>
                <SliderButtons />

                {list.map((items) => {
                    return (
                        <SwiperSlide key={items.id} >
                            <div className="p-[2rem] bg-[#fff] text-center flex flex-col gap-4 rounded-xl">
                                <Image src={img} alt="" className="mx-auto bg-[#2f2f2f39] rounded-xl" />
                                <h2>Bulkin Simons</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}

export default Students

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
        <div className=" absolute top-[9rem] z-10 flex justify-between gap-6 w-[100%]">
            <button
                onClick={() => swiper.slidePrev()}
                className="p-[0.7rem] bg-[#49BBBD] rounded-full"
            >
                <FaLessThan className="text-[#ffff] font-medium" />
            </button>
            <button onClick={() => swiper.slideNext()} className="p-[0.7rem] bg-[#49BBBD] rounded-full">
                <FaGreaterThan className="text-[#ffff] font-medium" />
            </button>
        </div>
    );
};