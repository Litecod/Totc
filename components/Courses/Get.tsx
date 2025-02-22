import Image from "next/image";
import imgone from "@/images/mark1.png";
import imgtwo from "@/images/mark2.png";
import imgthree from "@/images/mark3.png";
import imgfour from "@/images/mark4.png";
import img from "@/images/mark.png";
import { IoMdTime } from "react-icons/io";
import { TfiLayoutGrid2 } from "react-icons/tfi";

const Get = () => {
  const mark = [
    { id: 1, image: imgone },
    { id: 2, image: imgtwo },
    { id: 3, image: imgthree },
    { id: 4, image: imgfour },
  ];
  return (
    <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] py-[2rem] md:py-[4rem] mt-[5rem] md:mt-[3rem] md:mb-[3rem]">
      <div className=" flex justify-between mb-[1.5rem] items-center">
        <h1 className="font-medium text-[1.5rem]">Get choice of your course</h1>
        <h4 className="text-[#49BBBD] texe-[0.9rem]">See all</h4>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        {mark.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full md:w-[23%] flex-wrap flex flex-col gap-[1.3rem] md:gap-[0.8rem] lg:gap-[1.3rem] bg-[#fefefe] shadow-md shadow-[#0000001f] justify-between p-[1.5rem] rounded-2xl"
            >
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
          );
        })}
      </div>
    </div>
  );
};

export default Get;
