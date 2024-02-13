import { getAnimeRecommendations } from "@/actions";
import Avatar from "@/components/avatar";

type RecommendationsProps = {
  params: {
    id: number;
  };
};
async function Recommendations({ params }: RecommendationsProps) {
  const { id } = params;
  const recommendations = await getAnimeRecommendations(id);

  return (
    <div>
      <ul>
        {recommendations.data.map((r) => (
          <li key={r.entry.mal_id}>
            <h6>{r.entry.title}</h6>
            <Avatar image={r.entry.images.jpg.image_url} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
