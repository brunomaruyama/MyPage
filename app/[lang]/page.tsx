import Footer from "./components/footer/page";
import Header from "./components/header/page";
import Image from "next/image";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <>
      <main className="h-[100vh] grid">
        <Header />

        <div className="row-span-9 sm:px-[5vw] lg:px-[10vw] my-[auto]">
          <div className="block space-y-3 ">
            <Image
              src="/DSC08867.jpg"
              width={75}
              height={75}
              quality={80}
              priority={true}
              alt="Picture of Bruno Maruyama"
              style={{ objectFit: "contain" }}
              className="rounded-full w-15 h-15"
            />
            <h1 className="text-7xl leading-none font-black">
              BRUNO
              <br />
              MARUYAMA
            </h1>
            <h2 className="text-2xl font-light leading-none">
              {dict.subtitle}
            </h2>
          </div>
          <ul className="text-4xl sm:text-right text-left pt-6 font-bold">
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

        <Footer />
      </main>
    </>
  );
}
