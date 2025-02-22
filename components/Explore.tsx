"use client"

import React from "react";
import AccordionUnction from "./Accordion/AccordionUnction";
import AccordionTwo from "./Accordion/AccordionTwo";
import AccordionThree from "./Accordion/AccordionThree";

const Explore = () => {
  return (
    <div className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem] items-center ">

      <AccordionUnction />
      <AccordionTwo  />
      <AccordionThree />
    </div>
  );
};

export default Explore;
