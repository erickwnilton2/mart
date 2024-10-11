import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  if (isOpen) {
    return (
      <div className="top-0 left-0 right-0 bottom-0 z-[1] flex fixed items-center justify-center bg-black">
        <div className="p-5 border-2 border-gray-500 rounded-md">
          <div className="flex justify-between items-center border-b-2 border-gray-500">
            <h1 className="font-semibold text-white text-2xl">Mart</h1>
            <button onClick={onClose} className="text-white text-2xl">
              &#10540;
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    );
  }
}
