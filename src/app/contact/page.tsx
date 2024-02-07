"use client";

import { TextField } from "@/components/textfield";
import { Wrapper } from "@/components/wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Message } from "./message";
import { IoMdSend } from "react-icons/io";

export default function Contact() {
  const schema = z.object({
    email: z.string().email("Informe um e-mail válido!"),
    message: z.string(),
    name: z.string().min(1, "Nome Obrigatório"),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  return (
    <Wrapper>
      <div className="w-full flex flex-col justify-center items-center md:max-w-96 mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] bg-clip-text text-transparent mt-5">
          It would be a pleasure to receive a message from you
        </h1>
        <form className="w-full flex flex-col px-2 gap-4 md:max-w-96 md:px-0 mt-8 mb-4">
          <div className=" w-full flex items-center justify-start mb-3">
            <h1 className="font-medium text-2xl">Send me an e-mail</h1>
          </div>
          <TextField
            label="Nome"
            type={"text"}
            name="name"
            register={register}
            error={errors.name}
            placeholder="John Doe"
          />
          <TextField
            label="Email"
            type={"email"}
            name="email"
            register={register}
            error={errors.email}
            placeholder="Type your e-mail"
          />
          <Message
            label="Mensagem"
            name="message"
            register={register}
            error={errors.message}
            placeholder="Send me an message"
          />
          <button className="hover:opacity-75 flex items-center justify-center w-full md:h-11 h-14 font-medium text-lg bg-gradient-to-r  from-[#4f46e5] to-[#c026d3] rounded-xl mt-5 active:scale-95 transition-all duration-300">
            Send
            <IoMdSend size={20} className="ml-2 text-white" />
          </button>
        </form>
      </div>
    </Wrapper>
  );
}
