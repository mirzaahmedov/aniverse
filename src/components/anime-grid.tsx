import type { AnimeType } from "@/types/anime";
import { Fragment } from "react";
import AnimeCard from "./anime-card";

type AnimeGridProps = {
  anime: AnimeType[];
};
function AnimeGrid({ anime }: AnimeGridProps) {
  return (
    <div className="grid grid-cols-4 gap-10">
      {Array.isArray(anime)
        ? anime.map((a) => (
            <Fragment key={a.mal_id}>
              <AnimeCard anime={a} />
            </Fragment>
          ))
        : null}
    </div>
  );
}

export default AnimeGrid;
