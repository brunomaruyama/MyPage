import { notFound } from "next/navigation";
import { projetos } from "../../projetos";
import Image from "next/image";
import ThemeButton from "../../../utils/themeButton";
import Link from "next/link";

export async function generateStaticParams() {
  return projetos.map((projeto) => ({
    slug: "projects/" + projeto.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projeto = projetos.find((p) => p.slug === params.slug);

  if (!projeto) {
    notFound();
  }

  return (
    <>
      <header className="h-[7vh] fixed backdrop-blur-md top-0 w-full flex items-center space-x-2 justify-between p-3 sm:px-[5vw] lg:px-[10vw]">
        <Link
          href="/"
          className="hover:text-purple-400  duration-500 hover:translate-y-1 text-xl font-bold"
        >
          Home
        </Link>
        <ThemeButton />
      </header>
      <div className="pt-[13vh] flex-col space-y-4 h-full bg-transparent">
        <h1 className="text-center text-3xl font-bold">{projeto.project}</h1>
        {projeto.imageRef.map((image) => (
          <div key={image} className="w-full object-cover mx-auto flex-col">
            <Image
              src={image}
              alt={`screenshot of ${projeto.project}`}
              width={1200}
              height={800}
              style={{ objectFit: "contain" }}
              className="mx-auto"
            />
          </div>
        ))}

        <div className="sm:px-[5vw] lg:px-[10vw] px-3 max-w-[60vw] flex-col mx-auto">
          <p className="mb-4">{projeto.description}</p>
          <p className="mb-4">
            Techs I used in this project: {projeto.techsUsed.join(", ")}
          </p>
          <a href={projeto.link} target="_blank">
            <button className="mb-[10vh] text-white rounded-xl bg-purple-500 hover:bg-purple-600 duration-300 p-3">
              Visit this project
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
