import React from "react";

interface CardComponentProps {
  title: string;
  description: string;
  image: string;
  price: number;
}

export function CardComponent({
  title,
  description,
  image,
  price,
}: CardComponentProps) {
  return (
    <div>
      <div className="bg-[#f3f0f0] rounded-2xl lg:flex lg:flex-col">
        <div className="m-auto pt-10 pb-10 text-center">
          <img
            className="m-auto w-48 h-48 sm:w-64 sm:h-64 rounded-2xl object-cover"
            src={image}
            alt="image"
          />
          <h1 className="text-1xl mt-3 font-medium">{title}</h1>
          <p className="m-2 text-1xl font-normal text-gray-500 leading-5">
            {description}
          </p>
          <strong className="text-1xl text-[#000] font-normal">
            Valor: R${price}
          </strong>
        </div>
      </div>
    </div>
  );
}
