"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form
      className="h-full p-8 flex flex-col justify-center mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-5">
        <label htmlFor="name" className="mb-3 block text-base font-medium">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium" htmlFor="email">
          E-mail Adress
        </label>
        <input
          type="email"
          placeholder="example@example.com"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 block text-base font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="Type your message"
          rows={8}
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Contact;
