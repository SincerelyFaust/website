import Link from "next/link";
import useMediaQuery from "../utils/hooks/useMediaQuery";

export default function Track(track: any) {
  const isWindowSizeSmall = useMediaQuery("(max-width: 1075px)");

  return (
    <div
      className={
        !isWindowSizeSmall
          ? "flex flex-row items-baseline w-96"
          : "flex flex-row items-baseline w-64"
      }
    >
      <p className="text-sm font-bold text-white">{track.ranking}</p>
      <div className="flex flex-col pl-3">
        <Link
          className={
            !isWindowSizeSmall
              ? "font-medium text-white truncate w-80"
              : "font-medium text-white truncate w-56"
          }
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </Link>
        <p
          className={
            !isWindowSizeSmall
              ? "text-gray-200 mb-4 truncate w-80"
              : "text-gray-200 mb-4 truncate w-56"
          }
        >
          {track.artist}
        </p>
      </div>
    </div>
  );
}
