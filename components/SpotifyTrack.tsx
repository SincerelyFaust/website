import Link from "next/link";

export default function Track(track: any) {
  return (
    <div className="flex flex-row items-baseline w-96">
      <p className="text-sm font-bold text-white">{track.ranking}</p>
      <div className="flex flex-col pl-3">
        <Link
          className="font-medium text-white truncate w-80"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {track.title}
        </Link>
        <p className="text-gray-200 mb-4 truncate w-80">{track.artist}</p>
      </div>
    </div>
  );
}
