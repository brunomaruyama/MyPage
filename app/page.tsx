import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="">
        <div className="sm:p-[10vw] lg:p-[20vw] p-4 sm:flex block h-[85vh] justify-between items-center my-auto">
          <div className="block space-y-3">
            <Image
              src="/DSC08867.jpg"
              width={200}
              height={200}
              quality={80}
              priority={true}
              alt="Picture of Bruno Maruyama"
              style={{ objectFit: "contain" }}
              className="rounded-full w-45 h-45"
            />

            <h1 className="text-6xl leading-8">
              Bruno <br />
              Maruyama
            </h1>
            <h2 className="text-2xl">Front-End Developer</h2>
          </div>

          <ul className="block text-4xl sm:text-right text-left mt-6">
            <li className="hover:text-blue-100 duration-500 hover:translate-x-2">
              <a href="http://">Sobre mim</a>
            </li>
            <li className="hover:text-blue-100 duration-500 hover:translate-x-2">
              <a href="http://">Projetos</a>
            </li>
            <li className="hover:text-blue-100 duration-500 hover:translate-x-2">
              <a href="http://">Contato</a>
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </main>
  );
}
