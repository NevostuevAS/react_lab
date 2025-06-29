import { getImageUrl } from "./util";

export type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
  const sizeType = size < 90 ? 's' : 'b';
  return (
    <img
      className="avatar"
      src={getImageUrl(person, sizeType)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: "Gregorio Y. Zara",
        imageId: "GregorioYZara",
      }}
    />
  );
}
