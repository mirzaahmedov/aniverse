import { getTopAnime } from "@/actions";
import Link from "next/link";
import AnimeGrid from "@/components/anime-grid";

export default async function Home() {
  const topAiring = await getTopAnime({ filter: "airing", limit: 12 });
  const topUpcoming = await getTopAnime({ filter: "upcoming", limit: 12 });
  const topPopular = await getTopAnime({ filter: "bypopularity", limit: 12 });
  const topFavorite = await getTopAnime({ filter: "favorite", limit: 12 });

  return (
    <main>
      <h2 className="headline">
        Top airing
        <Link href="/anime/airing" className="text-base float-end">
          More
        </Link>
      </h2>
      <AnimeGrid animes={topAiring.data} />
      <h2 className="headline">
        Top upcoming
        <Link href="/anime/upcoming" className="text-base float-end">
          More
        </Link>
      </h2>
      <AnimeGrid animes={topUpcoming.data} />
      <h2 className="headline">
        Top popular
        <Link href="/anime/popular" className="text-base float-end">
          More
        </Link>
      </h2>
      <AnimeGrid animes={topPopular.data} />
      <h2 className="headline">
        Top favorite
        <Link href="/anime/favorite" className="text-base float-end">
          More
        </Link>
      </h2>
      <AnimeGrid animes={topFavorite.data} />
    </main>
  );
}
