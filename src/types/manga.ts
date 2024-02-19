import { AnimeFullType } from "./anime";
import {
  DateRangeType,
  MalURLType,
  RelationType,
  LinkType,
  ImageOptionsType,
  TitleType,
  CommonQueryParamsType,
} from "./common";

export type MangaOrderByType =
  | "mal_id"
  | "title"
  | "start_date"
  | "end_date"
  | "chapters"
  | "volumes"
  | "score"
  | "scored_by"
  | "rank"
  | "popularity"
  | "members"
  | "favorites";
export type MangaTypeType =
  | "manga"
  | "novel"
  | "lightnovel"
  | "oneshot"
  | "doujin"
  | "manhwa"
  | "manhua";
export type MangaStatusType =
  | "publishing"
  | "complete"
  | "hiatus"
  | "discontinued"
  | "upcoming";
export type MangaMediaType =
  | "Manga"
  | "Novel"
  | "Light Novel"
  | "One-shot"
  | "Doujinshi"
  | "Manhua"
  | "Manhwa"
  | "OEL";

export type MangaSearchQueryParamsType = CommonQueryParamsType & {
  type: MangaTypeType;
  status: MangaStatusType;
  order_by: MangaOrderByType;
  magazines: string;
};

export type MangaTopQueryParamsType = {
  type: MangaTypeType;
  filter: MangaStatusType;
  page: number;
  limit: number;
};

export type MnngaImagesType = {
  jpg: Pick<
    ImageOptionsType,
    "image_url" | "small_image_url" | "large_image_url"
  >;
  webp: Pick<
    ImageOptionsType,
    "image_url" | "small_image_url" | "large_image_url"
  >;
};
export type MangaFullType = {
  mal_id: number;
  url: string;
  images: MnngaImagesType;
  approved: boolean;
  titles: TitleType[];
  /** @deprecated use titles instead */
  title: string;
  /** @deprecated use titles instead */
  title_english: string | null;
  /** @deprecated use titles instead */
  title_japanese: string | null;
  /** @deprecated use titles instead */
  title_synonyms: string[] | null;
  type: MangaMediaType;
  chapters: number | null;
  volumes: number | null;
  status: MangaStatusType;
  publishing: boolean;
  published: DateRangeType;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  authors: MalURLType[];
  serializations: MalURLType[];
  genres: MalURLType[];
  explicit_genres: MalURLType[];
  themes: MalURLType[];
  demographics: MalURLType[];
  relations: RelationType[];
  external: LinkType[];
};
export type MangaType = Omit<
  AnimeFullType,
  "title_synonyms" | "external" | "relations"
>;
