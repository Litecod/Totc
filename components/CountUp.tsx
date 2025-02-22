"use client";
import CountUp from "react-countup";

const CountUps = () => {
  return (
    <div className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem] ">
      <div className="text-center flex flex-col gap-[-0.8rem] md:gap-[1rem] ">
        <h1 className="text-[2.5rem] md:text-[3rem] font-medium">
          Our Success
        </h1>
        <h5 className="md:w-[70%] lg:w-[50%] mx-auto text-[0.7rem] md:text-[1rem]">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </h5>
      </div>
      <div className="flex flex-wrap justify-between mt-[2rem] md:mt-[4rem] ">
        <div className="">
          <p className="text-[3rem] md:text-[4rem] text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              <span>
                <CountUp start={0} end={15} duration={2} />
              </span>
              k+
            </span>
          </p>
          <p className="text-center lg:text-[1.2rem]">Student</p>
        </div>
        <div className="">
          <p className="text-[3rem] md:text-[4rem] text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              <span>
                <CountUp start={0} end={75} duration={2} />
              </span>
              %
            </span>
          </p>
          <p className="text-center lg:text-[1.2rem]">Total Success</p>
        </div>
        <div className="">
          <p className="text-[3rem] md:text-[4rem] text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              <span>
                <CountUp start={0} end={30} duration={2} />
              </span>
            </span>
          </p>
          <p className="text-center lg:text-[1.2rem]">Main questions</p>
        </div>
        <div className="">
          <p className="text-[3rem] md:text-[4rem] text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              <span>
                <CountUp start={0} end={26} duration={2} />
              </span>
            </span>
          </p>
          <p className="text-center lg:text-[1.2rem]">Chief experts</p>
        </div>
        <div className="">
          <p className="text-[3rem] md:text-[4rem] text-center ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#136CB5] to-[#49BBBD]">
              <span>
                <CountUp start={0} end={16} duration={2} />
              </span>
            </span>
          </p>
          <p className="text-center lg:text-[1.2rem]">Years of experience</p>
        </div>
      </div>
    </div>
  );
};

export default CountUps;

//start={8800} end={9000} duration={4}
