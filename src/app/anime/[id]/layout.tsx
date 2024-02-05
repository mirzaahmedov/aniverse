"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const links: Array<{
  path: string;
  label: string;
}> = [
  { path: "/", label: "Details" },
  { path: "/characters", label: "Characters & Staff" },
  { path: "/episodes", label: "Episodes" },
  { path: "/videos", label: "Videos" },
  { path: "/stats", label: "Stats" },
  { path: "/reviews", label: "Reviews" },
  { path: "/recommendations", label: "Recommendations" },
];

function AnimeLayout() {
  const { id } = useParams();
  return (
    <nav>
      <ul>
        {links.map(({ path, label }) => (
          <Link key={path} href={`/anime/${id}/${path}`}>
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
}

export default AnimeLayout;
