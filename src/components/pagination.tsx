"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { twMerge } from "tailwind-merge";

type PaginationProps = {
  pageCount: number;
  currentPage: number;
};
function Pagination({ pageCount, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      <li>
        <Link
          aria-disabled={currentPage - 1 <= 0}
          href={`${pathname}?${getNewSearchParams(currentPage - 1, searchParams)}`}
          className={twMerge(
            "inline-flex items-center justify-center w-10 h-10 rounded-full",
            currentPage - 1 <= 0 && "opacity-50 pointer-events-none",
          )}
        >
          <ArrowLeftIcon className="h-6" />
        </Link>
      </li>
      {getPaginationItems(pageCount, currentPage).map((page) => (
        <li key={page}>
          {page === "..." ? (
            page
          ) : (
            <Link
              href={`${pathname}?${getNewSearchParams(page, searchParams)}`}
              className={twMerge(
                "inline-block text-center leading-10 w-10 h-10 rounded-full",
                currentPage === page &&
                  "text-gray-500 bg-gray-100 pointer-events-none",
              )}
            >
              {page}
            </Link>
          )}
        </li>
      ))}
      <li>
        <Link
          aria-disabled={currentPage + 1 > pageCount}
          href={`${pathname}?${getNewSearchParams(currentPage + 1, searchParams)}`}
          className={twMerge(
            "inline-flex items-center justify-center w-10 h-10 rounded-full",
            currentPage + 1 > pageCount && "opacity-50 pointer-events-none",
          )}
        >
          <ArrowRightIcon className="h-6" />
        </Link>
      </li>
    </ul>
  );
}
function getPaginationItems(pageCount: number, currentPage: number) {
  let pages: Array<"..." | number> = [];

  if (0 < pageCount && pageCount <= 7) {
    pages = seq(1, pageCount);
  }

  if (7 < pageCount) {
    const leftPagesEnd = Math.min(2, pageCount);
    pages = seq(1, leftPagesEnd);

    const middlePagesStart = Math.max(currentPage - 1, leftPagesEnd + 1);
    const middlePagesEnd = Math.min(currentPage + 1, pageCount);

    if (leftPagesEnd + 1 < middlePagesStart) {
      pages.push("...");
    }

    pages = pages.concat(
      seq(middlePagesStart, middlePagesEnd - middlePagesStart + 1),
    );
    if (middlePagesEnd + 1 > pageCount) {
      return pages;
    }

    const rightPagesStart = Math.max(pageCount - 1, middlePagesEnd + 1);

    if (middlePagesEnd + 1 < rightPagesStart) {
      pages.push("...");
    }

    pages = pages.concat(seq(rightPagesStart, pageCount - rightPagesStart + 1));
  }

  return pages;
}
function seq(start: number, len: number) {
  return Array(len)
    .fill(start)
    .map((val, i) => val + i);
}
function getNewSearchParams(page: number, searchParams: URLSearchParams) {
  const params = new URLSearchParams(searchParams);
  params.set("page", String(page));
  return params.toString();
}

export default Pagination;
