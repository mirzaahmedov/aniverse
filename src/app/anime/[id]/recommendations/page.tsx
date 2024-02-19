import type { AnimePageProps } from "../types";
import Avatar from "@/components/avatar";
import { getAnimeRecommendations } from "@/actions/anime";

async function Recommendations({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeRecommendations(id);

  return (
    <div>
      <ul>
        {res.ok && Array.isArray(res?.result?.data)
          ? res.result.data.map((r) => (
              <li key={r.entry.mal_id}>
                <h6>{r.entry.title}</h6>
                <Avatar image={r.entry.images.jpg.image_url} alt="image" />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Recommendations;
