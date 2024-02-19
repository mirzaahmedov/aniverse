"use client";

import type { AnimeEpisodeItemType } from "@/types/anime";
import { getAnimeEpisodes } from "@/actions/anime";
import { useState } from "react";

type MoreEpisodesProps = {
  id: number;
  offset: number;
};
function MoreEpisodes({ id, offset = 0 }: MoreEpisodesProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [episodes, setEpisodes] = useState<AnimeEpisodeItemType[]>([]);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

  const handleClickMore = () => {
    setIsLoading(true);
    getAnimeEpisodes(id, page)
      .then((res) => {
        if (res.ok) {
          setEpisodes((prev) => [...prev, ...res.result.data]);
          setIsNextPageExists(res.result.pagination.has_next_page);
          setPage((prev) => prev + 1);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {Array.isArray(episodes)
        ? episodes.map((a, i) => (
            <tr key={a.mal_id}>
              <td>{offset + i + 1}</td>
              <td>{a.title}</td>
              <td>{a.filler ? "Filler" : null}</td>
              <td>{a.recap ? "Recap" : null}</td>
              <td>{a.aired ? new Date(a.aired).toLocaleDateString() : null}</td>
            </tr>
          ))
        : null}
      {isNextPageExists ? (
        <button disabled={isLoading} onClick={handleClickMore}>
          More
        </button>
      ) : null}
    </>
  );
}

export default MoreEpisodes;
