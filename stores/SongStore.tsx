import React, { useReducer } from "react";
import reducer from "./SongReducer";

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

type ActionType = {
  type: "INIT_SONG" | "CHANGE_SONG" | "LIKE_SONG" | "PLAY_SONG" | "STOP_SONG";
  payload?: any;
};

interface SongInterface {
  song: Song;
  dispatch?: React.Dispatch<ActionType>;
}

const defaultSong: Song = {
  id: "1",
  name: "마약왕",
  title: "tuna",
  date: "string",
  cover_url:
    "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
  song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
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
