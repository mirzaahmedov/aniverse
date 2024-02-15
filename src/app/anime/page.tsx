import { getAnimeSearch } from "@/actions";
import AnimeGrid from "@/components/anime-grid";
import Pagination from "@/components/pagination";
import Filters from "./filters";

type AnimeProps = {
  searchParams: Record<string, string>;
};
async function Anime({ searchParams }: AnimeProps) {
  const {
    q = "naruto",
    page = "1",
    type,
    score,
    status,
    producers,
    start_date,
    end_date,
  } = searchParams;
  const anime = await getAnimeSearch({
    q,
    page: page,
    type,
    score,
    status,
    producers,
    start_date,
    end_date,
  });

  console.log(anime);

  const { total, per_page } = anime.pagination.items;
  const pageCount = Math.ceil(total / per_page);

  return (
    <div>
      <Filters />
      <h4 className="sm-headline">{total} results</h4>
      {Array.isArray(anime?.data) ? <AnimeGrid animes={anime.data} /> : null}
      <div className="py-20">
        <Pagination pageCount={pageCount} currentPage={parseInt(page)} />
      </div>
    </div>
  );
}

export default Anime;
