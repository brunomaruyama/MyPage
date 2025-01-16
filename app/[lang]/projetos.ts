interface ProjetosProps {
  project: string;
  imageRef: string[];
  techsUsed: string[];
  description: string;
  slug: string;
  link: string;
}

export const projetos: ProjetosProps[] = [
  {
    project: "Geology & Paleontology",
    imageRef: ["/didaticoScr.png", "/didaticoScr2.png", "/didaticoScr3.png"],
    techsUsed: ["WordPress ", "Google Analytics ", "HTML ", "CSS "],
    description:
      "This project was done before I learned coding for the Institute of Geosciences of University of São Paulo, Brazil. I was responsible for all web design, UX/UI and all photography. By the time I left the project, this website had fourty thousand visitors per month.",
    slug: "didatico",
    link: "https://didatico.igc.usp.br",
  },
  {
    project: "Portfolio",
    imageRef: [
      "/portfolioScr1.png",
      "/portfolioScr2.png",
      "/portfolioScr3.png",
    ],
    techsUsed: ["Next.js ", "TailwindCSS ", "TypeScript ", "Vercel "],
    description:
      "This portfolio was built to showcase my work and projects. \nIt was built using Next.js, TailwindCSS and TypeScript. \nThe contact form message is using Pipedream.\nAdded a dark/light theme button and a language switcher button using next i18n.\n It is hosted on Vercel.",
    slug: "portfolio",
    link: "https://brunomaruyama.vercel.app",
  },
  {
    project: "Products Catalog",
    imageRef: ["/bemquetefizScr.png", "/bemquetefizScr2.png"],
    techsUsed: ["Netx.JS ", "React ", "TypeScript ", "TailwindCSS ", "Vercel "],
    description:
      "This project was built using Next.JS, React, TypeScript and TailwindCSS. It is hosted on Vercel.\nIt is a catalog of handmade cosmetics products where I applied my knowledge in web design, UX/UI, web development, responsivity, project structuring, Next.JS, TailwindCSS and deployment.",
    slug: "catalog",
    link: "https://bemquetefiz.vercel.app",
  },
];
