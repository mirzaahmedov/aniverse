import type { AnimePageProps } from "../types";
import CharacterCard from "@/components/character-card";
import StaffCard from "@/components/staff-card";
import { getAnimeCharacters, getAnimeStaff } from "@/actions/anime";

async function Characters({ params }: AnimePageProps) {
  const id = parseInt(params.id);
  const characters = await getAnimeCharacters(id);
  const staff = await getAnimeStaff(id);

  return (
    <div>
      <h4 className="sm-headline">Characters & Voice Actors</h4>
      <ul>
        {characters.ok && Array.isArray(characters.result.data)
          ? characters.result.data.map((ch) => (
              <li key={ch.character.mal_id}>
                <CharacterCard character={ch} />
              </li>
            ))
          : null}
      </ul>
      <h4 className="sm-headline">Staff</h4>
      <ul>
        {staff.ok && Array.isArray(staff.result.data)
          ? staff.result.data.map((ch) => (
              <li key={ch.person.mal_id}>
                <StaffCard staff={ch} />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Characters;
