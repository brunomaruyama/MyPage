"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="text-4xl sm:text-right text-left sm:pt-6 font-bold flex-col">
      <li className="hover:text-orange-300  duration-500 hover:translate-x-2">
        <Link
          data-active={pathname === "/about" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="/about"
        >
          About
        </Link>
      </li>
      <li className="hover:text-orange-300 duration-500 hover:translate-x-2">
        <Link
          data-active={pathname === "/projects" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="/projects"
        >
          Projects
        </Link>
      </li>
      <li className="hover:text-orange-300 duration-500 hover:translate-x-2">
        <Link
          data-active={pathname === "/contact" ? "true" : "false"}
          className="data-[active=true]:text-purple-400"
          href="/contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}
