import React from "react";

export default function Home() {
  return (
    <div>
      <header className="p-3 border-b-2 border-b-[#101010]">
        <div className="gap-3 flex items-center justify-between">
          <h1 className="font-bold text-4xl text-[#ffffffef]">Mart</h1>
          <strong className="hidden sm:block font-thin text-1xl border-b-2 text-[#fffffff6] border-b-[#969696]">
            Cardápio de um restaurante inexistente
          </strong>
          <button className="p-2 bg-[#e2e8f0] text-[#000] rounded-lg hover:bg-[#ffffffbd]">
            Adicionar produto
          </button>
        </div>
      </header>
      <main></main>
    </div>
  );
}
