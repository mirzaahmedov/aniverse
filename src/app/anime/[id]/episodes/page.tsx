import { getAnimeEpisodes } from "@/actions";

type EpisodesProps = {
  params: {
    id: number;
  };
};
async function Episodes({ params }: EpisodesProps) {
  const { id } = params;
  const episodes = await getAnimeEpisodes(id);

  return (
    <div>
      <ul>
        {Array.isArray(episodes?.data)
          ? episodes.data.map((a) => (
              <li key={a.mal_id}>
                {String(a.filler)}
                {a.title}
                {a.duration}
                {a.aired ? new Date(a.aired).toLocaleDateString() : null}
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Episodes;
