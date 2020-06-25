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
interface MusicianResponse {
  musicianMainResponseDto: MusicianMainResponseDto;
  songMainResponseDto: SongMainResponseDto;
  spclNoteTags: string[];
  rptags: string[];
}
interface MusicianListResponse {
  musician: MusicianResponse[];
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
    | "NEXT_MUSICIANS"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};

interface MusicianInterface {
  musicianList: MusicianList;
  dispatch?: React.Dispatch<ActionType>;
}

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
}

export const FilterContext = React.createContext<FilterInterface>({
  filter: defaultFilter,
  //musicianList: [],
  musicianList: { list: defaultMusicianList, display: [], page: 0, end: 0 },
});

const parseResponse = (responseData: MusicianListResponse): MusicianList => {
  let list: Musician[] = [];
  const mapper = ({
    musicianMainResponseDto,
    songMainResponseDto,
    spclNoteTags,
    rptags,
  }: MusicianResponse): Musician => {
    return {
      id: musicianMainResponseDto.musicianId,
      name: musicianMainResponseDto.nickNm,
      introduction: musicianMainResponseDto.introduction,
      tags: rptags,
      likes: 0,
      profile_url: musicianMainResponseDto.profileUrl,
      features: spclNoteTags,
      song: {
        id: songMainResponseDto.songId,
        title: songMainResponseDto.title,
        isPlaying: false,
        isLike: false,
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

const useLoad = (callback: Function, filter: Filter) => {
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

const FilterStore = ({ children }: { children: React.ReactElement }) => {
  const [filter, setFilter] = useState<Filter>(defaultFilter);
  //const [musicianList, setMusicianList] = useState<MusicianList>();
  const [musicianList, dispatch] = React.useReducer(reducer, {
    list: defaultMusicianList,
    display: [],
    page: 0,
    end: 36,
  });

  useLoad((responseData: MusicianList) => {
    dispatch({ type: "INIT_MUSICIANS", payload: responseData.list });
  }, filter);
  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        musicianList,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterStore;
