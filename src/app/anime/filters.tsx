"use client";

import type { ProducerType } from "@/types/producer";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";
import DateField from "@/components/date-field";
import { getAnimeProducers } from "@/actions/producer";
import { getAnimeTitle } from "@/utils/anime";
import { animeScores, animeTypes, animeStatus } from "@/constants/anime";

function Filters() {
  const [producers, setProducers] = useState<ProducerType[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    getAnimeProducers().then((res) => {
      if (res.ok && Array.isArray(res.result.data)) {
        setProducers(res.result.data);
      }
    });
  }, []);

  return (
    <form
      className="flex flex-wrap justify-center items-center gap-10 py-20"
      action={(formData) => {
        const q = formData.get("q");
        const params = new URLSearchParams(searchParams);

        if (typeof q !== "string") {
          return;
        }

        const type = formData.get("type");
        const score = formData.get("score");
        const status = formData.get("status");
        const producers = formData.get("producers");

        const startMonth = formData.get("start-month");
        const startDate = formData.get("start-date");
        const startYear = formData.get("start-year");

        const endMonth = formData.get("end-month");
        const endDate = formData.get("end-date");
        const endYear = formData.get("end-year");

        if (type) {
          params.set("type", String(type));
        } else {
          params.delete("type");
        }
        if (score) {
          params.set("score", String(score));
        } else {
          params.delete("score");
        }
        if (status) {
          params.set("status", String(status));
        } else {
          params.delete("status");
        }
        if (producers) {
          params.set("producers", String(producers));
        } else {
          params.delete("producers");
        }

        const startValues = [startMonth, startDate, startYear].filter((v) => v);
        if (startValues.length) {
          params.set("start_date", startValues.join("-"));
        } else {
          params.delete("start_date");
        }
        const endValues = [endMonth, endDate, endYear].filter((v) => v);
        if (endValues.length) {
          params.set("end_date", endValues.join("-"));
        } else {
          params.delete("end_date");
        }

        params.set("q", q);
        params.set("page", "1");

        router.replace(`/anime?${params.toString()}`);
      }}
    >
      <div className="flex w-full max-w-2xl relative text-lg">
        <span className="absolute left-4 top-4">
          <MagnifyingGlassIcon className="h-8 text-gray-300" />
        </span>
        <input
          type="text"
          name="q"
          placeholder="Search..."
          className="flex-1 pl-16 pr-8 h-16 bg-white text-gray-700 rounded-l-xl shadow"
        />
        <button className="text-white bg-blue-500 h-16 px-8 rounded-r-xl shadow-md shadow-blue-300">
          Search
        </button>
      </div>
      <button
        type="button"
        className="text-gray-500"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <AdjustmentsVerticalIcon className="h-8" />
      </button>
      <div className="w-full">
        {isVisible ? (
          <fieldset className="flex flex-col">
            <legend>Filters</legend>
            <label>
              Type
              <select name="type">
                <option value="">Select type</option>
                {animeTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Score
              <select name="score">
                <option value="">Select score</option>
                {animeScores.map((s) => (
                  <option key={s[0]} value={s[0]}>
                    {s[1]}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Status
              <select name="status">
                <option value="">Select status</option>
                {animeStatus.map((s) => (
                  <option key={s[1]} value={s[1]}>
                    {s[0]}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Producer
              <select name="producers">
                <option value="">Select producer</option>
                {producers.map((p) => (
                  <option key={p.mal_id} value={p.mal_id}>
                    {getAnimeTitle(p.titles, "English")}
                  </option>
                ))}
              </select>
            </label>

            <span>
              Start date
              <DateField name="start" />
            </span>

            <span>
              End date
              <DateField name="end" />
            </span>
          </fieldset>
        ) : null}
      </div>
    </form>
  );
}
export default Filters;
