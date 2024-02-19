import type { MalURLType } from "@/types/common";
import Link from "next/link";

type LinksListProps = {
  list: MalURLType[];
};
function LinksList({ list }: LinksListProps) {
  return list.map((item, i) => (
    <Link key={item.mal_id} href={typeof item.url === "string" ? item.url : ""}>
      {item.name}
      {i !== list.length - 1 ? "," : null}
    </Link>
  ));
}

export default LinksList;
