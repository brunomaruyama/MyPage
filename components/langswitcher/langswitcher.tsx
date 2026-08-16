"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export const LangSwitcher: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = pathname?.split("/")[1] || "pt";

  const options = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ];

  const handleSelect = (langCode: string) => {
    setIsOpen(false);
    if (langCode === currentLang) return;
    
    const segments = pathname ? pathname.split("/") : ["", "pt"];
    segments[1] = langCode;
    const newPath = segments.join("/") || `/${langCode}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        aria-label="Selecionar idioma"
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md text-white bg-[#06b6d4] hover:bg-[#0891b2] shadow-[0_2px_10px_rgba(6,182,212,0.35)] hover:shadow-[0_4px_14px_rgba(6,182,212,0.5)] transition-all duration-300 flex items-center gap-1"
      >
        <span>{currentLang}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-16 glass-card rounded-md shadow-xl py-1 z-50 animate-in fade-in zoom-in-95 duration-150 border border-slate-200 dark:border-cyan-500/20">
          {options.map((option) => (
            <button
              key={option.code}
              onClick={() => handleSelect(option.code)}
              className={`w-full text-center px-2 py-1.5 text-xs font-bold transition-colors ${
                currentLang === option.code
                  ? "text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-500/10"
                  : "text-slate-800 hover:text-cyan-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:bg-slate-800/50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
