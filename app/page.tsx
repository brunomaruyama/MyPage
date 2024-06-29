import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex p-5 justify-end space-x-2">
        <button>PT</button>
        <button>Icon</button>
      </header>

      <div className="flex h-4/5 justify-between items-center">
        <div className="block">
          <Image
            src="/../public/DSC08867.jpg"
            width={240}
            height={240}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
          />

          <h1>Bruno Y Maruyama</h1>
          <h2>Front-End Developer</h2>
        </div>

        <ul className="block">
          <li>
            <a href="http://">Sobre mim</a>
          </li>
          <li>
            <a href="http://">Projetos</a>
          </li>
          <li>
            <a href="http://">Contato</a>
          </li>
        </ul>
      </div>

      <footer className="flex space-x-2 fixed bottom-0">
        <a href="">github</a>
        <a href="">linkedin</a>
      </footer>
    </main>
  );
}
