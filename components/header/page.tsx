import MenuBtn from "../menubutton/page";

export default function Header() {
  return (
    <header className="z-[999] min-h-[7vh] backdrop-blur-sm top-0 w-full flex items-center justify-center p-3 sm:px-[5vw] lg:px-[10vw]">
      <div className="my-auto">
        <MenuBtn />
      </div>
    </header>
  );
}
