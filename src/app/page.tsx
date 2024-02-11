import { getTopAnime } from "@/actions";
import AnimeGrid from "@/components/anime-grid";

export default async function Home() {
  const topAiring = await getTopAnime({ filter: "airing", limit: 12 });
  const topUpcoming = await getTopAnime({ filter: "upcoming", limit: 12 });
  const topPopular = await getTopAnime({ filter: "bypopularity", limit: 12 });
  const topFavorite = await getTopAnime({ filter: "favorite", limit: 12 });

  return (
    <main>
      <h2 className="headline">Top airing</h2>
      <AnimeGrid animes={topAiring.data} />
      <h2 className="headline">Top upcoming</h2>
      <AnimeGrid animes={topUpcoming.data} />
      <h2 className="headline">Top popular</h2>
      <AnimeGrid animes={topPopular.data} />
      <h2 className="headline">Top favorite</h2>
      <AnimeGrid animes={topFavorite.data} />
    </main>
  );
}
