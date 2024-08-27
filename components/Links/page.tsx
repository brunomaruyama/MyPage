"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="text-xl font-normal tracking-widest flex justify-center items-center space-x-10">
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
    </ul>
  );
}
