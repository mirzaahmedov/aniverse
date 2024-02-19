import AnimeGrid from "@/components/anime-grid";
import Pagination from "@/components/pagination";
import Filters from "./filters";
import { getAnimeSearch } from "@/actions/anime";

type AnimeProps = {
  searchParams: Record<string, string>;
};
async function Anime({ searchParams }: AnimeProps) {
  const res = await getAnimeSearch(omitEmptyParams(searchParams));

  if (!res.ok) {
    throw new Error(res.message);
  }

  const { page = "1" } = searchParams;
  const { total, per_page } = res.result.pagination.items;
  const pageCount = Math.ceil(total / per_page);

  return (
    <div>
      <Filters />
      <h4 className="sm-headline">{total} results</h4>
      <AnimeGrid anime={res.result.data} />
      <div className="py-20">
        <Pagination pageCount={pageCount} currentPage={parseInt(page)} />
      </div>
    </div>
  );
}
function omitEmptyParams<T extends Record<string, string>>(params: T): T {
  const result: Record<string, string> = {};
  Object.keys(params).map((k) => {
    if (params[k]) {
      result[k] = params[k];
    }
  });
  return result as T;
}

export default Anime;
