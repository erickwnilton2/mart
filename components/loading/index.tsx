import React from "react";

export function Loading() {
  return (
    <div className="m-auto flex items-center justify-center h-[90vh]">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-gray-500"></div>
    </div>
  );
}
