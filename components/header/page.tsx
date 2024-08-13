import ThemeButton from "../themebutton/page";
import Links from "../Links/page";

export default function Header() {
  return (
    <header className="h-[7vh] fixed backdrop-blur-md top-0 w-full flex items-center space-x-2 justify-between p-3 sm:px-[5vw] lg:px-[10vw]">
      <div>
        <Links />
      </div>

      <ThemeButton />
    </header>
  );
}
