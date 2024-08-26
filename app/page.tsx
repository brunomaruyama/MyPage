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
        className="pt-[8vh] sm:pt-[15vh] sm:h-[100vh] w-full grid md:grid-cols-3 sm:px-[5vw] lg:px-[10vw] my-[auto] px-3"
      >
        <div className="col-span-2 block space-y-3 items-end mb-10">
          <Image
            src="/DSC08868.jpg"
            width={250}
            height={250}
            quality={80}
            priority={true}
            alt="Picture of Bruno Maruyama"
            style={{ objectFit: "contain" }}
            className="hover:shadow-purple-400/50 shadow-black/30 duration-500 shadow-2xl rounded-full w-auto max-h-40 sm:max-h-80"
          />
          <div className="block">
            <h1 className="text-4xl sm:text-7xl leading-none font-black title">
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
          <div className="mb-8 title duration-1000 delay-300">
            <h2 className="text-2xl font-black">Education</h2>
            <p className="font-light">
              - Bachelor´s and Licentiate Degree in
              <span className="font-medium"> Biological Sciences</span> -
              Universidade de São Paulo
            </p>
            <p className="font-light">
              - MBA Specialization Degree in
              <span className="font-medium"> Data Science and Analytics</span>
            </p>
          </div>
          <div className="title duration-1000 delay-700">
            <h2 className="text-2xl font-black">Languages</h2>
            <p className="font-light">
              - <span className="font-medium">Brazilian portuguese</span>:
              native speaker
            </p>
            <p className="font-light">
              - <span className="font-medium">English</span>: advanced
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
