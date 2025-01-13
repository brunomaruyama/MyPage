"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactProps {
  dict: any;
}

const Contact = ({ dict }: ContactProps) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormData>();
  const [succesMessage, setSuccessMessage] = useState("");

  function onSubmit(data: FormData) {
    axios
      .post("https://eoq1xty6qrd4dri.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage("Thanks for the message!");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div className="z-0 h-full w-full mx-auto flex-col justify-center mt-[10vh]">
      <h2 className="fromLeft text-center text-3xl font-bold">
        {dict.message.title}
      </h2>
      <p className="fromLeft text-center">{dict.message.subtitle}</p>
      <form
        className="fromLeft p-8 flex flex-col mx-auto items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-6 flex flex-col">
          <label htmlFor="name" className="mb-1 block text-base font-medium">
            {dict.message.name}
          </label>
          <input
            className="w-[60vw] sm:w-3/4 md:w-1/2 lg:w-2/5 min-w-60 bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
            type="text"
            placeholder={dict.message.name}
            {...register("name", { required: true })}
            autoComplete="name"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="mb-1 block text-base font-medium" htmlFor="email">
            {dict.message.mail}
          </label>
          <input
            className="w-[60vw] sm:w-3/4 md:w-1/2 lg:w-2/5 min-w-60 bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
            type="email"
            placeholder={dict.message.mailplace}
            {...register("email", { required: true })}
            autoComplete="on"
          />
        </div>
        <div className="mb-6 flex flex-col">
          <label className="mb-1 block text-base font-medium" htmlFor="message">
            {dict.message.message}
          </label>
          <textarea
            className="w-[60vw] sm:w-3/4 md:w-1/2 lg:w-2/5 min-w-60 bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
            placeholder={dict.message.messageplace}
            rows={8}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <div>
          <button
            className="py-2 px-12 flex w-fit bg-purple-500 hover:bg-purple-600 hover:shadow-2xl hover:shadow-purple-400 duration-300 tracking-wider text-white rounded mt-5"
            role="submit"
          >
            {isSubmitting ? dict.message.sending : dict.message.send}
          </button>
          {succesMessage && <p>{succesMessage}</p>}
        </div>
      </form>
    </div>
  );
};

export default Contact;
