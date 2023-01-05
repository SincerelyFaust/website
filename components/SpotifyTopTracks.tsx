import useSWR from "swr";

import fetcher from "../lib/Fetcher";
import { TopTracks } from "../types/types";
import Track from "./SpotifyTrack";

export default function Tracks() {
  const { data } = useSWR<TopTracks>("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <div key={"topTracksKey"} className="bg-green-700 p-10 rounded-2xl">
        {data.tracks.map((track, index) => (
          <Track ranking={index + 1} key={track.songUrl} {...track} />
        ))}
      </div>
    </>
  );
}
