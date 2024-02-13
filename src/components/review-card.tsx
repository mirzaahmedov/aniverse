import type { AnimeReviewType } from "@/types/anime";
import { twMerge } from "tailwind-merge";
import Avatar from "@/components/avatar";
import Reaction from "@/components/reaction";

type ReviewCardType = React.HTMLAttributes<HTMLDivElement> & {
  review: AnimeReviewType;
};
function ReviewCard({ review, ...props }: ReviewCardType) {
  const { user, review: content, reactions } = review;
  return (
    <div
      className={twMerge("flex gap-5 p-5 bg-white rounded-xl", props.className)}
    >
      <Avatar
        image={user.images.webp.image_url}
        alt={user.username}
        className="flex-shrink-0"
      />
      <div className="flex-1">
        <h6 className="font-semibold">{user.username}</h6>
        <div className="mt-2.5">
          {content.length < 100 ? (
            <p>content</p>
          ) : (
            <details className="collapsible text-sm text-gray-700">
              <summary>
                <span>
                  {content.slice(0, 100)} <br />
                </span>
              </summary>
              {content}
            </details>
          )}
        </div>
        <ul className="flex flex-wrap py-5 gap-x-5 text-gray-500">
          {(Object.keys(reactions) as (keyof typeof reactions)[]).map((r) =>
            r === "overall" || reactions[r] === 0 ? null : (
              <li key={r}>
                <Reaction kind={r} count={reactions[r]} />
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}

export default ReviewCard;
