import type {
  DaterangeType,
  MalURLType,
  RelationType,
  LinkType,
} from "./common";

export type AnimeQueryParamsTypeType =
  | "tv"
  | "movie"
  | "ova"
  | "special"
  | "ona"
  | "music"
  | "cm"
  | "pv"
  | "tv_special";
export type AnimeQueryParamsFilterType =
  | "airing"
  | "upcoming"
  | "bypopularity"
  | "favorite";
export type AnimeQueryParamsRatingType =
  | "g"
  | "pg"
  | "pg13"
  | "r17"
  | "r"
  | "rx";

export type AnimeQueryParamsType = {
  type?: AnimeQueryParamsTypeType;
  filter?: AnimeQueryParamsFilterType;
  rating?: AnimeQueryParamsRatingType;
  sfw?: boolean;
  page?: number;
  limit?: number;
};

export type AnimeSeasonType = "summer" | "winter" | "spring" | "fall";
export type AnimeImagesType = {
  jpg: {
    image_url: string | null;
    small_image_url: string | null;
    large_image_url: string | null;
  };
  webp: {
    image_url: string | null;
    small_image_url: string | null;
    large_image_url: string | null;
  };
};

export type AnimeTrailerImagesType = {
  image_url: string | null;
  small_image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
};
export type AnimeTrailerBaseType = {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
};
export type AnimeTrailerType = {
  images: AnimeTrailerImagesType;
};

export type AnimeTitleType = {
  type: string;
  title: string;
};
export type AnimeTypeType =
  | "TV"
  | "OVA"
  | "Movie"
  | "Special"
  | "ONA"
  | "Music";
export type AnimeStatusType =
  | "Finished Airing"
  | "Currently Airing"
  | "Not yet aired";
export type AnimeRatingType =
  | "G - All Ages"
  | "PG - Children"
  | "PG-13 - Teens 13 or older"
  | "R - 17+ (violence & profanity)"
  | "R+ - Mild Nudity"
  | "Rx - Hentai";
export type AnimeBroadcastType = {
  day: string | null;
  time: string | null;
  timezone: string | null;
  string: string | null;
};
export type AnimeThemeType = {
  openings: string[];
  endings: string[];
};

export type AnimeFullType = {
  mal_id: number;
  url: string;
  images: AnimeImagesType;
  trailer: AnimeTrailerBaseType;
  approved: boolean;
  titles: AnimeTitleType[];
  /** @deprecated use titles instead */
  title: string;
  /** @deprecated use titles instead */
  title_english: string | null;
  /** @deprecated use titles instead */
  title_japanese: string | null;
  /** @deprecated use titles instead */
  title_synonyms: string[] | null;
  type: AnimeTypeType | null;
  source: string | null;
  episodes: number | null;
  status: AnimeStatusType | null;
  airing: boolean;
  aired: DaterangeType;
  duration: string | null;
  rating: AnimeRatingType | null;
  score: number | null;
  scored_by: number | null;
  rank: number | null;
  popularity: number | null;
  members: number | null;
  favorites: number | null;
  synopsis: string | null;
  background: string | null;
  season: AnimeSeasonType | null;
  year: number | null;
  broadcast: AnimeBroadcastType;
  producers: MalURLType[];
  licensors: MalURLType[];
  studios: MalURLType[];
  genres: MalURLType[];
  explicit_genres: MalURLType[];
  themes: MalURLType[];
  demographics: MalURLType[];
  relations: RelationType[];
  theme: AnimeThemeType;
  external: LinkType[];
  streaming: LinkType[];
};
export type AnimeType = Omit<
  AnimeFullType,
  "relations" | "theme" | "external" | "streaming"
>;

export type AnimeCharacterImagesType = {
  [field in keyof AnimeImagesType]: Omit<
    AnimeImagesType[field],
    "large_image_url"
  >;
};
export type PeopleImagesType = {
  jpg: {
    image_url: AnimeCharacterImagesType["jpg"]["image_url"];
  };
};

export type PersonType = {
  mal_id: number;
  url: string;
  images: PeopleImagesType;
  name: string;
};

export type AnimeCharacterType = {
  character: {
    mal_id: number;
    url: string;
    images: AnimeCharacterImagesType;
    name: string;
  };
  role: string;
  voice_actors: Array<{
    person: PersonType;
    language: string;
  }>;
};

export type AnimeStaffType = {
  person: PersonType;
  positions: string[];
};

type UserImagesType = {
  [key in keyof AnimeImagesType]: Omit<
    AnimeImagesType[key],
    "small_image_url" | "large_image_url"
  >;
};
type UserMetaType = {
  username: string;
  url: string;
  images: UserImagesType;
};
export type AnimeReactionsType = {
  overall: number;
  nice: number;
  love_it: number;
  funny: number;
  confusing: number;
  informative: number;
  well_written: number;
  creative: number;
};
export type AnimeReviewType = {
  user: UserMetaType;
  mal_id: string;
  url: string;
  type: string;
  reactions: AnimeReactionsType;
  date: string;
  review: string;
  score: number;
  tags: string[];
  is_spoiler: boolean;
  is_preliminary: boolean;
  episodes_watched: number;
};
export type AnimeEpisodeType = {
  mal_id: number;
  url: string | null;
  title: string;
  title_japanese: string | null;
  title_romanji: string | null;
  duration: number | null;
  aired: string | null;
  filler: boolean;
  recap: boolean;
  synopsis: string | null;
};
export type AnimeEpisodeItemType = Omit<AnimeEpisodeType, "synopsis"> & {
  forum_url: string | null;
};

export type AnimePromoVideoType = {
  title: "string";
  trailer: AnimeTrailerBaseType;
};
export type AnimeCommonImagesType = {
  jpg: {
    image_url: string | null;
  };
};
export type AnimeEpisodeVideoType = {
  mal_id: number;
  url: "string";
  title: "string";
  episode: "string";
  images: AnimeCommonImagesType;
};
export type AnimeMusicVideoType = {
  title: string;
  video: AnimeTrailerType;
  meta: {
    title: string | null;
    author: string | null;
  };
};
export type AnimeVideosType = {
  promo: AnimePromoVideoType[];
  episodes: AnimeEpisodeVideoType[];
  music_videos: AnimeMusicVideoType[];
};
export type AnimeStatsType = {
  watching: number;
  completed: number;
  on_hold: number;
  dropped: number;
  plan_to_watch: number;
  total: number;
  scores: Array<{
    score: number;
    votes: number;
    percentage: number;
  }>;
};

export type CommonMetaType = {
  mal_id: number;
  url: string;
  title: string;
};
export type AnimeMetaType = CommonMetaType & {
  images: AnimeImagesType;
};
export type MangaMetaType = AnimeMetaType;
export type AnimeRecommendationType = {
  entry: AnimeMetaType | MangaMetaType;
};
