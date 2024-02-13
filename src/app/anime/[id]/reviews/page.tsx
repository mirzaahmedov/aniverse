import { getAnimeReviews } from "@/actions";
import ReviewCard from "@/components/review-card";

type ReviewsProps = {
  params: {
    id: number;
  };
};
async function Reviews({ params }: ReviewsProps) {
  const { id } = params;
  const reviews = await getAnimeReviews(id);

  return (
    <div>
      <h4 className="sm-headline">Reviews</h4>
      <ul>
        {Array.isArray(reviews.data)
          ? reviews.data.slice(0, 10).map((r) => (
              <li key={r.mal_id} className="block pt-2.5">
                <ReviewCard review={r} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Reviews;
