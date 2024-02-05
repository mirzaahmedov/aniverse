import Link from "next/link";

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
  return (
    <header className="px-20 py-10 flex items-center justify-between gap-40">
      <h1>Aniverse</h1>
      <nav>
        <ul className="flex items-center justify-center gap-20 uppercase">
          {links.map(({ path, label }) => (
            <li key={path}>
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <input placeholder="search..." type="text" />
    </header>
  );
}

export default Header;
