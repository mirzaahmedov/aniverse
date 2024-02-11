import { twMerge } from "tailwind-merge";

type ScoreBadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  score: number;
};
function ScoreBadge({ score, ...props }: ScoreBadgeProps) {
  return (
    <span
      className={twMerge(
        "py-1 px-2.5 bg-blue-500 text-white text-sm font-medium rounded-full",
        props.className,
      )}
    >
      {score}
    </span>
  );
}

export default ScoreBadge;
