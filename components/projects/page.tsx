import Image from "next/image";
import Link from "next/link";
import { projetos } from "../../app/[lang]/projetos";

interface ProjectsProps {
  dict: any;
}

export default function Projects({ dict }: ProjectsProps) {
  return (
    <div className="fromBottom w-full flex-col justify-center items-center sm:px-[5vw] lg:px-[10vw] px-3">
      <h2 className="font-bold text-4xl text-center mb-6">
        {dict.projects.title}
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-x-4 gap-y-6">
        {projetos.map((projeto) => (
          <div
            className={`mx-auto flex-col justify-center max-w-sm  rounded-md items-center bg-purple-700/80 hover:bg-purple-500 duration-300 overflow-hidden group opacity-75 hover:opacity-100`}
            key={projeto.slug}
          >
            <Link href={`projects/${projeto.slug}`}>
              <Image
                src={projeto.imageRef[0]}
                alt={`screenshot of ${projeto.project}`}
                width={400}
                height={220}
                style={{ objectFit: "contain" }}
                className="w-full object-cover mx-auto  group-hover:scale-110 duration-500"
              />
              <div className="p-4 text-white">
                <h3 className="text-lg font-semibold mb-1">
                  {projeto.project}
                </h3>
                <p className="font-light text-sm mb-1">{projeto.description}</p>
                <span className="font-semibold text-sm">
                  {projeto.techsUsed}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
