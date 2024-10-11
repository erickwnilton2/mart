"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { api } from "@/services/api";

import { Grid } from "@/components/grid";
import { Loading } from "@/components/loading";
import { CardComponent } from "@/components/card";

import { Modal } from "@/components/modal";
import { OpenModalButton } from "@/components/buttons/openModal";
import { ProductForm } from "@/components/productForm/productForm";

import { FoodData } from "@/interface/foodData";

export default function Home() {
  const [data, setData] = useState<FoodData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(true);
  const handleCloseModal = () => setIsOpenModal(false);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      try {
        const response = await api.get("/foods");
        setData(response.data);
      } catch {
        return null;
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurantData();
  }, []);

  return (
    <div>
      <header className="p-3 border-b-2 border-b-[#101010]">
        <div className="gap-3 flex items-center justify-between">
          <h1 className="font-bold text-4xl text-[#ffffffef]">Mart</h1>
          <strong className="hidden sm:block font-thin text-1xl border-b-2 text-[#fffffff6] border-b-[#969696]">
            Cardápio de um restaurante fictício
          </strong>
          <OpenModalButton
            title="adicionar produto"
            openModal={handleOpenModal}
          />
        </div>
      </header>
      <main>
        {isLoading && <Loading />}
        {data.length > 0 && (
          <Grid>
            {data.map((foodData) => (
              <CardComponent
                key={foodData.id}
                title={foodData.title}
                description={foodData.description}
                price={foodData.price}
                image={foodData.image}
              />
            ))}
          </Grid>
        )}
      </main>

      <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
        <ProductForm />
      </Modal>
    </div>
  );
}
