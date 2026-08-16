import ScrollReveal from "../ScrollReveal";

interface TechsProps {
  dict: any;
}

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "Database & Tools" | "Methodology";
}

export default function Techs({ dict }: TechsProps) {
  const technologies: TechItem[] = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "HTML5 / CSS3", category: "Frontend" },
    { name: "React Native", category: "Mobile" },
    { name: "NestJS", category: "Backend" },
    { name: "SQL", category: "Database & Tools" },
    { name: "Git", category: "Database & Tools" },
    { name: "GitHub", category: "Database & Tools" },
    { name: "Jest", category: "Database & Tools" },
    { name: "SDD (Spec-Driven Dev)", category: "Methodology" },
    { name: "WordPress", category: "Database & Tools" },
  ];

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <ScrollReveal delay={0}>
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-3">
            {dict.links.tech}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {dict.tech.title}
          </h2>
          {dict.tech.subtitle && (
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2 font-medium">
              {dict.tech.subtitle}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3.5 sm:gap-4">
        {technologies.map((tech, index) => (
          <ScrollReveal key={tech.name} delay={50 * (index % 7)}>
            <div className="glass-card glass-card-hover p-4 rounded-xl flex flex-col items-center justify-center text-center group h-28 cursor-default">
              <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-800 dark:bg-cyan-500/10 dark:text-cyan-400 group-hover:bg-[#06b6d4] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-2">
                <span className="text-xs font-black uppercase">
                  {tech.name.substring(0, 2)}
                </span>
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-cyan-700 dark:text-slate-200 dark:group-hover:text-cyan-400 transition-colors line-clamp-1">
                {tech.name}
              </h3>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                {tech.category}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
