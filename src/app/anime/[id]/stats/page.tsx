import { getAnimeStats } from "@/actions/anime";
type StatsProps = {
  params: {
    id: number;
  };
};
async function Stats({ params }: StatsProps) {
  const { id } = params;
  const stats = await getAnimeStats(id);

  return (
    <div>
      <ul>
        <li>Total {stats.data.total}</li>
        <li>Dropped {stats.data.dropped}</li>
        <li>On Hold {stats.data.on_hold}</li>
        <li>Watching {stats.data.watching}</li>
        <li>Completed {stats.data.completed}</li>
        <li>Plan to watch {stats.data.plan_to_watch}</li>
        <ul>
          {stats.data.scores.map((s) => (
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
