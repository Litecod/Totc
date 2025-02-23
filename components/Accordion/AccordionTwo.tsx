"use client";

import { useState } from "react";
import accordiontwo from "@/images/accordion2.png";
import Image from "next/image";

type AccordionProps = {
  id: string;
  title: string;
};

const AccordionTwo = () => {
  const list: AccordionProps[] = [
    { id: "1", title: "Ut Sed Eros" },
    { id: "2", title: "Ut Sed Eros" },
    { id: "3", title: "Ut Sed Eros" },
    { id: "4", title: "Ut Sed Eros" },
    { id: "5", title: "Ut Sed Eros" },
    { id: "6", title: "Ut Sed Eros" },
    { id: "7", title: "Ut Sed Eros" },
  ];

  const [accordion, setAccordion] = useState<string | null>("4");

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
          <div key={item.id} className="">
            <div
              className={
                accordion === item.id
                  ? "rotate-0 duration-150 w-[20rem] ml-[-4rem] "
                  : "bg-[#81ff81] py-[0.5rem] w-[16rem] rounded-xl rotate-[76deg] duration-150 mt-[5rem] ml-[-5rem]"
              }
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
                <h1 className={accordion === item.id ? "" : " text-center"}>
                  {item.title}
                </h1>
                <div>
                  {accordion === item.id ? (
                    <Image src={accordiontwo} alt="food" className="w-[100%]" />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AccordionTwo;
