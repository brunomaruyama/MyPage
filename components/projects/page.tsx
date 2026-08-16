import Image from "next/image";
import Link from "next/link";
import { projetos } from "../../app/[lang]/projetos";
import ScrollReveal from "../ScrollReveal";

interface ProjectsProps {
  dict: any;
}

export default function Projects({ dict }: ProjectsProps) {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <ScrollReveal delay={0}>
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-3">
            {dict.links.projects}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {dict.projects.title}
          </h2>
          {dict.projects.subtitle && (
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm sm:text-base mt-2 font-medium">
              {dict.projects.subtitle}
            </p>
          )}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto, index) => (
          <ScrollReveal key={projeto.slug} delay={index * 150}>
            <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full group">
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900/50">
                <Image
                  src={projeto.imageRef[0]}
                  alt={`Screenshot of ${projeto.project}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                    {projeto.project}
                  </h3>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 line-clamp-3 leading-relaxed font-normal">
                    {projeto.description}
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {projeto.techsUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-3 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                    <Link
                      href={`projects/${projeto.slug}`}
                      className="text-xs font-bold uppercase tracking-wider text-cyan-700 hover:text-cyan-800 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 group/btn"
                    >
                      <span>{dict.projects.view || "Detalhes"}</span>
                      <svg
                        className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>

                    {projeto.link && (
                      <a
                        href={projeto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-600 hover:text-cyan-700 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
                      >
                        <span>{dict.projects.visit || "Demo"}</span>
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
