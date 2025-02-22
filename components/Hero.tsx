import Link from "next/link";
import { IoIosPlayCircle } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import Image from "next/image";
import person from "@/images/Ellipse.png";

const Hero = () => {
  return (
    <div className="bg-[url(@/images/header-bg.png)] md:bg-[url(@/images/header-md.png)] bg-cover w-[100%] md:h-[100vh] lg:h-[120vh] max-h-[58rem] md:mt-[-10rem]">
      <div className="relative flex flex-col md:flex-row items-center px-[0.8rem] sm:px-[3rem] lg:px-[5rem] text-white justify-between">
        <div className="mt-[5rem] md:mt-[10rem] md:w-[50%] text-center md:text-left">
          <h1 className="text-[2.5rem] sm:text-[3rem] font-medium">
            <span className="text-orange-500 ">Studying</span> Online is now much
            easier
          </h1>
          <p className="md:w-[55%] font-light mt-5">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="flex gap-5 mt-5 mx-auto justify-center md:justify-normal md:mx-0">
            <Link
              href="/signin"
              className="rounded-[5rem] text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] bg-white/30 shadow-lg ring-1 ring-black/5 w-[7rem] md:w-auto  md:px-[0.5rem] lg:px-[1.5rem] py-[0.5rem] lg:py-[1rem] h-[2rem] lg:h-auto mt-3 lg:mt-[0] text-[white]"
            >
              Join for free
            </Link>
            <div className=" flex items-center gap-4">
              <IoIosPlayCircle className="text-[3.5rem]" />{" "}
              <span className="text-black font-normal text-[0.7rem] sm:text-[0.9rem]">
                {" "}
                Watch how it works
              </span>
            </div>
          </div>
        </div>
        <div className="mt-[8rem] md:mt-[22rem] lg:">
          <div className="relative flex gap-[1rem] sm:gap-[10rem] md:gap-[3rem] lg:gap-[10rem] xl:gap-[20rem] ">
            <div className=" bg-[#ffffffe2] px-[1rem] flex items-center gap-4 py-[0.5rem] rounded-xl h-[4.5rem] w-[14rem]">
              <FaRegCalendarAlt className="text-[2rem] bg-[#23BDEE] p-[0.4rem] rounded-md" />
              <div className="text-black">
                <p className="text-[0.8rem] font-medium">250k</p>
                <p className="text-[0.8rem] text-[#545567]">Assisted Student</p>
              </div>
            </div>
            <MdInsertChart className="text-[3rem] bg-[#F25471] p-[0.3rem] rounded-md mt-[-3rem]" />
          </div>
          <div className="flex mt-[13rem] gap-0 xl:gap-[8rem]">
            <div className="bg-[#ffffffc7] px-[1rem] flex gap-4 py-[1rem] rounded-xl w-[16rem]">
              <div className="relative">
                <Image
                  src={person}
                  alt="person"
                  className="object-cover w-[2.5rem] h-[2.5rem]"
                />
                <div className="h-[0.8rem] w-[0.8rem] bg-green-600 rounded-full absolute top-7 right-0 border-white border-[2px]"></div>
              </div>
              <div className="text-black flex flex-col gap-2 ">
                <p className="text-[0.8rem] font-medium">
                  User Experience Class
                </p>
                <p className="text-[0.8rem] text-[#545567]">
                  Today at 12.00 PM
                </p>
                <Link
                  href="/signin"
                  className="text-[0.8rem] text-white bg-[#D8587E] px-[0.8rem] py-[0.4rem] rounded-3xl w-[70%] text-center"
                >
                  Join Now
                </Link>
              </div>
            </div>
            <div className="bg-[#ffffffc7] px-[1rem] flex gap-4 py-[1rem] rounded-xl h-[4.5rem] w-[16rem] mt-[-8rem] ml-[-13rem] sm:ml-[2rem] md:ml-[-12rem] lg:ml-[-5rem] xl:ml-0">
              <GrMail 
                className="text-[2rem] bg-[#F88C3D] p-[0.4rem] rounded-md"
              />
              <div className="text-black">
                <p className="text-[0.8rem] font-medium">Congratulations</p>
                <p className="text-[0.8rem] text-[#545567]">
                  Your admission completed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero