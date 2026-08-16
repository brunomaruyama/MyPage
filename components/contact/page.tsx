"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ScrollReveal from "../ScrollReveal";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

interface ContactProps {
  dict: any;
}

export default function Contact({ dict }: ContactProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<FormData>();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(data: FormData) {
    setSuccessMessage("");
    setErrorMessage("");
    const pipedreamUrl = process.env.NEXT_PUBLIC_PIPEDREAM_URL || process.env.PIPEDREAM_URL;

    if (!pipedreamUrl) {
      setTimeout(() => {
        setSuccessMessage(dict.message.success || "Mensagem enviada com sucesso!");
        reset();
      }, 600);
      return;
    }

    try {
      await axios.post(pipedreamUrl, data);
      setSuccessMessage(dict.message.success || "Mensagem enviada com sucesso!");
      reset();
    } catch (error) {
      console.error(error);
      setErrorMessage("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
    }
  }

  return (
    <div className="space-y-10">
      {/* Section Header */}
      <ScrollReveal delay={0}>
        <div className="flex flex-col items-center text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-cyan-100/80 text-cyan-800 border border-cyan-300 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20 mb-3">
            {dict.links.contact}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            {dict.message.title}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-lg text-sm sm:text-base mt-2 font-medium">
            {dict.message.subtitle}
          </p>
        </div>
      </ScrollReveal>

      {/* Form Card */}
      <ScrollReveal delay={100}>
        <div className="glass-card p-6 sm:p-10 rounded-2xl max-w-2xl mx-auto">
          <form
            id="contact-form"
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {dict.message.name}
              </label>
              <input
                id="name"
                type="text"
                placeholder={dict.message.name}
                autoComplete="name"
                {...register("name", { required: true })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/25 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm shadow-sm"
              />
              {errors.name && (
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Campo obrigatório</span>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {dict.message.mail}
              </label>
              <input
                id="email"
                type="email"
                placeholder={dict.message.mailplace}
                autoComplete="email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/25 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm shadow-sm"
              />
              {errors.email && (
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Insira um e-mail válido</span>
              )}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-800 dark:text-slate-200"
              >
                {dict.message.message}
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder={dict.message.messageplace}
                {...register("message", { required: true })}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-300 dark:border-slate-700/60 focus:outline-none focus:border-[#06b6d4] focus:ring-2 focus:ring-[#06b6d4]/25 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm resize-none shadow-sm"
              ></textarea>
              {errors.message && (
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400">Campo obrigatório</span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col items-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-3.5 rounded-xl font-bold tracking-wide text-white bg-[#06b6d4] hover:bg-[#0891b2] shadow-[0_4px_16px_rgba(6,182,212,0.35)] hover:shadow-[0_6px_24px_rgba(6,182,212,0.55)] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>{dict.message.sending}</span>
                  </>
                ) : (
                  <>
                    <span>{dict.message.send}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {successMessage && (
                <div className="mt-4 p-3 rounded-lg bg-emerald-100 border border-emerald-300 text-emerald-800 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400 text-sm font-medium text-center">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="mt-4 p-3 rounded-lg bg-rose-100 border border-rose-300 text-rose-800 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-400 text-sm font-medium text-center">
                  {errorMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </ScrollReveal>
    </div>
  );
}
