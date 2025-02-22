import NavSignin from "@/components/NavSignin";
import img from "@/images/signin.png";
import Image from "next/image";
import Link from "next/link";
import { FaEyeSlash } from "react-icons/fa";

const page = () => {
  return (
    <div className="flex justify-betwen md:p-[2rem]">
      <Image
        src={img}
        alt=""
        className="hidden md:block max-w-[38rem]  w-[50%]"
      />
      <div className="w-full md:w-[50%] items-center  mt-[2rem] max-w-[30rem] mx-auto">
        <h1 className="text-center">Welcome to lorem..!</h1>
        <NavSignin />
        <p className="mt-[2rem] px-[2rem] md:px-0">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="flex flex-col gap-6 mt-6 w-full px-[2rem] md:px-0">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="cursor-pointer">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email Address"
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="text" className="cursor-pointer">
              User Name
            </label>
            <input
              type="text"
              id="text"
              placeholder="Enter your User name"
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label htmlFor="password" className="cursor-pointer">
              PassWord
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full border-[2px] border-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
            <FaEyeSlash className="absolute right-[2rem] top-[3rem] text-[1.2rem]" />
          </div>
        </form>
        <div className="px-[2rem] md:px-0">
          <Link
            href="/"
            className="w-[15rem] border-[2px] bg-[#49BBBD] px-[1rem] py-[0.8rem] rounded-[15rem] text-center text-white float-right mt-[2rem]"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
