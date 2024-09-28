import React from "react";
import { FoodData } from "@/interface/foodData";
import { CardComponent } from "@/components/card";

export default function Home() {
  const ConsumeProductData: FoodData[] = [];

  return (
    <div>
      <header className="p-3 border-b-2 border-b-[#101010]">
        <div className="gap-3 flex items-center justify-between">
          <h1 className="font-bold text-4xl text-[#ffffffef]">Mart</h1>
          <strong className="hidden sm:block font-thin text-1xl border-b-2 text-[#fffffff6] border-b-[#969696]">
            Cardápio de um restaurante fictício
          </strong>
          <button className="p-2 bg-[#e2e8f0] text-[#000] rounded-lg hover:bg-[#ffffffbd]">
            Adicionar produto
          </button>
        </div>
      </header>
      <main className="m-3 p-3 lg:m-10 lg:p-10 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {ConsumeProductData.map((foodData) => (
          <CardComponent
            key={foodData.id}
            title={foodData.title}
            price={foodData.price}
            image={foodData.image}
          />
        ))}
      </main>
    </div>
  );
}
