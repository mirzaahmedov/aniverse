"use client";

import { Anton } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

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
          <ul className="flex items-center justify-center gap-20 font-medium uppercase">
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
        <div className="relative">
          <input
            placeholder="Search..."
            type="text"
            className="px-6 py-3 bg-gray-50 text-base rounded-xl outline-blue-500"
          />
          <button>
            <MagnifyingGlassIcon className="absolute top-2.5 right-3 h-6 text-gray-400" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
