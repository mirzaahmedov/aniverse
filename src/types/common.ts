export type DateType = {
  day: number | null;
  month: number | null;
  year: number | null;
};
export type DaterangeType = {
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
export type AnimeCommonImagesType = {
  jpg: {
    image_url: string | null;
  };
};
