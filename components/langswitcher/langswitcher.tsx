import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LangSwitcher: React.FC = () => {
  interface Option {
    language: string;
  }

  const router = useRouter();
  const pathname = usePathname();

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false);

  const options: Option[] = [{ language: "en" }, { language: "pt" }];

  const setOption = (option: Option) => {
    setIsOptionsExpanded(false);
    router.push(`/${option.language}`);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <button
          className=" justify-between rounded-sm w-8 text-white bg-purple-500 hover:bg-purple-600 font-light text-sm p-2 text-center inline-flex items-center"
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          {pathname?.substring(1)}
        </button>
        <div
          className={`transition-transform duration-500 ease-custom ${
            !isOptionsExpanded
              ? "-translate-y-1/2 scale-y-0 opacity-0"
              : "translate-y-0 scale-y-100 opacity-100"
          }`}
        >
          <ul className="absolute bg-purple-400 w-8 text-white text-sm font-extralight text-center divide-y rounded-sm shadow-lg overflow-hidden">
            {options.map((option, index) => (
              <li
                key={index}
                className=" p-2 hover:bg-gray-200 hover:text-gray-500 transition-colors duration-300  flex items-center cursor-pointer justify-center"
                onMouseDown={(e) => {
                  e.preventDefault();
                  setOption(option);
                }}
                onClick={() => setIsOptionsExpanded(false)}
              >
                {pathname === `/${option.language}`}
                {option.language}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
