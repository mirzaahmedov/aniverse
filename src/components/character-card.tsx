import type { AnimeCharacterType } from "@/types/anime";
import Avatar from "./avatar";

type CharacterCardProps = {
  character: AnimeCharacterType;
};
function CharacterCard({ character }: CharacterCardProps) {
  const voice_actor = character.voice_actors.find(
    (va) => va.language === "Japanese",
  );
  return (
    <div className="flex gap-5">
      <Avatar
        image={character.character.images.webp.image_url}
        alt={character.character.name}
        className="flex-shrink-0"
      />
      <div className="flex-1">
        <h6>{character.character.name}</h6>
        <span className="text-sm text-gray-700">{character.role}</span>
      </div>
      {voice_actor ? (
        <div className="flex gap-5 text-end">
          <div>
            <h6>{voice_actor.person.name}</h6>
            <span className="text-sm text-gray-700">
              {voice_actor.language}
            </span>
          </div>
          <Avatar
            image={voice_actor.person.images.jpg.image_url}
            alt={voice_actor.person.name}
            className="flex-shrink-0"
          />
        </div>
      ) : null}
    </div>
  );
}

export default CharacterCard;
