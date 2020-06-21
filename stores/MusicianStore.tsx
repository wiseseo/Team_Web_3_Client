import React, { useState, useReducer, useEffect } from "react";
import reducer from "./MusicianReducer";
import axios, { AxiosPromise, AxiosResponse } from "axios";

interface Song {
  id: string;
  title: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: string;
  name: string;
  introduction: string;
  tags: string[];
  likes: number;
  profile_url: string;
  features: string[];
  song: Song;
}
interface MusicianMainResponseDto {
  musicianId: number;
  nickNm: string;
  introduction: string;
  profileUrl: string;
}
interface SongMainResponseDto {
  songId: number;
  title: string;
  coverUrl: string;
  songUrl: string;
}
interface SimpleMusicianResponseDto {
  musicianMainResponseDto: MusicianMainResponseDto;
  songMainResponseDto: SongMainResponseDto;
  spclNoteTags: string[];
  rptags: string[];
}
interface MusicianResponse {
  simpleMusicianResponseDto: SimpleMusicianResponseDto;
  bookmarkCount: number;
  alreadyBookmark: boolean;
}
interface MusicianListResponse {
  newMusician: MusicianResponse[];
  bestMusician: MusicianResponse[];
}
const defaultMusicianList: Musician[] = [
  {
    id: "0",
    name: "",
    introduction: "",
    profile_url: null,
    tags: [],
    likes: 0,
    features: [],
    song: {
      id: "0",
      title: "",
      cover_url: "/static/default-cover.png",
      song_url: null,
      isPlaying: false,
      isLike: false,
    },
  },
];

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}

type ActionType = {
  type:
    | "INIT_MUSICIANS"
    | "PREV_MUSICIANS"
    | "NEXT_MUSICIANS"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};
interface MusicianInterface {
  musicianList: {
    byRank: MusicianList;
    byNew: MusicianList;
  };
  dispatch?: {
    byRank: React.Dispatch<ActionType>;
    byNew: React.Dispatch<ActionType>;
  };
}
export const MusicianContext = React.createContext<MusicianInterface>({
  musicianList: {
    byRank: {
      list: defaultMusicianList,
      display: [],
      page: 0,
      end: 0,
    },
    byNew: {
      list: defaultMusicianList,
      display: [],
      page: 0,
      end: 0,
    },
  },
});
interface InitData {
  byRank: Musician[];
  byNew: Musician[];
}
const parseResponse = (responseData: MusicianListResponse): InitData => {
  let byRank: Musician[] = [];
  let byNew: Musician[] = [];
  const mapper = ({
    simpleMusicianResponseDto,
    bookmarkCount,
    alreadyBookmark,
  }) => {
    const {
      musicianMainResponseDto,
      songMainResponseDto,
      spclNoteTags,
      rptags,
    } = simpleMusicianResponseDto;
    return {
      id: musicianMainResponseDto.musicianId,
      name: musicianMainResponseDto.nickNm,
      introduction: musicianMainResponseDto.introduction,
      tags: rptags,
      likes: bookmarkCount,
      profile_url: musicianMainResponseDto.profileUrl,
      features: spclNoteTags,
      song: {
        id: songMainResponseDto.songId,
        title: songMainResponseDto.title,
        isPlaying: false,
        isLike: alreadyBookmark,
        cover_url: songMainResponseDto.coverUrl,
        song_url: songMainResponseDto.songUrl,
      },
    };
  };
  byRank = responseData.bestMusician.map(mapper);
  byNew = responseData.newMusician.map(mapper);
  return { byRank, byNew };
};
const useLoad = (callback: Function) => {
  const [loading, setLoading] = useState(false);

  const loadInitData = async (callback: Function) => {
    setLoading(true);
    const response: AxiosResponse = await axios.get(
      "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/main"
    );
    if (response.data) {
      const responseData: MusicianListResponse = response.data;
      const initData: InitData = parseResponse(responseData);
      callback(initData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitData(callback);
  }, []);
  return loading;
};
const MusicianStore = ({ children }: { children: React.ReactElement }) => {
  const [musicianListByRank, dispatchByRank] = useReducer(reducer, {
    list: defaultMusicianList,
    display: [],
    page: 0,
    end: 7,
  });
  const [musicianListByNew, dispatchByNew] = useReducer(reducer, {
    list: defaultMusicianList,
    display: [],
    page: 0,
    end: 7,
  });
  useLoad((initData: InitData) => {
    dispatchByRank({ type: "INIT_MUSICIANS", payload: initData.byRank });
    dispatchByNew({ type: "INIT_MUSICIANS", payload: initData.byNew });
  });
  useEffect(() => {}, []);
  return (
    <MusicianContext.Provider
      value={{
        musicianList: { byRank: musicianListByRank, byNew: musicianListByNew },
        dispatch: { byRank: dispatchByRank, byNew: dispatchByNew },
      }}
    >
      {children}
    </MusicianContext.Provider>
  );
};

export default MusicianStore;
