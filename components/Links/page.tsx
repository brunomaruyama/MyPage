import Link from "next/link";
import ThemeButton from "../themebutton/page";

export default function Links() {
  return (
    <ul className="hidden sm:flex  text-xl font-normal tracking-widest justify-center items-center space-x-10">
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
    </ul>
  );
}
