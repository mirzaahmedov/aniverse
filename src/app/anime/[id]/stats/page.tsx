import type { AnimePageProps } from "../types";
import { getAnimeStats } from "@/actions/anime";

async function Stats({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const res = await getAnimeStats(id);

  if (!res.ok) {
    throw new Error(res.message);
  }

  const {
    total,
    dropped,
    on_hold,
    watching,
    completed,
    plan_to_watch,
    scores,
  } = res.result.data;

  return (
    <div>
      <ul>
        <li>Total {total}</li>
        <li>Dropped {dropped}</li>
        <li>On Hold {on_hold}</li>
        <li>Watching {watching}</li>
        <li>Completed {completed}</li>
        <li>Plan to watch {plan_to_watch}</li>
        <ul>
          {scores.map((s) => (
            <li key={s.score}>
              <span>{s.score}</span> - <span>{s.votes} votes</span>{" "}
              <span>{s.percentage}%</span>
            </li>
          ))}
        </ul>
      </ul>
    </div>
  );
}

export default Stats;
