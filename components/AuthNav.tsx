"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";

const AuthNav = () => {
  const pathname = usePathname();
  const isActive = (path: Url) => pathname === path;

  const navs = [
    { id: 1, name: "Login", src: "/login" },
    { id: 2, name: "Sign Up", src: "/signin" },
  ];


  return (
    <div className="flex flex-col md:flex-row gap-[1.2rem] lg:gap-[3rem] md:items-center ">
      {navs.map((nav) => {
        return (
          <Link key={nav.id} href={nav.src} className={`${isActive(nav.src) ? "md:rounded-[5rem] px-[1rem] md:px-[1rem] md:py-[0.4rem] text-black bg-[white] py-[1rem]" : "md:rounded-[5rem] md:bg-white/30 md:shadow-lg md:ring-1 md:ring-black/5 px-[1rem] md:px-[0.8rem] lg:px-[1.5rem] md:py-[0.4rem] text-[white] py-[1rem] "}`}>{nav.name}</Link>
        );
      })}
    </div>
  );
};

export default AuthNav;
