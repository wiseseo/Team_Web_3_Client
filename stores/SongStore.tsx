import React, { useState } from "react";

interface Song {
  id: string;
  name: string;
  title: string;
  date: string;
  cover_url: string;
  song_url: string;
  isPlaying: boolean;
  isLike: boolean;
}

export const SongContext = React.createContext(null);

export const SongStore = ({ children }: { children: React.ReactElement[] }) => {
  const [nowSong, setNowSong] = useState<Song>(null);
  return (
    <SongContext.Provider value={nowSong}>{children}</SongContext.Provider>
  );
};
