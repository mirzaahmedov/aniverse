import type { MultiResultsType } from "@/types/response";
import type { ProducerType } from "@/types/producer";
import api from "@/api";

export async function getAnimeProducers() {
  return await api.fetch<MultiResultsType<ProducerType>>("/producers");
}
