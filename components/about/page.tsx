/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <div className="h-full items-start grid sm:grid-cols-5 gap-8 sm:px-[5vw] lg:px-[10vw] my-[20vh] px-3">
      <div className="col-span-3">
        <h1 className="text-4xl font-bold py-2 mb-8">About me</h1>
        <p className="font-normal">
          Hi! I´m Bruno! <br />
          I Graduated in Biological Sciences from the University of São Paulo
          (bachelor's and licentiate's degree) and recently finished a
          Specialization course in Data Science and Analytics.
          <br />
          I'm currently looking forward to migrate my career to front-end
          development{" "}
          <b>
            (NextJS, TailwindCSS, HTML, CSS, Javascript, ReactJS, Git, GitHub)
          </b>
          .
        </p>
      </div>
      <div className="col-span-2">
        <div className="mb-8 space-y-4 title duration-1000 delay-300">
          <h2 className="text-xl font-black">Education</h2>
          <p className="font-light">
            &bull; Bachelor´s and Licentiate Degree in
            <span className="font-medium"> Biological Sciences</span> -
            Universidade de São Paulo
          </p>
          <p className="font-light">
            &bull; MBA Specialization Degree in
            <span className="font-medium"> Data Science and Analytics</span>
          </p>
        </div>
        <div className="title space-y-4 duration-1000 delay-700">
          <h2 className="text-xl font-black">Languages</h2>
          <p className="font-light">
            &bull; <span className="font-medium">Brazilian portuguese</span>:
            native speaker
          </p>
          <p className="font-light">
            &bull; <span className="font-medium">English</span>: advanced
          </p>
        </div>
      </div>
    </div>
  );
}
