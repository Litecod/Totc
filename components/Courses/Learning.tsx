import Link from "next/link";
import React from "react";

const Learning = () => {
  return (
    <div className="w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem]  ">
      <div className="bg-[#252641] flex flex-col gap-[2rem] px-[0.8rem] sm:px-[3rem] py-[2rem] md:py-[4rem] text-center rounded-3xl">
        <h1 className="text-[#ffff] font-medium text-[1.5rem]">
          Online coaching lessons for remote learning.
        </h1>
          <p className="text-[#fff] max-w-[50rem] mx-auto text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>

        <div className="px-[2rem] py-[0.5rem] rounded-xl bg-[#49BBBD] max-w-[12rem] mx-auto">
          <Link href="/" className="text-[#fff] text-center text-[0.8rem]">
            Start Learning Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learning;
