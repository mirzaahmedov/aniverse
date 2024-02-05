import type { MultiResultsType } from "@/types/api";
import type {
  AnimeQueryParamsType,
  AnimeType,
  AnimeFullType,
} from "@/types/anime";
import axios from "axios";

export async function getAnimeSearch(
  params: AnimeQueryParamsType & {
    q: string;
    min_score?: number;
    max_score?: number;
  },
) {
  const q = params.q || "";
  const page = params.page || 1;
  const filter = params.filter || "airing";

  const { data } = await axios.get<MultiResultsType<AnimeType>>("/anime", {
    params: { page, filter, q },
  });
  return data;
}
export async function getTopAnime(params: AnimeQueryParamsType) {
  const page = params.page || 1;
  const filter = params.filter || "airing";

  const { data } = await axios.get<MultiResultsType<AnimeType>>("/top/anime", {
    params: { page, filter },
  });
  return data;
}
export async function getAnimeFullById(
  id: number,
  params: AnimeQueryParamsType,
) {
  const page = params.page || 1;
  const filter = params.filter || "airing";

  const { data } = await axios.get<MultiResultsType<AnimeFullType>>(
    `/anime/${id}/full`,
    {
      params: { page, filter },
    },
  );
  return data;
}
