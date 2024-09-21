"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeButton from "../themebutton/page";
import { LangSwitcher } from "../langswitcher/langswitcher";

interface MenuBtnProps {
  dict: any;
}

export default function MenuBtn({ dict }: MenuBtnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid place-items-center">
      <button
        className="sm:hidden space-y-2 justify-center h-10 w-10 bg-purple-500/80 rounded-full p-2 shadow-[0_0_10px_rgb(168,85,247,0.7)]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`bg-slate-200 h-[1px] w-5 rounded-full transition-all duration-300 mx-auto ${
            isOpen ? "rotate-[135deg]  translate-y-1" : ""
          }`}
        ></div>
        <div
          className={`bg-slate-200   h-[1px] w-5 rounded-full transition-all duration-300 mx-auto ${
            isOpen ? "hidden translate-x-2" : ""
          }`}
        ></div>
        <div
          className={`bg-slate-200  h-[1px] w-5 rounded-full transition-all duration-300 mx-auto ${
            isOpen ? "rotate-[-135deg]  -translate-y-1" : ""
          }`}
        ></div>
      </button>
      <ul
        className={`${
          isOpen
            ? "translate-y-0 scale-y-100 opacity-100 block"
            : "-translate-y-1/2 scale-y-0 opacity-0 h-0"
        } sm:translate-y-0 sm:scale-y-100 sm:opacity-100 duration-1000 transition-all  sm:flex w-full text-xl font-normal tracking-widest justify-center items-center sm:space-x-10 space-x-0 text-center`}
      >
        <li className="hover:text-purple-400  duration-500 hover:translate-y-1">
          <Link href="#about">{dict.links.about}</Link>
        </li>
        <li className="hover:text-purple-400  duration-500 hover:translate-y-1">
          <Link href="#techs">{dict.links.tech}</Link>
        </li>
        <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
          <Link href="#projects">{dict.links.projects}</Link>
        </li>
        <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
          <Link href="#contact">{dict.links.contact}</Link>
        </li>
        <li className="translate-y-1">
          <ThemeButton />
        </li>
        <li className="translate-y-1">
          <LangSwitcher />
        </li>
      </ul>{" "}
    </div>
  );
}
