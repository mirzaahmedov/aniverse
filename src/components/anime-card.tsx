import type { AnimeType } from "@/types/anime";
import Link from "next/link";
import Image from "next/image";
import { getAnimeTitle } from "@/utils/anime";
import ScoreBadge from "./score-badge";

type AnimeCard = {
  anime: AnimeType;
};
function AnimeCard({ anime }: AnimeCard) {
  const { titles, images, score, members } = anime;

  return (
    <Link href={`/anime/${anime.mal_id}`} className="group">
      <div
        className="relative w-full pt-[145%] bg-gray-50 overflow-hidden rounded-lg 
                  group-hover:shadow-2xl group-hover:-translate-y-2 transition"
      >
        {images.webp?.large_image_url ? (
          <Image
            fill
            src={images.webp.large_image_url}
            alt={getAnimeTitle(titles, "English")}
            className="object-center object-cover"
          />
        ) : null}
      </div>
      <div className="mt-4 flex items-center justify-between">
        {score ? <ScoreBadge score={score} /> : null}
      </div>
      <h6 className="mt-2 text-xl text-gray-950 leading-tight">
        {getAnimeTitle(titles, "English")}
      </h6>
      <div className="mt-2 flex items-center justify-between">
        {members ? (
          <span className="text-sm text-gray-500">
            {Intl.NumberFormat().format(members)} members
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export default AnimeCard;
