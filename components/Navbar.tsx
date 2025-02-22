"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/images/logo.png";
import AuthNav from "./AuthNav";
import { usePathname } from "next/navigation";
import { TiThMenuOutline } from "react-icons/ti";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState<boolean>(true);
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  const navs = [
    { id: 1, name: "Home", src: "/" },
    { id: 2, name: "Courses", src: "/courses" },
    { id: 3, name: "Careers", src: "/careers" },
    { id: 4, name: "Blog", src: "/blog" },
    { id: 5, name: "About us", src: "/about" },
  ];
  return (
    <header className="flex justify-between items-center px-[0.8rem] sm:px-[3rem] lg:px-[5rem] bg-[#49BBBD] py-[0.5rem]">
      <Image src={logo} alt="Logo" className="" />
      <ul
        className={`absolute md:relative top-[6rem] md:top-0 w-[80%] md:w-auto bg-[#49BBBD] md:bg-[transparent] flex flex-col md:flex-row gap-[1.2rem] lg:gap-[3rem] z-10 after:content-['*'] after:absolute after:-inset-1 after:block after:bg-[#8d8d8d47] after:w-[126%] md:after:w-0 after:top-0 after:h-[100%] md:after:h-0 after:-z-10  duration-300  ${
          active ? "left-[-50rem] md:left-0" : "left-0 md:left-0"
        }`}
      >
        {" "}
        {navs.map((nav) => {
          return (
            <Link
              key={nav.id}
              href={nav.src}
              onClick={() => setActive(!active)}
              className={`${
                isActive(nav.src)
                  ? "md:text-[#00FFF0] text-black md:py-[0.4rem] w-full md:w-auto bg-[white] md:bg-transparent py-[1rem] px-[1rem] md:px-0"
                  : " text-[white] md:py-[0.4rem] hover:text-[#00FFF0] duration-300 py-[1rem] px-[1rem] md:px-0"
              }`}
            >
              {nav.name}
            </Link>
          );
        })}
        <AuthNav />
      </ul>

      <TiThMenuOutline
        onClick={() => setActive(!active)}
        className="text-[#ffff] text-[2rem] cursor-pointer hover:text-[#00FFF0] duration-300 md:hidden"
      />
    </header>
  );
};

export default Navbar;
