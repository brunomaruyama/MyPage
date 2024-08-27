import Image from "next/image";
import About from "../components/about/page";
import Contact from "../components/contact/page";
import Projects from "../components/projects/page";
import Header from "../components/header/page";
import Techs from "../components/techs/page";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="home"
        className=" pt-[8vh] mt-[7vh] sm:pt-[15vh] sm:h-full w-full sm:px-[5vw] lg:px-[10vw] my-[auto] px-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 justify-between items-center my-auto">
          <div className="space-y-3 col-span-3 ">
            <p className="text-xl">Hi, I`m</p>
            <h1 className="text-3xl sm:text-6xl font-black title">
              Bruno Maruyama
            </h1>
            <h2 className="text-2xl font-light">Front-End Developer</h2>
            <a
              href="#contact"
              className="py-2 px-12 flex w-fit bg-purple-500 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-400 duration-300 tracking-wider text-white rounded mt-5"
            >
              <p>Hire me</p>{" "}
            </a>
          </div>
          <div className="col-span-2 row-start-1 sm:row-start-auto block mb-10 sm:mb-0">
            <Image
              src="/DSC08868.jpg"
              width={250}
              height={250}
              quality={80}
              priority={true}
              alt="Picture of Bruno Maruyama"
              style={{ objectFit: "contain" }}
              className="my-auto mx-auto ring-purple-600 ring-2  duration-500 rounded-full w-auto max-h-40 sm:max-h-80"
            />
            <div className="flex justify-center space-x-3 mt-6">
              <a href="https://github.com/brunomaruyama" target="_blank">
                <svg
                  className="h-5 w-5 hover:text-purple-400 hover:-translate-y-1 duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/bruno-maruyama/"
                target="_blank"
              >
                <svg
                  className="h-5 w-5 hover:text-purple-400 hover:-translate-y-1 duration-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                  <rect x="2" y="9" width="4" height="12" />{" "}
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="h-full justify-center items-center my-auto "
      >
        <About />
      </section>
      <section id="techs">
        <Techs />
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
