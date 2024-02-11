"use client";

import { twMerge } from "tailwind-merge";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

const links: Array<{
  path: string;
  label: string;
}> = [
  { path: "", label: "Details" },
  { path: "characters", label: "Characters & Staff" },
  { path: "episodes", label: "Episodes" },
  { path: "videos", label: "Videos" },
  { path: "stats", label: "Stats" },
  { path: "reviews", label: "Reviews" },
  { path: "recommendations", label: "Recommendations" },
];

type AnimeLayoutProps = {
  children: React.ReactNode;
};
function AnimeLayout({ children }: AnimeLayoutProps) {
  const pathname = usePathname();
  const { id } = useParams();
  console.log(pathname);

  return (
    <div>
      <nav className="px-20 py-10">
        <ul className="flex items-center justify-center flex-wrap gap-20 text-sm text-gray-700">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link
                href={buildPathname(String(id), path)}
                className={twMerge(
                  "inline-block uppercase hover:text-gray-950 hover:font-medium",
                  pathname === buildPathname(String(id), path) &&
                    "text-blue-500 font-medium",
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
}
function buildPathname(id: string, path: string) {
  if (path === "") {
    return `/anime/${id}`;
  }
  return `/anime/${id}/${path}`;
}

export default AnimeLayout;
