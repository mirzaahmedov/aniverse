import type { AnimePageProps } from "../types";
import Image from "next/image";
import { getAnimeVideos } from "@/actions/anime";

async function Videos({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeVideos(id);

  if (!res.ok) {
    return new Error(res.message);
  }

  return (
    <div className="flex flex-col gap-10 divide-y">
      <h1>Promotions</h1>
      <div className="grid grid-cols-6 gap-2">
        {Array.isArray(res?.result.data.promo)
          ? res.result.data.promo.map((p) => (
              <div key={p.trailer.youtube_id} className="w-full">
                {p.trailer.images.medium_image_url ? (
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      fill
                      src={p.trailer.images.medium_image_url}
                      alt={p.title}
                      className="object-center object-cover"
                    />
                  </div>
                ) : null}
                <h4>{p.title}</h4>
              </div>
            ))
          : null}
      </div>
      <h1>Episodes</h1>
      <div className="grid grid-cols-6 gap-2">
        {Array.isArray(res?.result.data.episodes)
          ? res.result.data.episodes.map((e) => (
              <div key={e.mal_id}>
                {e.images.jpg.image_url ? (
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      fill
                      src={e.images.jpg.image_url}
                      alt={e.title}
                      className="object-center object-cover"
                    />
                  </div>
                ) : null}
                <h4>{e.title}</h4>
              </div>
            ))
          : null}
      </div>
      <h1>Music Videos</h1>
      <div className="grid grid-cols-6">
        {Array.isArray(res?.result.data.music_videos)
          ? res.result.data.music_videos.map((m) => (
              <div key={m.title}>
                <h6>{m.title}</h6>
                {m.video.images.medium_image_url ? (
                  <div className="relative w-full pt-[56.25%]">
                    <Image
                      fill
                      src={m.video.images.medium_image_url}
                      alt={m.title}
                      className="object-center object-cover"
                    />
                  </div>
                ) : null}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Videos;
