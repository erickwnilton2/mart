import React, { useState } from "react";

import { useForm } from "react-hook-form";

import { api } from "@/services/api";

interface ProductFormProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

export function ProductForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormProps>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const OnSubmit = async () => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await api.post("/foods");
      console.log("sucess:", response.data);
      setSuccess(true);
    } catch (error) {
      console.log("Error: ", error);
      setError("Algo deu errado. Tente novamente. ");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-5">
      <div className="m-2">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(OnSubmit)}>
          {(errors.title ||
            errors.description ||
            errors.image ||
            errors.price) && (
            <span className="text-red-500 font-bold underline">
              Preencha todos os campos abaixo
            </span>
          )}

          <label className="flex flex-col gap-2 text-white">
            Nome:
            <input
              placeholder="Nome do produto"
              className="p-1 text-black rounded-sm" 
              {...register("title", { required: true })}
            />
          </label>

          <label className="flex flex-col gap-2 text-white">
            Descrição:
            <input
              placeholder="Descrição do produto"
              className="p-1 text-black rounded-sm"
              {...register("description", { required: true })}
            />
          </label>

          <label className="flex flex-col gap-2 text-white">
            Imagem
            <input
              placeholder="Adicionar imagem por URL"
              className="p-1 text-black rounded-sm"
              {...register("image", { required: true })}
            />
          </label>

          <label className="flex flex-col gap-2 text-white">
            Valor do produto:
            <input
              placeholder="Valor do produto"
              className="p-1 text-black rounded-sm"
              {...register("price", { required: true })}
            />
          </label>

          {error && <p>{error}</p>}
          {success && <p>Dados enviados com sucesso!</p>}

          <button
            className="p-2 bg-[#181818] text-[#fff] rounded-sm hover:bg-[#181818e3]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "adicionando..." : "Adicionar"}
          </button>
        </form>
      </div>
    </div>
  );
}
