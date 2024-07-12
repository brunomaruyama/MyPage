import Footer from "../components/footer/page";
import Header from "../components/header/page";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="h-[100dvh]">
        <Header />
        <div className="h-[100vh] w-full flex flex-wrap justify-between items-center  sm:items-center sm:px-[5vw] lg:px-[10vw] my-[auto] px-3 py-8">
          <div className="block space-y-3 ">
            <Image
              src="/DSC08867.jpg"
              width={75}
              height={75}
              quality={80}
              priority={true}
              alt="Picture of Bruno Maruyama"
              style={{ objectFit: "contain" }}
              className="rounded-full w-auto h-auto"
            />
            <h1 className="text-7xl leading-none font-black">
              BRUNO
              <br />
              MARUYAMA
            </h1>
            <h2 className="text-2xl font-light leading-none">
              Front-End Developer
            </h2>
          </div>

          <ul className="text-4xl sm:text-right text-left sm:pt-6 font-bold flex-col">
            <li className="hover:text-orange-300 duration-500 hover:translate-x-2">
              <a href="http://">About</a>
            </li>
            <li className="hover:text-orange-300 duration-500 hover:translate-x-2">
              <a href="http://">Projects</a>
            </li>
            <li className="hover:text-orange-300 duration-500 hover:translate-x-2">
              <a href="http://">Contact</a>
            </li>
          </ul>
        </div>

        <Footer />
      </main>
    </>
  );
}
