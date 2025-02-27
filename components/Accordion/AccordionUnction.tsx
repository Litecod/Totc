"use client";

import { useState } from "react";
import accordionOne from "@/images/accordion1.png";
import Image from "next/image";
import { FaArrowCircleRight, FaArrowRight } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";

type AccordionProps = {
  id: string;
  title: string;
  color: string;
};

const AccordionUnction = () => {
  const list: AccordionProps[] = [
    { id: "1", title: "Ut Sed Eros", color: "#FF6F00" },
    { id: "2", title: "Ut Sed Eros", color: "#FF8374" },
    { id: "3", title: "Ut Sed Eros", color: "#B45A1B" },
    { id: "4", title: "Ut Sed Eros", color: "#B43A1B" },
    { id: "5", title: "Ut Sed Eros", color: "#308598" },
    { id: "6", title: "Ut Sed Eros", color: "#00A8FF" },
    { id: "7", title: "Ut Sed Eros", color: "#6DB4A7" },
  ];

  const [accordion, setAccordion] = useState<string | null>("2");

  const handleAccordion = (index: string) => {
    let activeId: string | null = index;
    if (index === accordion) activeId = null;
    setAccordion(activeId);
  };
  console.log(accordion);
  return (
    <div className="z-10">
      <div className="">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium">Explore Course</h1>
        <p className="text-[#0000008A]">Ut sed eros finibus, placerat orci id, dapibus.</p>
      </div>
      <div className=" flex justify-between mb-[1.5rem] items-center mt-[2rem] md:mt-[8rem]">
        <h1 className="font-medium text-[1.5rem] flex items-center md:gap-4"><IoIosColorPalette className="text-[#0000008A]"/> Lorem Ipsum</h1>
        <h4 className="text-[#49BBBD] text-[1.2rem] flex md:gap-4 items-center">SEE ALL<FaArrowRight /> </h4>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-between md:mt-[5rem] md:mb-[5rem]">
        {list.map((item, index) => (
          <div key={item.id} className="">
            <div
              className={
                accordion === item.id
                  ? "rotate-0 duration-150 w-full md:w-[20rem] md:ml-[-4rem] "
                  : "bg-[#81ff81] py-[0.5rem] w-full md:w-[16rem] rounded-xl md:rotate-[76deg] duration-150 mt-[5rem] md:ml-[-5rem] mb-[5rem] "
              }
            >
              <div
                key={index}
                onClick={() => handleAccordion(item.id)}
                className={
                  accordion === item.id
                    ? " w-[100%]"
                    : "bg-[#6DB4A7] w-[97%] md:w-[15rem] py-[0.5rem] rounded-xl mx-auto"
                }
              >
                <h1 className={accordion === item.id ? "" : " text-center"}>
                  {item.title}
                </h1>
                <div>
                  {accordion === item.id ? (
                    <Image src={accordionOne} alt="food" className="w-[100%]" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionUnction;
