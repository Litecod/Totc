"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const NavSignin = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(prev => !prev)
  }

  const navs = [
    { id: 1, name: "Login", src: "/login" },
    { id: 2, name: "Signin", src: "/signin" },
  ];
  return (
    <div className="w-[22rem] mx-auto mt-[2rem]">
      <ul className="w-[100%] bg-[#49BBBD99]  rounded-[15rem] flex justify-between relative py-[0.3rem] px-[1rem]">

        <div className={`w-[45%] h-[70%] top-[0.6rem] bg-[#49BBBD] absolute rounded-[15rem] z-0 duration-500 ${active ? "left-[0.6rem]" : "left-[11.3rem]"}` }></div>
        {navs.map((nav) => {
          return (
            <Link
              key={nav.id}
              href={nav.src}
              className="w-[50%] py-[0.8rem] px-[1.5rem] rounded-[15rem]  text-center z-10 text-white"
              onClick={() => handleClick()}
            >
              {nav.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavSignin;