import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="flex space-x-0 p-5 justify-between">
        <h1>Bruno Y Maruyama</h1>

        <ul className="flex space-x-3">
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
      </header>
    </main>
  );
}
