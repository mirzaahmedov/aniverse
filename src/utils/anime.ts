import type { AnimeTitleType } from "@/types/anime";

export function getAnimeTitle(titles: AnimeTitleType[], type: string) {
  let found = titles.find((t) => t.type === type);
  if (found) {
    return found.title;
  }

  found = titles.find((t) => t.type === "Default");
  if (found) {
    return found.title;
  }

  if (titles.length > 0) {
    return titles[0].title;
  }
  return "";
}
