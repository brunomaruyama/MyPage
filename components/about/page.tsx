/* eslint-disable react/no-unescaped-entities */

export default function About() {
  return (
    <div className="h-full items-start grid sm:grid-cols-5 gap-[5vw] sm:px-[5vw] lg:px-[10vw] my-[20vh] px-3">
      <div className="col-span-3">
        <h1 className="text-4xl font-bold py-2 mb-8">About me</h1>
        <div className="font-normal leading-relaxed space-y-2">
          <p>Hi! I´m Bruno! </p>
          <p>
            I have a degree in Biological Sciences from the University of São
            Paulo, where I obtained both my bachelor's and bachelor's degrees. I
            also completed an MBA specialization in Data Science & Analytics.
          </p>
          <p>
            I recently decided to transition my career to the area of
            ​​front-end development, combining my passion for solving problems
            with technical skills in technologies such as{" "}
            <b>HTML, CSS, JavaScript, TypeScript, ReactJS and NextJs</b>. I also
            have experience using essential development tools such as{" "}
            <b>Git, GitHub and SQL</b> , and I constantly seek to improve my
            skills through projects and ongoing studies.
          </p>
          <p>
            My motivation for this transition is the desire to combine the
            analytical thinking acquired in science with the creativity and
            innovation present in web development. I believe that my ability to
            analyze complex data and translate it into practical solutions will
            be a differential in the construction of functional and dynamic
            interfaces.
          </p>
        </div>
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
