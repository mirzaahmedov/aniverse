import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/header";
import colors from "tailwindcss/colors";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const revalidate = 3600;
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
      <body className={twMerge(inter.className, "overflow-x-hidden")}>
        <NextTopLoader showSpinner height={6} color={colors.blue["500"]} />
        <Header />
        <main className="max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
