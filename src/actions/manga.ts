import type {
  MangaType,
  MangaFullType,
  MangaTopQueryParamsType,
  MangaSearchQueryParamsType,
} from "@/types/manga";
import api from "@/api";
import {
  MultiResultsType,
  PaginationFullType,
  SingleResultType,
} from "@/types/response";

export async function getMangaSearch(
  params: Record<keyof MangaSearchQueryParamsType, string>,
) {
  return await api.fetch<MultiResultsType<MangaType, PaginationFullType>>(
    "/manga",
    params,
  );
}

export async function getTopManga(
  params: Record<keyof MangaTopQueryParamsType, string>,
) {
  return await api.fetch<MultiResultsType<MangaType, PaginationFullType>>(
    "/top/manga",
    params,
  );
}

export async function getMangaFullById(id: number) {
  return await api.fetch<SingleResultType<MangaFullType>>(`/manga/${id}/full`);
}
