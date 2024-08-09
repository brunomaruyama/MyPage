import Image from "next/image";
import Links from "../components/Links/page";
import About from "./about/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="h-[100vh] w-full flex flex-wrap justify-between items-center  sm:items-center sm:px-[5vw] lg:px-[10vw] my-[auto] px-3 py-8"
      >
        <div className="block space-y-3 ">
          <Image
            src="/DSC08868.jpg"
            width={75}
            height={75}
            quality={80}
            priority={true}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
            className="rounded-sm border border-white w-auto h-auto"
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
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact" className="h-[100vh]">
        <Contact />
      </section>
    </>
  );
}
