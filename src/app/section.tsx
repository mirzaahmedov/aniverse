import type { AnimeQueryParamsFilterType } from "@/types/anime";
import Link from "next/link";
import AnimeGrid from "@/components/anime-grid";
import { getTopAnime } from "@/actions/anime";

type SectionProps = {
  headline: string;
  filter: AnimeQueryParamsFilterType;
};
async function Section({ headline, filter }: SectionProps) {
  const res = await getTopAnime({ filter: filter, limit: "12" });

  if (!res.ok) {
    return (
      <div>
        <h4>{res.message}</h4>
      </div>
    );
  }

  return (
    <>
      <h2 className="headline">
        {headline}
        <Link href={`/anime/${filter}`} className="text-base float-end">
          More
        </Link>
      </h2>
      <AnimeGrid anime={res.result.data} />
    </>
  );
}

export default Section;
