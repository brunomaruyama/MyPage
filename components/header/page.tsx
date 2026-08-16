import MenuBtn from "../menubutton/page";

interface HeaderProps {
  dict: any;
}

export default function Header({ dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
        <a
          href="#home"
          className="text-lg sm:text-xl font-bold tracking-tight text-gradient-cyan hover:opacity-80 transition-opacity"
        >
          Bruno Maruyama
        </a>
        <MenuBtn dict={dict} />
      </div>
    </header>
  );
}
