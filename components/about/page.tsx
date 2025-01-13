/* eslint-disable react/no-unescaped-entities */

interface AboutProps {
  dict: any;
}

export default async function About({ dict }: AboutProps) {
  return (
    <div className="h-full items-start grid sm:grid-cols-5 gap-[5vw] sm:px-[5vw] lg:px-[10vw] my-[20vh] px-3">
      <div className="sm:col-span-3">
        <h1 className="text-4xl font-bold py-2 mb-8 text-center sm:text-left">
          {dict.me.abouttitle}
        </h1>
        <div className="font-normal leading-relaxed space-y-2 w-4/5 mx-auto sm:mx-0">
          <p className="whitespace-pre-line">{dict.me.about}</p>
        </div>
      </div>
      <div className="sm:col-span-2 w-4/5 mx-auto sm:mx-0">
        <div className="mb-8 space-y-4 title duration-1000 delay-300">
          <h2 className="text-xl font-black text-center sm:text-left">
            {dict.me.education.title}
          </h2>
          <p className="font-light whitespace-pre-line">
            {dict.me.education.degrees}
          </p>
        </div>
        <div className="title space-y-4 duration-1000 delay-700">
          <h2 className="text-xl font-black text-center sm:text-left">
            {dict.me.languages.title}
          </h2>
          <p className="font-light whitespace-pre-line">
            {dict.me.languages.lang}
          </p>
        </div>
      </div>
    </div>
  );
}
