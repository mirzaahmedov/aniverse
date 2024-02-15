import type { MultiResultsType } from "@/types/api";
import type { ProducerType } from "@/types/producer";
import { baseURL } from "./constants";

export async function getAnimeProducers() {
  const response = await fetch(`${baseURL}/producers`);
  const data: MultiResultsType<ProducerType> = await response.json();
  return data;
}
