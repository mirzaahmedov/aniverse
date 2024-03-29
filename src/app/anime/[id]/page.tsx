import type { AnimePageProps } from "./types";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";
import LinksList from "@/components/links-list";
import ReviewCard from "@/components/review-card";
import CharacterCard from "@/components/character-card";
import {
  getAnimeFullById,
  getAnimeCharacters,
  getAnimeReviews,
} from "@/actions/anime";
import { getAnimeTitle } from "@/utils/anime";

async function AnimeDetails({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeFullById(id);
  const characters = await getAnimeCharacters(id);
  const reviews = await getAnimeReviews(id);

  if (!res.ok) {
    throw new Error(res.message);
  }

  const {
    titles,
    images,
    score,
    scored_by,
    rank,
    popularity,
    members,
    season,
    year,
    studios,
    synopsis,
    background,
    type,
    source,
    episodes,
    status,
    genres,
    producers,
    streaming,
    relations,
    demographics,
  } = res.result.data;

  return (
    <div className="mt-10">
      <div className="flex gap-20">
        <div className="max-w-72">
          <div className="relative w-72 h-[26rem] shadow-2xl">
            {images.webp?.large_image_url ? (
              <Image
                fill
                src={images.webp.large_image_url}
                alt={titles[0].title}
              />
            ) : null}
          </div>
          <div className="mt-20">
            <h4 className="sm-headline">Alternative titles</h4>
            <ul>
              {titles.map((t) => (
                <li key={t.type} className="pt-2.5">
                  <span>{t.type}</span>
                  <span className="float-end">{t.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-20">
            <h4 className="sm-headline">Information</h4>
            <ul>
              <li className="pt-2.5">
                <span>Type</span>
                <span className="float-end">{type}</span>
              </li>
              <li className="pt-2.5">
                <span>Episodes</span>
                <span className="float-end">{episodes}</span>
              </li>
              <li className="pt-2.5">
                <span>Status</span>
                <span className="float-end">{status}</span>
              </li>
              <li className="pt-2.5">
                <span>Studios</span>
                <span className="float-end">
                  <LinksList list={studios} />
                </span>
              </li>
              <li className="pt-2.5">
                <span>Genres</span>
                <span className="float-end">
                  <LinksList list={genres} />
                </span>
              </li>
              <li className="pt-2.5">
                <span>Producers</span>
                <span className="float-end text-right pb-2.5">
                  <LinksList list={producers} />
                </span>
              </li>
              <li className="pt-2.5">
                <span>Demographic</span>
                <span className="float-end">
                  <LinksList list={demographics} />
                </span>
              </li>
              <li className="pt-2.5">
                <span>Source</span>
                <span className="float-end">{source}</span>
              </li>
            </ul>
          </div>
          <div className="mt-20">
            <h4 className="sm-headline">Streaming platforms</h4>
            <ul>
              {streaming.map((e) => (
                <li key={e.name} className="pb-2.5">
                  <Link href={e.url ? e.url : ""}>{e.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl">
            <span>{getAnimeTitle(titles, "English")}</span>
            <span> - </span>
            <span>{getAnimeTitle(titles, "Japanese")}</span>
          </h1>
          <div className="py-10 flex flex-wrap items-center gap-20">
            {score ? (
              <div className="inline-flex flex-col items-center text-center gap-2">
                <span className="uppercase bg-blue-500 px-4 py-0.5 text-sm text-white rounded-full">
                  score
                </span>
                <span className="text-5xl">{score}</span>
                {scored_by ? (
                  <span className="flex items-center gap-1 text-sm text-gray-700">
                    {Intl.NumberFormat().format(scored_by)}
                    <UserIcon className="h-4" />
                  </span>
                ) : null}
              </div>
            ) : null}
            <div>
              <div className="flex flex-wrap items-center gap-10">
                {rank ? (
                  <span className="text-xl">
                    Ranked <b>#{Intl.NumberFormat().format(rank)}</b>
                  </span>
                ) : null}
                {popularity ? (
                  <span className="text-xl">
                    Popularity <b>#{Intl.NumberFormat().format(popularity)}</b>
                  </span>
                ) : null}
                {members ? (
                  <span className="text-xl">
                    Members <b>{Intl.NumberFormat().format(members)}</b>
                  </span>
                ) : null}
              </div>
              <div className="flex mt-2 divide-x text-sm text-blue-500">
                {season ? (
                  <Link href="#" className="first-letter:uppercase pr-5">
                    {season} {year}
                  </Link>
                ) : null}
                {type ? (
                  <Link href="#" className="px-5">
                    {type}
                  </Link>
                ) : null}
                {Array.isArray(studios) ? (
                  <Link href="#" className="px-5">
                    {studios.map((s) => s.name).join(",")}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div>
            <h4 className="sm-headline">Synopsis</h4>
            <p>{synopsis}</p>
          </div>
          <div>
            <h4 className="sm-headline">Background</h4>
            <p>{background}</p>
          </div>
          <div>
            <h4 className="sm-headline">Related</h4>
            <ul>
              {relations.map((r) => (
                <li key={r.relation} className="pt-2.5">
                  <span>{r.relation}</span>
                  <span className="float-end">
                    <LinksList list={r.entry} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="sm-headline">Characters & Voice Actors</h4>
            <ul className="grid grid-cols-2 gap-10">
              {characters.ok && Array.isArray(characters.result.data)
                ? characters.result.data.slice(0, 10).map((ch) => (
                    <li key={ch.character.mal_id} className="block pt-2.5">
                      <CharacterCard character={ch} />
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div>
            <h4 className="sm-headline">Reviews</h4>
            <ul>
              {reviews.ok && Array.isArray(reviews.result.data)
                ? reviews.result.data.slice(0, 10).map((r) => (
                    <li key={r.mal_id} className="block pt-2.5">
                      <ReviewCard review={r} />
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeDetails;
