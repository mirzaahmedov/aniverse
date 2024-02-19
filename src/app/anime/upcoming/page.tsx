import AnimeGrid from "@/components/anime-grid";
import Pagination from "@/components/pagination";
import { getTopAnime } from "@/actions/anime";

type UpcomingProps = {
  searchParams: Record<string, string>;
};
async function Upcoming({ searchParams }: UpcomingProps) {
  const { page = "1" } = searchParams;
  const res = await getTopAnime({ filter: "upcoming", page: page });

  if (!res.ok) {
    throw new Error(res.message);
  }

  const { total, per_page } = res.result.pagination.items;
  const pageCount = Math.ceil(total / per_page);

  return (
    <div>
      <h4 className="sm-headline">{total} results</h4>
      <AnimeGrid anime={res.result.data} />
      <div className="py-20">
        <Pagination pageCount={pageCount} currentPage={parseInt(page)} />
      </div>
    </div>
  );
}

export default Upcoming;
