import { AnimeTitleType } from "./anime";
import { AnimeCommonImagesType } from "./common";

export type ProducerType = {
  mal_id: number;
  url: string;
  titles: AnimeTitleType[];
  images: AnimeCommonImagesType;
  favorites: number;
  count: number;
  established: string | null;
  about: string | null;
};
