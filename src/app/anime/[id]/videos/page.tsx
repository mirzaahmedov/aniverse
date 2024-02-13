import { getAnimeVideos } from "@/actions/anime";
import Avatar from "@/components/avatar";

type VideosProps = {
  params: {
    id: number;
  };
};
async function Videos({ params }: VideosProps) {
  const { id } = params;
  const videos = await getAnimeVideos(id);

  return (
    <div>
      <h1>Promotions</h1>
      <ul>
        {Array.isArray(videos?.data.promo)
          ? videos.data.promo.map((p) => (
              <li key={p.trailer.youtube_id}>{p.title}</li>
            ))
          : null}
      </ul>
      <h1>Episodes</h1>
      <ul>
        {Array.isArray(videos?.data.episodes)
          ? videos.data.episodes.map((e) => <li key={e.mal_id}>{e.title}</li>)
          : null}
      </ul>
      <h1>Music Videos</h1>
      <ul>
        {Array.isArray(videos?.data.music_videos)
          ? videos.data.music_videos.map((m) => (
              <li key={m.title}>
                <h6>{m.title}</h6>
                <Avatar image={m.video.images.image_url} alt="image" />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Videos;
