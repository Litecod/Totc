"use client";

import { useState } from "react";
import accordionOne from "@/images/accordion1.png";
import Image from "next/image";

type AccordionProps = {
  id: string;
  title: string;
  color: string;
};

const AccordionUnction = () => {
  const list: AccordionProps[] = [
    {id: "1", title: "Ut Sed Eros", color: "#FF6F00"},
    {id: "2", title: "Ut Sed Eros", color: "#FF8374"},
    {id: "3", title: "Ut Sed Eros", color: "#B45A1B"},
    {id: "4", title: "Ut Sed Eros", color: "#B43A1B"},
    {id: "5", title: "Ut Sed Eros", color: "#308598"},
    {id: "6", title: "Ut Sed Eros", color: "#00A8FF"},
    {id: "7", title: "Ut Sed Eros", color: "#6DB4A7"},
  ];

  const [accordion, setAccordion] = useState<string | null>("2");

  const handleAccordion = (index: string) => {
    let activeId: string | null = index;
    if (index === accordion) activeId = null;
    setAccordion(activeId);
  };
  console.log(accordion);
  return (
    <>
      <div className="flex justify-between mt-[5rem]">
        {list.map((item, index) => (
          <>
            <div key={item.id} className={accordion === item.id
                    ? "rotate-0 duration-150 w-[20rem] ml-[-4rem] mt-[5rem]"
                    : "bg-[#fff] py-[0.5rem] w-[18rem] h-[3.5rem] rounded-xl rotate-[76deg] duration-150 mt-[5rem] ml-[-5rem]"
                    }>
              <div
                className={ accordion === item.id ? "" : `bg-[${item.color}] w-[16rem] py-[0.5rem] h-[3.5rem] rounded-xl duration-150`}
              >
                <div
                  key={index}
                  onClick={() => handleAccordion(item.id)}
                  className={
                    accordion === item.id
                      ? " w-[100%]"
                      : "bg-[#6DB4A7] w-[15rem] py-[0.5rem] rounded-xl mx-auto"
                  }
                >
                  <h1
                    className={
                      accordion === item.id ? "" : " text-center"
                    }
                  >
                    {item.title}
                  </h1>
                  <div>
                    {accordion === item.id ? (
                      <Image
                        src={accordionOne}
                        alt="food"
                        className="w-[100%] mt-[-2rem]"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default AccordionUnction;
