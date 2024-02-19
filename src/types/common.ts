export type DateType = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type DateRangeType = {
  from: string | null;
  to: string | null;
  props: {
    from: DateType;
    to: DateType;
    string: string | null;
  };
};
export type MalURLType = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
export type RelationType = {
  relation: string;
  entry: MalURLType[];
};
export type LinkType = {
  name: string;
  url: string;
};
export type TitleType = {
  type: string;
  title: string;
};
export type PersonType = {
  mal_id: number;
  url: string;
  images: CommonImagesType;
  name: string;
};
export type ImageOptionsType = {
  small_image_url: string | null;
  image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
};
export type CommonImagesType = {
  jpg: Pick<ImageOptionsType, "image_url">;
};

export type SortType = "desc" | "asc";
export type CommonQueryParamsType = {
  sfw: boolean;
  unapproved: boolean;
  page: number;
  limit: number;
  q: string;
  score: number;
  min_score: number;
  max_score: number;
  genres: string;
  genres_exclude: string;
  start_date: string;
  end_date: string;
  sort: SortType;
  letter: string;
};
