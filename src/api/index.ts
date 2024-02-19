import type { FetchResultType, ErrorResponseType } from "@/types/response";
import { isAbsoluteURL, isRequest } from "@/utils/api";
import { getErrorMessage } from "@/utils/error";

export const version = "v4";
export const baseURL = "https://api.jikan.moe/";

const api = {
  async fetch<
    T extends unknown,
    P extends Record<string, string> = Record<string, string>,
  >(
    input: URL | RequestInfo,
    params?: P,
    init?: RequestInit,
  ): Promise<FetchResultType<T>> {
    try {
      const search = new URLSearchParams(params).toString();

      switch (true) {
        case typeof input === "string":
          if (!isAbsoluteURL(input)) {
            input = new URL(`${version}${input}?${search}`, baseURL).toString();
          } else {
            input = new URL(`${input}?${search}`).toString();
          }
          break;
        case isRequest(input):
          if (!isAbsoluteURL(input.url)) {
            input = new Request(
              Object.assign(input, {
                url: new URL(
                  `${version}${input.url}?${search}`,
                  baseURL,
                ).toString(),
              }),
            );
          } else {
            input = new Request(
              Object.assign(input, {
                url: new URL(`${input.url}?${search}`).toString(),
              }),
            );
          }
          break;
      }

      const response = await fetch(input, init);

      if (!response.ok) {
        const error: ErrorResponseType = await response.json();
        throw new Error(error.message);
      }

      const data: T = await response.json();
      return { ok: true, result: data };
    } catch (error) {
      return { ok: false, message: getErrorMessage(error) };
    }
  },
};

export default api;
