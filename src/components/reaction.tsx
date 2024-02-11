import type { AnimeReactionsType } from "@/types/anime";
import {
  DocumentCheckIcon,
  FaceSmileIcon,
  FaceFrownIcon,
  LightBulbIcon,
  HeartIcon,
  HandThumbUpIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

type ReactionType = Exclude<keyof AnimeReactionsType, "overall">;

const icons: {
  [key in ReactionType]: React.JSXElementConstructor<
    React.SVGAttributes<SVGElement>
  >;
} = {
  well_written: DocumentCheckIcon,
  funny: FaceSmileIcon,
  confusing: FaceFrownIcon,
  creative: SparklesIcon,
  nice: HandThumbUpIcon,
  love_it: HeartIcon,
  informative: LightBulbIcon,
};

const labels: {
  [key in ReactionType]: string;
} = {
  well_written: "Well-written",
  funny: "Funny",
  confusing: "Confusing",
  creative: "Creative",
  nice: "Nice",
  love_it: "Love it",
  informative: "Informative",
};

type ReactionProps = {
  kind: ReactionType;
  count: number;
};
function Reaction({ kind, count }: ReactionProps) {
  const Icon = icons[kind];
  return (
    <div className="inline-flex items-center px-2.5 py-2.5 gap-2.5 text-xs">
      {labels[kind]} <Icon className="h-4" /> {count}
    </div>
  );
}

export default Reaction;
