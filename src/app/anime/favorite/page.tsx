import { getTopAnime } from "@/actions";
import AnimeGrid from "@/components/anime-grid";
import Pagination from "@/components/pagination";

type FavoriteProps = {
  searchParams: Record<string, string>;
};
async function Favorite({ searchParams }: FavoriteProps) {
  const { page = "1" } = searchParams;
  const anime = await getTopAnime({
    filter: "favorite",
    page: parseInt(page),
  });

  const { total, per_page } = anime.pagination.items;
  const pageCount = Math.ceil(total / per_page);

  return (
    <div>
      <h4 className="sm-headline">{total} results</h4>
      {Array.isArray(anime?.data) ? <AnimeGrid animes={anime.data} /> : null}
      <div className="py-20">
        <Pagination pageCount={pageCount} currentPage={parseInt(page)} />
      </div>
    </div>
  );
}

export default Favorite;
