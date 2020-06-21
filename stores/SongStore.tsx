import React, { useReducer } from "react";
import reducer from "./SongReducer";

interface Song {
  id: string;
  name: string;
  title: string;
  cover_url: string;
  song_url: string;
  isPlaying: boolean;
  isLike: boolean;
}

type ActionType = {
  type: "INIT_SONG" | "CHANGE_SONG" | "TOGGLE_LIKE" | "PLAY_SONG" | "STOP_SONG";
  payload?: any;
};

interface SongInterface {
  song: Song;
  dispatch?: React.Dispatch<ActionType>;
}

const defaultSong: Song = {
  id: "1",
  name: "",
  title: "",
  cover_url: "/static/default-cover.png",
  song_url: null,
  isPlaying: false,
  isLike: false,
};

export const SongContext = React.createContext<SongInterface>({
  song: defaultSong,
});

const SongStore = ({ children }: { children: React.ReactElement }) => {
  const [song, dispatch] = useReducer(reducer, defaultSong);
  return (
    <SongContext.Provider value={{ song, dispatch }}>
      {children}
    </SongContext.Provider>
  );
};

export default SongStore;
