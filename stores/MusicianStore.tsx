import React, { useState } from "react";

interface Song {
  id: string;
  title: string;
  date: string;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: string;
  name: string;
  introduction: string;
  profile_url: string;
  song: Song;
}
const defaultMusicians: Musician[] = [];

export const MusiciansContext = React.createContext(defaultMusicians);

export const MusiciansStore = ({
  children,
}: {
  children: React.ReactElement[];
}) => {
  const [musicians, setMusicians] = useState<Musician[]>(defaultMusicians);
  return (
    <MusiciansContext.Provider value={musicians}>
      {children}
    </MusiciansContext.Provider>
  );
};
