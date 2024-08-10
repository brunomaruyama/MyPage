import Image from "next/image";
import Link from "next/link";
import { projetos } from "../projetos/page";

export default function Projects() {
  return (
    <div className="w-full flex-col justify-center items-center sm:px-[5vw] lg:px-[10vw] px-3">
      <h2 className="font-bold text-4xl text-center mb-6">Projects</h2>
      <div className="w-full flex-wrap justify-around items-center">
        {projetos.map((projeto) => (
          <div
            className={`mx-auto flex-col justify-center max-w-sm p-8 rounded-md items-center bg-purple-300/40 hover:bg-purple-500/50 duration-300 `}
            key={projeto.slug}
          >
            <Link href={projeto.slug}>
              <Image
                src={projeto.imageRef}
                alt={`screenshot of ${projeto.project}`}
                width={400}
                height={220}
                style={{ objectFit: "contain" }}
                className="mx-auto mb-2"
              />
              <h3 className="text-center text-lg font-semibold mb-2">
                {projeto.project}
              </h3>
              <p className="font-light text-sm">{projeto.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
