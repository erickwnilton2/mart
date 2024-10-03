"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { api } from "@/services/api";

import { Grid } from "@/components/grid";
import { Loading } from "@/components/loading";
import { CardComponent } from "@/components/card";

import { FoodData } from "@/interface/foodData";

export default function Home() {
  const [data, setData] = useState<FoodData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
          <button className="p-2 bg-[#e2e8f0] text-[#000] rounded-lg hover:bg-[#ffffffbd]">
            Adicionar produto
          </button>
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
    </div>
  );
}
