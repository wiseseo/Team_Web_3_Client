import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import reducer from "./FindReducer";

interface Song {
  id: number;
  title: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: number;
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
  musician: MusicianResponse[];
}
const defaultMusicianList: Musician[] = [
  {
    id: 12,
    name: "마약왕",
    introduction: "내가 하고 싶은 음악을 합니다.",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 1,
      title: "Death_Becomes_Fur",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 2,
    name: "Phillies Basement",
    introduction: "큐브가 배출한 킥 장인",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 2,
      title: "효과음",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 3,
    name: "And we go",
    introduction: "이미 한국이 좁은 케이팝스타",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 3,
      title: "다른음악",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://html5tutorial.info/media/vincent.mp3",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 4,
    name: "Sia",
    introduction: "몇 번을 말해도 모자랄 준비된 음악가",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 4,
      title: "horse",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "https://www.w3schools.com/html/horse.ogg",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 5,
    name: "박문치",
    introduction: "인디 신의 깜짝 스타 케이팝 신에도 두둥등장",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 5,
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 6,
    name: "조영수",
    introduction: "푸른빛 밤을 노래하는 음악가",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 6,
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 7,
    name: "비트의 마술사",
    introduction: "다작보다 명작을 남기는 비트의 마술사",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 7,
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 8,
    name: "Kehlani",
    introduction: "SM의 숨은 실력자",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 8,
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
  {
    id: 9,
    name: "Indigo",
    introduction: "몽환적인 electronic",
    profile_url:
      "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
    tags: ["스포츠", "기술", "게임", "시즌"],
    likes: 777,
    features: ["빠른작업", "3분이상", "효과음", "보컬 곡 작곡"],
    song: {
      id: 9,
      title: "tuna",
      cover_url:
        "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
      song_url: "http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga",
      isPlaying: false,
      isLike: false,
    },
  },
];
/*const defaultMusicianList: Musician[] = [
  {
    id: 0,
    name: "",
    introduction: "",
    profile_url: null,
    tags: [],
    likes: 0,
    features: [],
    song: {
      id: 0,
      title: "",
      cover_url: "/static/default-cover.png",
      song_url: null,
      isPlaying: false,
      isLike: false,
    },
  },
];*/

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}

type ActionType = {
  type:
    | "INIT_MUSICIANS"
    | "NEXT_MUSICIANS"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};

interface Filter {
  atmoList: Array<string>;
  genreList: Array<string>;
  instruList: Array<string>;
  themeList: Array<string>;
}

const defaultFilter: Filter = {
  atmoList: [""],
  genreList: [""],
  instruList: [""],
  themeList: [""],
};

interface FilterInterface {
  filter: Filter;
  setFilter?: Function;
  musicianList: MusicianList;
  dispatch?: React.Dispatch<ActionType>;
}

export const FilterContext = React.createContext<FilterInterface>({
  filter: defaultFilter,
  //musicianList: [],
  musicianList: { list: defaultMusicianList, display: [], page: 0, end: 0 },
});

const parseResponse = (responseData: MusicianListResponse): MusicianList => {
  let list: Musician[] = [];
  const mapper = ({
    simpleMusicianResponseDto,
    bookmarkCount,
    alreadyBookmark,
  }: MusicianResponse): Musician => {
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
  list = responseData.musician.map(mapper);
  return { list, display: [], page: 0, end: 0 };
};

const isCategory = (filter: Filter): string => {
  let selectedIndex = Object.values(filter).findIndex(
    (value) => value.length === 0
  );
  switch (selectedIndex) {
    case 0:
      return "분위기";
    case 1:
      return "장르";
    case 2:
      return "악기";
    case 3:
      return "테마";
    case -1:
    default:
      return "";
  }
};

/*const useLoad = (callback: Function, filter: Filter) => {
  const [loading, setLoading] = useState(false);
  const loadInitData = async (callback: Function, filter: Filter) => {
    setLoading(true);
    console.log(filter);
    const selectedCategory = isCategory(filter);
    let response: AxiosResponse;
    if (selectedCategory) {
      response = await axios.get(
        "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/categorys",
        {
          params: {
            categoryNm: selectedCategory,
          },
        }
      );
    }
    response = await axios.post(
      "http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians/curation",
      JSON.stringify({ ...filter }),
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    if (response.data) {
      console.log(response.data);
      const responseData: MusicianListResponse = response.data;
      const initData: MusicianList = parseResponse(responseData);
      callback(initData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitData(callback, filter);
  }, [filter]);
  return loading;
};
*/
const FilterStore = ({ children }: { children: React.ReactElement }) => {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  const [musicianList, dispatch] = React.useReducer(reducer, {
    list: defaultMusicianList,
    display: [],
    page: 0,
    end: 8,
  });

  /*useLoad((responseData: MusicianList) => {
    dispatch({ type: "INIT_MUSICIANS", payload: responseData.list });
  }, filter);*/
  useEffect(() => {
    dispatch({ type: "INIT_MUSICIANS", payload: defaultMusicianList });
  }, []);
  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        musicianList,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterStore;
