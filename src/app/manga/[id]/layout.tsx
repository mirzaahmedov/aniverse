"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const links: Array<{
  path: string;
  label: string;
}> = [
  { path: "/", label: "Details" },
  { path: "/characters", label: "Characters & Staff" },
  { path: "/stats", label: "Stats" },
  { path: "/reviews", label: "Reviews" },
  { path: "/recommendations", label: "Recommendations" },
  { path: "/clubs", label: "Clubs" },
  { path: "/pictures", label: "Pictures" },
];

function MangaLayout() {
  const { id } = useParams();
  return (
    <nav>
      <ul>
        {links.map(({ path, label }) => (
          <Link key={path} href={`/manga/${id}/${path}`}>
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default MangaLayout;
