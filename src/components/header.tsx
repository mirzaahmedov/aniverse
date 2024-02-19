"use client";

import { Anton } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchField from "@/components/search-field";

const anton = Anton({ weight: "400", subsets: ["latin"] });

const links: Array<{
  path: string;
  label: string;
}> = [
  {
    path: "/anime",
    label: "Anime",
  },
  {
    path: "/manga",
    label: "Manga",
  },
  {
    path: "/about",
    label: "About",
  },
];

function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 w-full px-20 py-5 bg-white z-20">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between gap-40">
        <h1
          className={twMerge(
            anton.className,
            "uppercase text-gray-700 text-3xl",
          )}
        >
          <Link href="/">Aniverse</Link>
        </h1>
        <nav>
          <ul className="flex items-center justify-center gap-20 text-sm font-medium uppercase">
            {links.map(({ path, label }) => (
              <li key={path}>
                <Link
                  href={path}
                  className={twMerge(
                    "text-gray-700",
                    pathname === path && "text-blue-500",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SearchField />
      </div>
    </header>
  );
}

export default Header;
