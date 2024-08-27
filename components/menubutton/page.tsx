"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeButton from "../themebutton/page";

export default function MenuBtn() {
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
          isOpen ? "block space-x-0 text-center" : "hidden"
        } sm:flex  text-xl font-normal tracking-widest justify-center items-center sm:space-x-10`}
      >
        <li className="hover:text-purple-400  duration-500 hover:translate-y-1">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:text-purple-400  duration-500 hover:translate-y-1">
          <Link href="#techs">Technologies</Link>
        </li>
        <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
          <Link href="#contact">Contact</Link>
        </li>
        <li className="translate-y-1">
          <ThemeButton />
        </li>
      </ul>{" "}
    </div>
  );
}
