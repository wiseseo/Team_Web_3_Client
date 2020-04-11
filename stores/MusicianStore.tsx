import React, { useReducer } from "react";
import reducer from "./MusicianReducer";

interface Song {
  id: string;
  title: string;
  date: string;
  isPlaying: boolean;
  isLike: boolean;
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
const defaultMusician: Musician = {
  id: "1",
  name: "마약왕",
  introduction: "나라에서 허락한 유일한 마약팔이",
  profile_url:
    "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
  song: {
    id: "1",
    title: "tuna",
    date: "string",
    cover_url:
      "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
    song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
    isPlaying: false,
    isLike: false,
  },
};

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
}

type ActionType = {
  type:
  | "INIT_MUSICIANS"
  | "PREV_MUSICIANS"
  | "NEXT_MUSICIANS"
  | "TOGGLE_LIKE"
  | "SELECT_SONG";
  payload?: any;
};
interface MusicianInterface {
  musicianListByRank: MusicianList;
  musicianListByRegist: MusicianList;

  dispatchRank?: React.Dispatch<ActionType>;
  dispatchRegist?: React.Dispatch<ActionType>;
}
export const MusicianContext = React.createContext<MusicianInterface>({
  musicianListByRank: { list: [defaultMusician], display: [], page: 0 },
  musicianListByRegist: { list: [defaultMusician], display: [], page: 0 },
});

const MusicianStore = ({ children }: { children: React.ReactElement }) => {
  const [musicianListByRank, dispatchRank] = useReducer(reducer, {
    list: [defaultMusician],
    display: [],
    page: 0,
  });
  const [musicianListByRegist, dispatchRegist] = useReducer(reducer, {
    list: [defaultMusician],
    display: [],
    page: 0,
  });
  return (
    <MusicianContext.Provider
      value={{
        musicianListByRank,
        dispatchRank,
        musicianListByRegist,
        dispatchRegist,
      }}
    >
      {children}
    </MusicianContext.Provider>
  );
};

export default MusicianStore;
