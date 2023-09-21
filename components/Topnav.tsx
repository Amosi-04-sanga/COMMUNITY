"use client";
import { close, community, logo, menu, moon, sun } from "@/public/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";
import { navLinks } from "../constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Topnav = () => {
  const { theme, themes, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();
  
  
  const LinkItem = ({
    route,
    label,
    imgURL,
    isActive,
  }: {
    route: string;
    label: string;
    imgURL: string;
    isActive: boolean;
  }) => {
    return (
      <>
        <Link
          href={route}
          onClick={ () => setOpened(false)}
          className={`${
            isActive && "bg-primary-500"
          } transition-all duration-100 hover:bg-primary-500 p-2 flex gap-6 rounded-md bg-blue-300 cursor-pointer text-dark-1`}
        >
          <Image src={imgURL} alt={label} width={20} height={20} className="" />
          <p> {label} </p>
        </Link>
      </>
    );
  };


  return (
    <div>
      <div className="sticky z-20 top-0 left-0 h-[10vh] flex justify-between items-center bg-menu-light dark:bg-menu-dark py-4 px-4 shadow-md shadow-slate-800">
        <Link onClick={ () => setOpened(false)} href="/">
          <div className="flex items-center justify-start">
            <Image
              src={logo}
              alt="BME logo"
              width={38}
              height={38}
              priority
              className="mr-2 rounded-md"
            />
            <h3 className=" text-white dark:text-light-3">BME HUB</h3>
          </div>
        </Link>

        <div className="flex items-center">
          <div className="">
            <Image
              src={theme === "dark" ? moon : sun}
              width={28}
              height={28}
              alt="moon"
              className="cursor-pointer"
              onClick={() => {
                setIsDark(!isDark);
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
          </div>
          <div className="ml-4">
            <Image
              src={opened ? close : menu}
              alt="menu"
              width={28}
              height={28}
              onClick={() => setOpened(!opened)}
              className="cursor-pointer"
            />
          </div>
        </div>

        <div
          className={`fixed ${
            !opened ? "-left-[80vw]" : "left-0"
          } transition-all duration-800 z-10 bg-menu-light dark:bg-menu-dark sm:hidden top-[10vh] w-[80vw] h-[90vh] flex justify-start`}
        >
          <div className="flex flex-col gap-4 mt-10 ml-10">
            {navLinks.map((link) => {
              const isActive = (pathname.includes(link.route) && link.route.length > 1 ) || pathname === link.route;
              return (
                <LinkItem key={link.label} isActive={isActive} {...link} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
