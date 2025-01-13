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
    techsUsed: ["WordPress", "Google Analytics", "HTML", "CSS"],
    description:
      "This project was done before I learned coding for the Institute of Geosciences of University of São Paulo, Brazil. I was responsible for all web design, UX/UI and all photography. By the time I left the project, this website had fourty thousand visitors per month.",
    slug: "didatico",
    link: "https://didatico.igc.usp.br",
  },
];
