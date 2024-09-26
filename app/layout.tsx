import React from "react";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Mart",
  description: "Menu of a non-existent restaurant.",
  keywords: ["Mart", "Menu", "Restaurant", "Software", "webapp"],
  icons: { icon: ["/food.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
