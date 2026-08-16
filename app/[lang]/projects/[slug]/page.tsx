import { notFound } from "next/navigation";
import { projetos } from "../../projetos";
import Image from "next/image";
import ThemeButton from "../../../../components/themebutton/page";
import Link from "next/link";

export async function generateStaticParams() {
  const languages = ["pt", "en"];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of languages) {
    for (const projeto of projetos) {
      params.push({ lang, slug: projeto.slug });
    }
  }

  return params;
}

export default function ProjectPage({
  params,
}: {
  params: { lang: string; slug: string };
}) {
  const projeto = projetos.find((p) => p.slug === params.slug);

  if (!projeto) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 hover:text-cyan-700 dark:text-slate-300 dark:hover:text-cyan-400 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Voltar / Home</span>
          </Link>
          <ThemeButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 flex-grow space-y-10">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
            Projeto
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {projeto.project}
          </h1>
        </div>

        {/* Project Screenshots */}
        <div className="space-y-8">
          {projeto.imageRef.map((image, idx) => (
            <div
              key={image}
              className="glass-card rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={image}
                alt={`Screenshot ${idx + 1} of ${projeto.project}`}
                width={1200}
                height={750}
                quality={90}
                priority={idx === 0}
                style={{ width: "100%", height: "auto" }}
                className="rounded-2xl"
              />
            </div>
          ))}
        </div>

        {/* Project Info Card */}
        <div className="glass-card p-8 rounded-2xl space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-slate-950 dark:text-white">Sobre o Projeto</h2>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm sm:text-base font-normal">
              {projeto.description}
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3 text-slate-950 dark:text-white">Tecnologias Utilizadas</h2>
            <div className="flex flex-wrap gap-2">
              {projeto.techsUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {projeto.link && (
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60">
              <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold tracking-wide text-white bg-[#06b6d4] hover:bg-[#0891b2] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_24px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>Acessar Projeto</span>
                <svg
                  className="w-4 h-4"
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
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
