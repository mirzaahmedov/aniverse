import type { MultiResultsType, SingleResultType } from "@/types/api";
import type {
  AnimeQueryParamsType,
  AnimeType,
  AnimeFullType,
  AnimeCharacterType,
  AnimeStaffType,
  AnimeReviewType,
  AnimeEpisodeItemType,
  AnimeVideosType,
  AnimeStatsType,
  AnimeRecommendationType,
} from "@/types/anime";
import { baseURL } from "./constants";

export async function getAnimeSearch(
  params: AnimeQueryParamsType & {
    q: string;
    min_score?: number;
    max_score?: number;
  },
) {
  const q = encodeURIComponent(params.q || "");
  const page = encodeURIComponent(params.page || 1);
  const limit = encodeURIComponent(params.limit || 12);

  const response = await fetch(
    `${baseURL}/anime?q=${q}&page=${page}&limit=${limit}`,
  );
  const data = await response.json();
  return data;
}
export async function getTopAnime(params: AnimeQueryParamsType) {
  const page = encodeURIComponent(params.page || 1);
  const limit = encodeURIComponent(params.limit || 12);
  const filter = encodeURIComponent(params.filter || "airing");

  const response = await fetch(
    `${baseURL}/top/anime?filter=${filter}&page=${page}&limit=${limit}`,
  );
  const data: MultiResultsType<AnimeType> = await response.json();
  return data;
}
export async function getAnimeFullById(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/full`);
  const data: SingleResultType<AnimeFullType> = await response.json();
  return data;
}
export async function getAnimeCharacters(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/characters`);
  const data: MultiResultsType<AnimeCharacterType> = await response.json();
  return data;
}
export async function getAnimeStaff(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/staff`);
  const data: MultiResultsType<AnimeStaffType> = await response.json();
  return data;
}
export async function getAnimeReviews(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/reviews`);
  const data: MultiResultsType<AnimeReviewType> = await response.json();
  return data;
}
export async function getAnimeEpisodes(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/episodes`);
  const data: MultiResultsType<AnimeEpisodeItemType> = await response.json();
  return data;
}
export async function getAnimeVideos(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/videos`);
  const data: SingleResultType<AnimeVideosType> = await response.json();
  return data;
}
export async function getAnimeStats(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/statistics`);
  const data: SingleResultType<AnimeStatsType> = await response.json();
  return data;
}
export async function getAnimeRecommendations(id: number) {
  const response = await fetch(`${baseURL}/anime/${id}/videos`);
  const data: MultiResultsType<AnimeRecommendationType> = await response.json();
  return data;
}
