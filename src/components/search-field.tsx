"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";

function SearchField() {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <form
      className="relative"
      action={(formData) => {
        const q = formData.get("q");
        const params = new URLSearchParams(searchParams);

        if (typeof q !== "string") {
          return;
        }
        params.set("q", q);
        params.set("page", "1");
        router.replace(`/anime?${params.toString()}`);
      }}
    >
      <input
        placeholder="Search..."
        type="text"
        name="q"
        spellCheck={false}
        className="h-14 pl-14 pr-4 bg-gray-50 text-base text-gray-500 rounded-2xl outline-blue-400 focus:shadow-md shadow-blue-400"
      />
      <span className="block absolute left-4 top-4 text-gray-400">
        <MagnifyingGlassIcon className="h-6" />
      </span>
    </form>
  );
}

export default SearchField;
