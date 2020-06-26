import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface MusicianInfo {
  id: number;
  userId: {
    id: number;
    name: string;
    email: string;
    profile_url: string;
    age: number;
    nickname: string;
    gender: string;
    birthday: string;
    phone: string;
    role: string;
    roleKey: string;
  };
  career: string;
  nickNm: string;
  introduction: string;
  cellPhone: string;
  portFolioLink: string;
  snsNm: string;
  snsType: number;
  workStage01: string;
  workStage02: string;
  workStage03: string;
  qstnAns01: string;
  qstnAns02: string;
  qstnAns03: string;
  qstnAns04: string;
  styPrc01: number;
  styPrc02: number;
  styPrc03: number;
  styExpln01: string;
  styExpln02: string;
  styExpln03: string;
  profileUrl: string;
  atmosphereList: string[];
  genreList: string[];
  instrumentList: string[];
  specialList: string[];
  themeList: string[];
  multipartFiles: string[];
}
interface Song {
  title: string;
  coverUrl: string;
  songUrl: string;
  represent: number;
  multipartFile: string;
}
interface Musician {
  musicianList: MusicianInfo;
  songList: Song[];
}

const defaultMusicianDetail: Musician = {
  musicianList: {
    id: 57,
    userId: {
      id: 2,
      name: "",
      email: "",
      profile_url: null,
      age: 10,
      nickname: null,
      gender: null,
      birthday: null,
      phone: null,
      role: "USER",
      roleKey: "ROLE_USER",
    },
    career: "string",
    nickNm: "string",
    introduction: "",
    cellPhone: null,
    portFolioLink: "string",
    snsNm: "string",
    snsType: 0,
    workStage01: "string",
    workStage02: "string",
    workStage03: "string",
    qstnAns01: "string",
    qstnAns02: "string",
    qstnAns03: "string",
    qstnAns04: "string",
    styPrc01: 0,
    styPrc02: 0,
    styPrc03: 0,
    styExpln01: "string",
    styExpln02: "string",
    styExpln03: "string",
    profileUrl: "string",
    atmosphereList: null,
    genreList: null,
    instrumentList: null,
    specialList: null,
    themeList: null,
    multipartFiles: null,
  },
  songList: [
    {
      title: "참치 음악",
      coverUrl:
        "https://freight.cargo.site/t/original/i/a22da87abfa5c1e719a8d2287c6b820a4438cb9e7bd8e19c03cc4c966fb25958/AWA-PACKSHOT.jpg",
      songUrl:
        "https://yapp-tuna.s3.ap-northeast-2.amazonaws.com/static/%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE+%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%89%E1%85%A1%E1%86%BC.mp3",
      represent: 1,
      multipartFile: null,
    },
  ],
};

interface MusicianInterface {
  musician: Musician;
}
export const MusicianDetailContext = React.createContext<MusicianInterface>({
  musician: defaultMusicianDetail,
});

const useLoad = (callback: Function, musicianId: string) => {
  const [loading, setLoading] = useState(false);

  const loadInitData = async (callback: Function, musicianId: string) => {
    setLoading(true);
    const response: AxiosResponse = await axios.get(
      `http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musician/detail/${musicianId}`
    );
    if (response.data) {
      const responseData: Musician = response.data;
      console.log(responseData);
      callback(responseData);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitData(callback, musicianId);
  }, [musicianId]);
  return loading;
};
const MusicianDetailStore = ({
  children,
  musicianId,
}: {
  children: React.ReactElement;
  musicianId: string;
}) => {
  const [musician, setMusician] = useState<Musician>(defaultMusicianDetail);
  useLoad((responseData: Musician) => {
    setMusician(responseData);
  }, musicianId);
  return (
    <MusicianDetailContext.Provider
      value={{
        musician,
      }}
    >
      {children}
    </MusicianDetailContext.Provider>
  );
};

export default MusicianDetailStore;
