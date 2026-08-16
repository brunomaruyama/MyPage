import ScrollReveal from "../ScrollReveal";

interface AboutProps {
  dict: any;
}

export default function About({ dict }: AboutProps) {
  return (
    <div className="space-y-12">
      {/* Section Header */}
      <ScrollReveal delay={0}>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-3">
            {dict.links.about}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {dict.me.abouttitle}
          </h2>
        </div>
      </ScrollReveal>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Bio Text Column */}
        <div className="lg:col-span-7 space-y-5">
          <ScrollReveal delay={100}>
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <div className="text-base sm:text-lg leading-relaxed text-slate-800 dark:text-slate-200 space-y-4 whitespace-pre-line font-normal">
                {dict.me.about}
              </div>
            </div>
          </ScrollReveal>

          {/* Key Metric Highlights */}
          {dict.me.highlights && (
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="glass-card p-4 rounded-xl text-center sm:text-left border-l-4 border-l-[#06b6d4]">
                  <p className="text-xl font-extrabold text-cyan-700 dark:text-cyan-300">
                    {dict.me.highlights.users}
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {dict.me.highlights.users_desc}
                  </p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center sm:text-left border-l-4 border-l-[#06b6d4]">
                  <p className="text-xl font-extrabold text-cyan-700 dark:text-cyan-300">
                    {dict.me.highlights.impressions}
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {dict.me.highlights.impressions_desc}
                  </p>
                </div>
                <div className="glass-card p-4 rounded-xl text-center sm:text-left border-l-4 border-l-[#06b6d4]">
                  <p className="text-xl font-extrabold text-cyan-700 dark:text-cyan-300">
                    {dict.me.highlights.focus}
                  </p>
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 mt-1">
                    {dict.me.highlights.focus_desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Sidebar Cards: Education & Languages */}
        <div className="lg:col-span-5 space-y-6">
          {/* Education Card */}
          <ScrollReveal delay={150}>
            <div className="glass-card glass-card-hover p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {dict.me.education.title}
                </h3>
              </div>
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line font-medium">
                {dict.me.education.degrees}
              </div>
            </div>
          </ScrollReveal>

          {/* Languages Card */}
          <ScrollReveal delay={250}>
            <div className="glass-card glass-card-hover p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-100 text-cyan-800 border border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {dict.me.languages.title}
                </h3>
              </div>
              <div className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line font-medium">
                {dict.me.languages.lang}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
