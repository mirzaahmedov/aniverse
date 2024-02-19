import Intro from "@/components/intro";
import Section from "./section";

export default function Home() {
  return (
    <div>
      <Intro />
      <Section headline="Top airing" filter="airing" />
      <Section headline="Top upcoming" filter="upcoming" />
      <Section headline="Popular" filter="bypopularity" />
      <Section headline="Favorite" filter="favorite" />
    </div>
  );
}
