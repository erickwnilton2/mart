import React from "react";

interface GridContainerProps {
  children: React.ReactNode;
}

export function Grid({ children }: GridContainerProps) {
  return (
    <div className="m-3 p-3 lg:m-10 lg:p-10 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {children}
    </div>
  );
}
