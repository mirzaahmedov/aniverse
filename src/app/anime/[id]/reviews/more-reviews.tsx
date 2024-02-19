"use client";

import type { AnimeReviewType } from "@/types/anime";
import { useState } from "react";
import ReviewCard from "@/components/review-card";
import { getAnimeReviews } from "@/actions/anime";

type MoreReviewsProps = {
  id: number;
};
function MoreReviews({ id }: MoreReviewsProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(2);
  const [reviews, setReviews] = useState<AnimeReviewType[]>([]);
  const [isNextPageExists, setIsNextPageExists] = useState(true);

  const handleClickMore = () => {
    setIsLoading(true);
    getAnimeReviews(id, page)
      .then((res) => {
        if (res.ok) {
          setReviews((prev) => [...prev, ...res.result.data]);
          setIsNextPageExists(res.result.pagination.has_next_page);
          setPage((prev) => prev + 1);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <ul>
        {Array.isArray(reviews)
          ? reviews.map((r) => (
              <li key={r.mal_id} className="block pt-2.5">
                <ReviewCard review={r} />
              </li>
            ))
          : null}
      </ul>
      {isNextPageExists ? (
        <button disabled={isLoading} onClick={handleClickMore}>
          More
        </button>
      ) : null}
    </div>
  );
}

export default MoreReviews;
