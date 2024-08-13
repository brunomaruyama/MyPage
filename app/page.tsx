import Image from "next/image";
import About from "../components/about/page";
import Contact from "../components/contact/page";
import Projects from "../components/projects/page";
import Header from "../components/header/page";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="home"
        className="pt-[15vh] sm:h-[100vh] w-full flex flex-wrap justify-between items-center  sm:items-center sm:px-[5vw] lg:px-[10vw] my-[auto] px-3 sm:py-8"
      >
        <div className="block sm:flex space-y-3 items-end">
          <Image
            src="/DSC08868.jpg"
            width={150}
            height={150}
            quality={80}
            priority={true}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
            className="rounded-sm border border-white w-auto h-auto"
          />
          <div className="block">
            <h1 className="text-4xl sm:text-7xl leading-none font-black">
              BRUNO
              <br />
              MARUYAMA
            </h1>
            <h2 className="text-2xl font-light leading-none">
              Front-End Developer
            </h2>
          </div>
        </div>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" className="h-[100vh]">
        <Contact />
      </section>
    </div>
  );
}
