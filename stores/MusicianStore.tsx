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
    id: "1",
    name: "마약왕1",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "1",
      title: "Death_Becomes_Fur",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "2",
    name: "마약왕2",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "2",
      title: "효과음",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url:
        "https://yapp-tuna.s3.ap-northeast-2.amazonaws.com/static/ITZY++WANNABE++M+V.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "3",
    name: "마약왕3",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "3",
      title: "다른음악",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url:
        "https://yapp-tuna.s3.ap-northeast-2.amazonaws.com/static/%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE+%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%89%E1%85%A1%E1%86%BC.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "4",
    name: "마약왕4",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "4",
      title: "horse",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://www.w3schools.com/html/horse.ogg",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "5",
    name: "마약왕5",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "5",
      title: "tuna",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "6",
    name: "마약왕6",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "6",
      title: "tuna",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: "7",
    name: "마약왕7",
    introduction: "나라에서 허락한 유일한 마약팔이",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["태그", "태그2"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: "7",
      title: "tuna",
      date: "string",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
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
  byRank: MusicianList;
  byNew: MusicianList;
}
const parseResponse = (responseData: MusicianListResponse): InitData => {
  const byRank: MusicianList = {
    list: [],
    display: [],
    page: 0,
    end: 0,
  };
  const byNew: MusicianList = {
    list: [],
    display: [],
    page: 0,
    end: 0,
  };
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
  byRank.list = responseData.bestMusician.map(mapper);
  byNew.list = responseData.newMusician.map(mapper);
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
      const responseData: MusicianListResponse = await JSON.parse(
        response.data
      );
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
