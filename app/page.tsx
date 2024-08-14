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
        className="pt-[15vh] sm:h-[100vh] w-full grid md:grid-cols-3 sm:px-[5vw] lg:px-[10vw] my-[auto] px-3"
      >
        <div className="col-span-2 block space-y-3 items-end mb-8">
          <Image
            src="/DSC08868.jpg"
            width={150}
            height={150}
            quality={80}
            priority={true}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
            className="border border-purple-500 w-auto h-auto"
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
        <div className="col-span-1">
          <div className="mb-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <p className="font-light">
              - Bachelor´s and Licentiate Degree in
              <span className="font-semibold"> Biological Sciences</span> -
              Universidade de São Paulo
            </p>
            <p className="font-light">
              - MBA Specialization Degree in
              <span className="font-semibold"> Data Science and Analytics</span>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Languages</h2>
            <p className="font-light">
              - <span className="font-semibold">Brazilian portuguese</span>:
              native speaker
            </p>
            <p className="font-light">
              - <span className="font-semibold">English</span>: advanced
            </p>
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
