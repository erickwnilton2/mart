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
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <input {...register("title", { required: true })} />
            {errors.title && <span>Campo obrigatório</span>}

            <input {...register("description", { required: true })} />
            {errors.description && <span>Campo obrigatório</span>}

            <input {...register("image", { required: true })} />
            {errors.image && <span>Campo obrigatório</span>}

            <input {...register("price", { required: true })} />
            {errors.price && <span>Campo obrigatório</span>}

            {error && <p>{error}</p>}
            {success && <p>Dados enviados com sucesso!</p>}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
