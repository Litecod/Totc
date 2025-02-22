import Image from "next/image";
import logo from "@/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#252641] py-[4rem] w-full mx-auto px-[0.8rem] sm:px-[3rem] lg:px-[5rem] md:py-[4rem] ">
      <div className="sm:max-w-[30rem] mx-auto text-[#B2B3CF] flex flex-col gap-[2rem] md:gap-[4rem]">
        <div className="flex items-center justify-between max-w-[28rem] mx-auto">
          <Image src={logo} alt="Image" />
          <hr className="w-[4rem] rotate-90" />
          <h1 className="text-[#ffff] md:max-w-[8rem] text-[1.2rem] font-medium ">
            Virtual Class for Zoom
          </h1>
        </div>
        <div className="flex flex-col gap-2 ">
          <p className="text-center text-[1.2rem]">
            Subscribe to get our Newsletter
          </p>
          <form className="flex flex-col sm:flex-row gap-[1rem] sm:gap-0 justify-between w-full">
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full sm:w-[65%] border-[2px] border-[#83839A] bg-transparent px-[1rem] py-[0.8rem] rounded-[15rem] outline-none"
            />
            <button className="bg-[#49BBBD] text-[#ffff] w-full sm:w-[32%] px-[1rem] py-[0.8rem] rounded-[15rem]">
              Subscribe
            </button>
          </form>
        </div>
        <div className=" flex flex-col gap-[1rem]">
          <div className="flex max-w-[30rem] gap-4 mx-auto text-center">
            <Link href="/">Careers</Link>
            <p>|</p>
            <Link href="/">Privacy Policy</Link>
            <p>|</p>
            <Link href="/">Terms & Conditions</Link>
          </div>
          <p className="text-center">© 2021 Class Technologies Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
