import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen p-5">
      <header className="flex justify-end space-x-2 mr-[5vw]">
        <button>PT</button>
        <button>Light</button>
      </header>

      <div className="p-[20vw] flex h-[85vh] justify-between items-center my-auto">
        <div className="block space-y-3">
          <Image
            src="/DSC08867.jpg"
            width={250}
            height={250}
            quality={80}
            priority={true}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
            className="rounded-full w-auto h-auto"
          />

          <h1 className="text-6xl leading-8">
            Bruno <br />
            Maruyama
          </h1>
          <h2 className="text-2xl">Front-End Developer</h2>
        </div>

        <ul className="block text-4xl text-right">
          <li className="hover:text-5xl hover:text-blue-100 duration-500">
            <a href="http://">Sobre mim</a>
          </li>
          <li className="hover:text-5xl hover:text-blue-100 duration-500">
            <a href="http://">Projetos</a>
          </li>
          <li className="hover:text-5xl hover:text-blue-100 duration-500">
            <a href="http://">Contato</a>
          </li>
        </ul>
      </div>

      <footer className="flex space-x-2 ml-[5vw]">
        <a href="">github</a>
        <a href="">linkedin</a>
      </footer>
    </main>
  );
}
