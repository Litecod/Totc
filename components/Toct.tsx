import instructor from "@/images/instructor.png";
import student from "@/images/student.png";
import Image from "next/image";
import Link from "next/link";
import { IoIosPlayCircle } from "react-icons/io";

const Toct = () => {
  return (
    <div className="px-[0.8rem] sm:px-[3rem] lg:px-[5rem] mt-[5rem] md:mt-[10rem]">
      <div className="text-center flex flex-col gap-[-0.8rem] md:gap-[1rem] ">
        <h1 className="text-[1.5rem] md:text-[2rem] font-medium text-[#2F327D]">
          What is <span className="text-[#00CBB8]">TOTC?</span>
        </h1>
        <h5 className="md:w-[70%] lg:w-[62%] mx-auto text-[0.7rem] md:text-[1.2rem] text-[#696984]">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </h5>
      </div>
      <div className="mt-[5rem] flex flex-col md:flex-row justify-between max-w-[70rem] mx-auto">
        <div className="relative w-full md:w-[25rem] lg:w-[30rem]">
          <Image src={instructor} alt="An Instructor" className="w-[100%]" />
          <div className="absolute flex flex-col gap-2 w-[100%] h-[100%] top-0 left-0 bg-[#0000001b] rounded-2xl">
            <div className="text-center justify-center my-auto">
              <h2 className="text-white items mb-10 font-medium text-[1.5rem]">
                FOR INSTRUCTORS
              </h2>
              <Link
                href="/"
                className="px-[1rem] py-[0.8rem] rounded-[20rem] max-w-[13rem] text-center text-white border-[2px] border-white duration-150 hover:border-[transparent] hover:bg-[#23BDEEE5] "
              >
                Start a class today
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-[25rem] lg:w-[30rem]  mt-5 md:mt-0">
          <Image src={student} alt="An Instructor" className="w-[100%]" />
          <div className="absolute flex flex-col gap-2 w-[100%] h-[100%] top-0 left-0 bg-[#0000001b] rounded-2xl">
            <div className="text-center justify-center my-auto">
              <h2 className="text-white items mb-10 font-medium text-[1.5rem]">
                FOR STUDENT
              </h2>
              <Link
                href="/"
                className="px-[1rem] py-[0.8rem] rounded-[20rem] max-w-[13rem] text-center text-white border-[2px] border-white duration-150 hover:border-[transparent] hover:bg-[#23BDEEE5] "
              >
                Enter access code
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-[5rem] md:mt-[10rem]  flex flex-col md:flex-row justify-between items-center max-w-[75rem] mx-auto">
        <div className="w-full md:w-[50%] flex flex-col gap-4 mt-[rem] relative text-center md:text-left">
          <h1 className="text-[1.5rem] md:text-[1.2rem] lg:text-[1.7rem] font-medium text-[#2F327D] max-w-[34rem] ">
            Everything you can do in a physical classroom,{" "}
            <span className="text-[#00CBB8]">you can do with TOTC</span>
          </h1>
          <h5 className="text-[0.7rem] md:text-[0.8rem] lg:text-[1rem] text-[#696984] max-w-[35rem]">
            TOTC's school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </h5>
          <Link
            href="/"
            className="underline text-[#0000005f] mt-5 text-center md:text-left"
          >
            learn more
          </Link>
          <div className="absolute -z-10 w-[3rem] h-[3rem] bg-[#33EFA0] rounded-full left-[-0.8rem] top-0"></div>
          <div className="absolute -z-10 w-[1rem] h-[1rem] bg-[#33EFA0] rounded-full right-[3.2rem] bottom-[6rem]"></div>
        </div>
        <div className="relative w-full md:w-[50%] max-w-[35rem]  mt-5 md:mt-0 z-10">
          <Image src={student} alt="An Instructor" className="w-[100%]" />
          <div className="absolute flex flex-col gap-2 w-[100%] h-[100%] top-0 left-0 bg-[#0000001b] rounded-2xl">
            <div className="bg-[#23BDEE] w-[2.9rem] h-[2.9rem] rounded-full m-auto justify-center">
              <IoIosPlayCircle className="text-[3.5rem] text-[#ffff] mt-[-0.3rem] ml-[-0.3rem]" />
            </div>
          </div>
        </div>
        <div className="absolute right-[-1rem] top-[-1rem] -z-10">
          <div className="bg-[#23BDEE] w-[6rem] h-[6rem] rounded-2xl ml-[-27rem] opacity-25 lg:opacity-100"></div>
          <div className="bg-[#33EFA0] w-[10rem] h-[10rem] rounded-2xl mt-[9.5rem] md:mt-[5rem] lg:mt-[9.5rem]"></div>
        
        </div>
      </div>
    </div>
  );
};

export default Toct;
