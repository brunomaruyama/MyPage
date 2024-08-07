"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
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
    <form
      className="h-full p-8 flex flex-col justify-center mx-auto items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-6 flex flex-col items-center">
        <label htmlFor="name" className="mb-1 block text-base font-medium">
          Full Name
        </label>
        <input
          className="bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-6 flex flex-col items-center">
        <label className="mb-1 block text-base font-medium" htmlFor="email">
          E-mail Address
        </label>
        <input
          className="bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          type="email"
          placeholder="example@example.com"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-6 flex flex-col items-center">
        <label className="mb-1 block text-base font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          className="bg-gray-500/20 rounded border border-gray-500 border-opacity-80 p-1 focus:outline-none focus:border-purple-500 backdrop-blur-sm"
          placeholder="Type your message"
          rows={8}
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button
          className="px-5 py-2 duration-300 rounded-full bg-purple-500 text-white hover:bg-purple-700"
          role="submit"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        {succesMessage && <p>{succesMessage}</p>}
      </div>
    </form>
  );
};

export default Contact;
