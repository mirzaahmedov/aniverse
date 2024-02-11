import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniverse | Anime watchlist",
  description: "Anime watchlist that uses unofficial myanimelist API jikan.moe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
