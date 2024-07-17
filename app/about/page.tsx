/* eslint-disable react/no-unescaped-entities */

import Links from "../../components/Links/page";

export default function About() {
  return (
    <div className="h-[100vh] flex justify-between space-x-10 items-center sm:px-[5vw] lg:px-[10vw] my-[auto] px-3 py-8">
      <div>
        <h1 className="text-4xl font-bold py-2">About me</h1>
        <p className="font-medium">
          Graduated in Biological Sciences from the University of São Paulo
          (bachelor's and licentiate's degree). I'm currently looking to migrate
          my career to front-end development (HTML, CSS, Javascript, ReactJS,
          Git, GitHub, SQL). At the moment I'm finishing a Specialization Course
          in Data Science & Analytics.
        </p>

        <h2 className="text-3xl font-bold py-2 mt-8">
          Technologies I've been learning
        </h2>
        <div></div>
      </div>
      <Links />
    </div>
  );
}
