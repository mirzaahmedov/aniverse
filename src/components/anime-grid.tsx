import type { AnimeType } from "@/types/anime";
import { Fragment } from "react";
import AnimeCard from "./anime-card";

type AnimeGridProps = {
  animes: AnimeType[];
};
function AnimeGrid({ animes }: AnimeGridProps) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {animes.map((a) => (
        <Fragment key={a.mal_id}>
          <AnimeCard anime={a} />
        </Fragment>
      ))}
    </div>
  );
}

export default AnimeGrid;
