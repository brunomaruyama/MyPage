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

  const navLinks = [
    { href: "#about", label: dict.links.about },
    { href: "#techs", label: dict.links.tech },
    { href: "#projects", label: dict.links.projects },
    { href: "#contact", label: dict.links.contact },
  ];

  return (
    <div className="flex items-center">
      {/* Mobile toggle button */}
      <button
        aria-label="Toggle menu"
        className="sm:hidden flex flex-col justify-center items-center h-10 w-10 bg-cyan-50 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/20 dark:text-cyan-400 dark:border-cyan-500/30 rounded-lg p-2 transition-colors hover:bg-cyan-100 dark:hover:bg-cyan-500/30"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`bg-current h-0.5 w-5 rounded-full transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : "mb-1"
          }`}
        />
        <div
          className={`bg-current h-0.5 w-5 rounded-full transition-all duration-300 ${
            isOpen ? "opacity-0 scale-x-0" : "mb-1"
          }`}
        />
        <div
          className={`bg-current h-0.5 w-5 rounded-full transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Navigation menu */}
      <div
        className={`${
          isOpen
            ? "absolute top-full left-0 right-0 glass-card p-6 flex flex-col space-y-4 border-t border-cyan-500/20 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300"
            : "hidden"
        } sm:static sm:flex sm:flex-row sm:items-center sm:space-y-0 sm:space-x-8 sm:bg-transparent sm:border-0 sm:p-0 sm:shadow-none`}
      >
        <ul className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7 text-sm font-semibold tracking-wide">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-center gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-700/50 sm:pl-4 sm:border-l">
          <ThemeButton />
          <LangSwitcher />
        </div>
      </div>
    </div>
  );
}
