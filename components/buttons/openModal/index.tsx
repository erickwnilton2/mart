import React, { ReactNode } from "react";

interface ButtonProps {
  title: ReactNode;
  openModal: () => void;
}

export function OpenModalButton({ title, openModal }: ButtonProps) {
  return (
    <button
      className="p-2 bg-[#e2e8f0] text-[#000] rounded-lg hover:bg-[#ffffffbd]"
      onClick={openModal}
    >
      {title}
    </button>
  );
}
