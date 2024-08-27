import ThemeButton from "../themebutton/page";
import Links from "../Links/page";

export default function Header() {
  return (
    <header className="z-[999] h-[7vh] fixed backdrop-blur-sm top-0 w-full flex items-center justify-center p-3 sm:px-[5vw] lg:px-[10vw] bg-purple-300/5">
      <Links />
      <div className="ml-10 my-auto">
        <ThemeButton />
      </div>
    </header>
  );
}
