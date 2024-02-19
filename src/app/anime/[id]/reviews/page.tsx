import type { AnimePageProps } from "../types";
import ReviewCard from "@/components/review-card";
import MoreReviews from "./more-reviews";
import { getAnimeReviews } from "@/actions/anime";

async function Reviews({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeReviews(id);

  if (!res.ok) {
    throw new Error(res.message);
  }

  return (
    <div>
      <h4 className="sm-headline">Reviews</h4>
      <ul>
        {Array.isArray(res.result.data)
          ? res.result.data.map((r) => (
              <li key={r.mal_id} className="block pt-2.5">
                <ReviewCard review={r} />
              </li>
            ))
          : null}
      </ul>
      {res.result.pagination.has_next_page ? <MoreReviews id={id} /> : null}
    </div>
  );
}

export default Reviews;
