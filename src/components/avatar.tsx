import type { ImageProps } from "next/image";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { UserIcon } from "@heroicons/react/24/solid";

type AvatarProps = React.HTMLAttributes<HTMLDivElement> & {
  image: string | null;
  alt: string;
  imageProps?: Omit<ImageProps, "src" | "alt">;
};
function Avatar({ image, alt, imageProps = {}, ...props }: AvatarProps) {
  return image ? (
    <div
      {...props}
      className={twMerge(
        "relative w-16 h-24 rounded-lg overflow-hidden",
        props.className,
      )}
    >
      <Image
        {...imageProps}
        fill
        src={image}
        alt={alt}
        className={twMerge("object-center object-cover", imageProps.className)}
      />
    </div>
  ) : (
    <div className="flex items-center justify-center w-10 h-10">
      <UserIcon className="h-6" />
    </div>
  );
}

export default Avatar;
