import { AnimeTitleType } from "./anime";
import { CommonImagesType } from "./common";

export type ProducerType = {
  mal_id: number;
  url: string;
  titles: AnimeTitleType[];
  images: CommonImagesType;
  favorites: number;
  count: number;
  established: string | null;
  about: string | null;
};
