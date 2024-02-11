import type { AnimeStaffType } from "@/types/anime";
import Avatar from "./avatar";

type StaffCardProps = {
  staff: AnimeStaffType;
};
function StaffCard({ staff }: StaffCardProps) {
  return (
    <div className="flex gap-5">
      <Avatar
        image={staff.person.images.jpg.image_url}
        alt={staff.person.name}
        className="flex-shrink-0"
      />
      <div className="flex-1">
        <h6>{staff.person.name}</h6>
        <span className="text-sm text-gray-700">
          {staff.positions.join(",")}
        </span>
      </div>
    </div>
  );
}

export default StaffCard;
