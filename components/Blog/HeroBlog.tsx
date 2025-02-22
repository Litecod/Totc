import Image from "next/image";
import img from "@/images/heroblog.png";

const HeroBlog = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center w-[100%] bg-[#9dccff50] px-[0.8rem] sm:px-[3rem] lg:px-[5rem] md:py-[4rem] pt-[2rem] md:pt-[5rem] ">
      <div className="w-full md:w-[50%] max-w-[35rem] flex flex-col gap-4 mt-[rem] relative">
        <h4 className="text-[1rem] font-medium text-[#2F327D]">
          By Themadbrains in
          <span className="text-[#00CBB8]">inspiration</span>
        </h4>
        <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[2.5rem] font-medium text-[#2F327D] ">
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>
        <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor
        </h5>
        <button className="bg-[#00CBB8] rounded-2xl px-[1rem] py-[1rem] text-[#ffff] max-w-[15rem] ">Start learning now</button>
      </div>
      <div className="w-full md:w-[50%] mt-5 md:mt-0 max-w-[40rem] mb-[2rem] md:mb-0">
        <Image src={img} alt="An Instructor" className="w-[100%]" />
      </div>
    </div>
  );
};

export default HeroBlog;
