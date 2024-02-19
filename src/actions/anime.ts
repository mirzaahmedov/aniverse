import type {
  PaginationType,
  PaginationFullType,
  MultiResultsType,
  SingleResultType,
} from "@/types/response";
import type {
  AnimeType,
  AnimeFullType,
  AnimeCharacterType,
  AnimeStaffType,
  AnimeReviewType,
  AnimeEpisodeItemType,
  AnimeVideosType,
  AnimeStatsType,
  AnimeRecommendationType,
  AnimeTopQueryParamsType,
  AnimeSearchQueryParamsType,
} from "@/types/anime";
import api from "@/api";

export async function getAnimeSearch(
  params: Partial<Record<keyof AnimeSearchQueryParamsType, string>>,
) {
  if (Number(params.score) > 9.99) {
    params.score = String(9.99);
  }

  return await api.fetch<MultiResultsType<AnimeType, PaginationFullType>>(
    "/anime",
    params,
  );
}

export async function getTopAnime(
  params: Partial<Record<keyof AnimeTopQueryParamsType, string>>,
) {
  return await api.fetch<MultiResultsType<AnimeType, PaginationFullType>>(
    "/top/anime",
    params,
  );
}

export async function getAnimeFullById(id: number) {
  return await api.fetch<SingleResultType<AnimeFullType>>(`/anime/${id}/full`);
}

export async function getAnimeCharacters(id: number) {
  return await api.fetch<MultiResultsType<AnimeCharacterType, PaginationType>>(
    `/anime/${id}/characters`,
  );
}

export async function getAnimeStaff(id: number) {
  return await api.fetch<MultiResultsType<AnimeStaffType>>(
    `/anime/${id}/staff`,
  );
}

export async function getAnimeReviews(id: number, page: number = 1) {
  return await api.fetch<MultiResultsType<AnimeReviewType, PaginationType>>(
    `/anime/${id}/reviews`,
    { page: String(page) },
  );
}
export async function getAnimeEpisodes(id: number, page: number = 1) {
  return await api.fetch<
    MultiResultsType<AnimeEpisodeItemType, PaginationType>
  >(`/anime/${id}/episodes`, { page: String(page) });
}
export async function getAnimeVideos(id: number) {
  return await api.fetch<SingleResultType<AnimeVideosType>>(
    `/anime/${id}/videos`,
  );
}
export async function getAnimeStats(id: number) {
  return await api.fetch<SingleResultType<AnimeStatsType>>(
    `/anime/${id}/statistics`,
  );
}
export async function getAnimeRecommendations(id: number) {
  return await api.fetch<MultiResultsType<AnimeRecommendationType>>(
    `/anime/${id}/videos`,
  );
}
