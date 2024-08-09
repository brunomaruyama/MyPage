"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="text-xl font-bold flex justify-center items-center space-x-4">
      <li className="hover:text-purple-400  duration-500 hover:translate-y-1">
        <Link
          data-active={pathname === "#about" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="#about"
        >
          About
        </Link>
      </li>
      <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
        <Link
          data-active={pathname === "#projects" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="#projects"
        >
          Projects
        </Link>
      </li>
      <li className="hover:text-purple-400 duration-500 hover:translate-y-1">
        <Link
          data-active={pathname === "#contact" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="#contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
