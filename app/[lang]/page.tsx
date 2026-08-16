import Image from "next/image";
import About from "../../components/about/page";
import Contact from "../../components/contact/page";
import Projects from "../../components/projects/page";
import Header from "../../components/header/page";
import Techs from "../../components/techs/page";
import ScrollReveal from "../../components/ScrollReveal";
import { getDictionary } from "./dictionaries";

export async function generateStaticParams() {
  return [{ lang: "pt" }, { lang: "en" }];
}

interface Params {
  lang: string;
}

export default async function Home({ params }: { params: Params }) {
  const lang = params?.lang || "pt";
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      <Header dict={dict} />

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex items-center justify-center min-h-[calc(100vh-4.5rem)] px-4 sm:px-8 lg:px-16 py-12"
      >
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <ScrollReveal delay={0}>
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-cyan-100/70 border border-cyan-300 text-cyan-800 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-400 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-emerald-500"></span>
                </span>
                {dict.me.hire}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-400">
                {dict.me.greeting}
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mt-1 text-slate-950 dark:text-white">
                Bruno <span className="text-gradient-cyan">Maruyama</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-slate-700 dark:text-slate-300">
                {dict.me.jobtitle}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#contact"
                  className="px-8 py-3.5 rounded-xl font-semibold tracking-wide text-white bg-[#06b6d4] hover:bg-[#0891b2] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_24px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 active:translate-y-0 duration-300 inline-flex items-center justify-center gap-2"
                >
                  <span>{dict.links.contact}</span>
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>

                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl font-semibold tracking-wide text-slate-800 bg-white border border-slate-300 hover:border-cyan-500 hover:text-cyan-700 shadow-sm dark:bg-slate-900/50 dark:text-slate-300 dark:border-slate-800 dark:hover:border-cyan-500/50 dark:hover:text-cyan-400 hover:-translate-y-0.5 duration-300"
                >
                  {dict.links.projects}
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Avatar & Social Links */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <ScrollReveal delay={150}>
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative rounded-full p-1.5 bg-gradient-to-b from-cyan-500/50 to-transparent">
                  <Image
                    src="/DSC08868.jpg"
                    width={280}
                    height={280}
                    quality={90}
                    priority={true}
                    alt="Foto de Bruno Maruyama"
                    className="rounded-full object-cover w-44 h-44 sm:w-64 sm:h-64 shadow-xl transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-4 mt-8">
                <a
                  href="https://github.com/brunomaruyama"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 shadow-sm hover:shadow-md dark:glass-card dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:border-cyan-500/50 hover:-translate-y-1 transition duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/bruno-maruyama/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-cyan-700 hover:border-cyan-500 shadow-sm hover:shadow-md dark:glass-card dark:text-slate-300 dark:hover:text-cyan-400 dark:hover:border-cyan-500/50 hover:-translate-y-1 transition duration-300"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <About dict={dict} />
        </div>
      </section>

      {/* Techs Section */}
      <section id="techs" className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Techs dict={dict} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <Projects dict={dict} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <Contact dict={dict} />
        </div>
      </section>
    </div>
  );
}
