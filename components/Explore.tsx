"use client"

import React from "react";
import AccordionUnction from "./Accordion/AccordionUnction";
import AccordionTwo from "./Accordion/AccordionTwo";
import AccordionThree from "./Accordion/AccordionThree";

const Explore = () => {
  return (
    <div className=" relative px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem] pb-[5rem] pt-[8rem] items-center ">
      <div className="absolute w-[100%] h-[100%] -z-10 inset-0 before:absolute before:w-[100%] md:before:w-[80%] before:h-full before:bg-[#9dccff4d]"></div>


      <AccordionUnction />
      <AccordionTwo  />
      <AccordionThree />
    </div>
  );
};

export default Explore;
