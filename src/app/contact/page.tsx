"use client";

import { TextField } from "@/components/textfield";
import { Wrapper } from "@/components/wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Message } from "./message";
import { IoSend } from "react-icons/io5";
import { EmailSchema, emailSchema } from "@/schemas/emails";
import toast from "react-hot-toast";

export default function Contact() {
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
      await fetch("api/email", {
        body: JSON.stringify(data),
        method: "POST",
      });

      toast.success("Email successfully sent :)", {
        position: "bottom-right",
        style: { background: "#181818", color: "#fff" },
      });
      reset();
    } catch (e) {
      console.error(e);

      toast.error("Oops, it looks like there was an error :(", {
        position: "bottom-right",
        style: { background: "#e11d48", color: "#fff" },
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
          <button className="relative hover:opacity-75 flex items-center w-full p-4  font-medium text-sm bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] justify-end px-4 rounded-xl mt-5 active:scale-95 transition-all duration-300">
            <p className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              Send
            </p>
            <IoSend className=" text-white text-sm " />
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
