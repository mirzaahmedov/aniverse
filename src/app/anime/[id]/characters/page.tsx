import { getAnimeCharacters, getAnimeStaff } from "@/actions/anime";
import CharacterCard from "@/components/character-card";
import StaffCard from "@/components/staff-card";

type CharactersProps = {
  params: {
    id: number;
  };
};
async function Characters({ params }: CharactersProps) {
  const { id } = params;
  const characters = await getAnimeCharacters(id);
  const staff = await getAnimeStaff(id);

  return (
    <div>
      <h4 className="sm-headline">Characters & Voice Actors</h4>
      <ul>
        {Array.isArray(characters)
          ? characters.data.map((ch) => (
              <li key={ch.character.mal_id}>
                <CharacterCard character={ch} />
              </li>
            ))
          : null}
      </ul>
      <h4 className="sm-headline">Staff</h4>
      <ul>
        {Array.isArray(staff)
          ? staff.data.map((ch) => (
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
