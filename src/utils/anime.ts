import type { AnimeTitleType } from "@/types/anime";

export function getAnimeTitle(titles: AnimeTitleType[], type: string) {
  const found = titles.find((t) => t.type === type);
  if (found === undefined) {
    return "";
  }
  return found.title;
}
