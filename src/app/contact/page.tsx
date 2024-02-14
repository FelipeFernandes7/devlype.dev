"use client";

import { TextField } from "@/components/textfield";
import { Wrapper } from "@/components/wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Message } from "./message";
import { IoSend } from "react-icons/io5";
import { EmailSchema, emailSchema } from "@/schemas/emails";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EmailSchema>({
    resolver: zodResolver(emailSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: EmailSchema) => {
    try {
      setIsLoading(true);
      await fetch("api/email", {
        body: JSON.stringify(data),
        method: "POST",
      });

      toast.success("Email successfully sent :)", {
        position: "bottom-center",
        style: {
          background: "#18181b",
          color: "#fff",
        },
      });
      setIsLoading(false);
      reset();
    } catch (e) {
      console.error(e);

      toast.error("Oops, it looks like there was an error :(", {
        position: "bottom-center",
        style: {
          background: "#18181b",
          color: "#fff",
        },
      });
    }
  };

  return (
    <Wrapper>
      <div className="w-full flex flex-col justify-center items-center md:max-w-96 mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent mt-5">
          It would be a pleasure to receive a message from you
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col px-2 gap-4 md:max-w-96 md:px-0 mt-8 mb-4"
        >
          <div className=" w-full flex items-center justify-start mb-3">
            <h1 className="font-medium text-2xl">Send me an e-mail</h1>
          </div>
          <TextField
            autoComplete="off"
            label="Nome"
            type={"text"}
            name="name"
            register={register}
            error={errors.name}
            placeholder="John Doe"
          />
          <TextField
            autoComplete="off"
            label="Email"
            type={"email"}
            name="email"
            register={register}
            error={errors.email}
            placeholder="john.doe@gmail.com"
          />
          <Message
            label="Mensagem"
            name="message"
            register={register}
            error={errors.message}
            placeholder="Send me an message"
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
            }}
          />
          <button className="hover:opacity-75 flex items-center w-full h-12 font-medium text-lg bg-gradient-to-r from-[#4f46e5] to-[#c026d3] justify-center rounded-xl mt-5 active:scale-95 transition-all duration-300">
            {isLoading ? (
              <ImSpinner2 className="animate-spin text-xl" />
            ) : (
              "Send"
            )}
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
