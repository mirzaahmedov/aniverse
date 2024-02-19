import type { AnimePageProps } from "../types";
import MoreEpisodes from "./more-episodes";
import { getAnimeEpisodes } from "@/actions/anime";

async function Episodes({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeEpisodes(id);

  if (!res.ok) {
    throw new Error(res.message);
  }

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left"></th>
            <th className="text-left">Title</th>
            <th className="text-left"></th>
            <th className="text-left"></th>
            <th className="text-left">Aired</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(res.result.data)
            ? res.result.data.map((a, i) => (
                <tr key={a.mal_id}>
                  <td>{i + 1}</td>
                  <td>{a.title}</td>
                  <td>{a.filler ? "Filler" : null}</td>
                  <td>{a.recap ? "Recap" : null}</td>
                  <td>
                    {a.aired ? new Date(a.aired).toLocaleDateString() : null}
                  </td>
                </tr>
              ))
            : null}
          {res.result.pagination.has_next_page ? (
            <MoreEpisodes id={id} offset={res.result.data.length} />
          ) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;
