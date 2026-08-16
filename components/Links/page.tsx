import Link from "next/link";
import ThemeButton from "../themebutton/page";

export default function Links() {
  return (
    <ul className="hidden sm:flex text-sm font-medium tracking-wide justify-center items-center space-x-8">
      <li className="hover:text-cyan-400 transition-colors duration-200">
        <Link href="#about">About</Link>
      </li>
      <li className="hover:text-cyan-400 transition-colors duration-200">
        <Link href="#techs">Technologies</Link>
      </li>
      <li className="hover:text-cyan-400 transition-colors duration-200">
        <Link href="#projects">Projects</Link>
      </li>
      <li className="hover:text-cyan-400 transition-colors duration-200">
        <Link href="#contact">Contact</Link>
      </li>
      <li>
        <ThemeButton />
      </li>
    </ul>
  );
}
