type ActionType = {
  type:
    | "INIT_DATA"
    | "NEXT_MUSICIANS"
    | "NEXT_BEFORE"
    | "TOGGLE_LIKE"
    | "SELECT_SONG"
    | "PLAY_SONG"
    | "STOP_SONG";
  payload?: any;
};

interface Song {
  id: number;
  title: string;
  date: string;
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

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}

interface UserInfo {
  name: string;
  email: string;
}

interface ReqList {
  name: string;
  enrollDate: string;
  forUse: string;
  genre: string;
  atmo: string;
  length: string;
  finalDate: string;
  pay: string;
}

interface Before {
  id: string;
  profile_url: string;
  name: string;
  enrollDate: string;
  status: string;
  features: string;
}

interface BeforeList {
  list: Before[];
  display: Before[];
  page: number;
  end: number;
}

interface UserData {
  musicianList: MusicianList;
  userInfo: UserInfo;
  reqList: ReqList;
  beforeList: BeforeList;
}
const reducer = (userData: UserData, { type, payload }: ActionType) => {
  switch (type) {
    case "INIT_DATA":
      const musicianInit = userData.musicianList;
      const beforeInit = userData.beforeList;

      musicianInit.list = [...payload.musicianList];
      musicianInit.display = payload.musicianList.slice(0, 4);
      musicianInit.page = 0;
      musicianInit.end = payload.musicianList.length;

      beforeInit.list = [...payload.beforeList];
      beforeInit.display = payload.beforeList.slice(0, 2);
      beforeInit.page = 0;
      beforeInit.end = payload.beforeList.length;

      /*musicianInit.list = [...payload.musicianList];
      musicianInit.display = payload.musicianList.slice(0, 4);
      musicianInit.page = 0;
      musicianInit.end = payload.musicianList.length;

      beforeInit.list = [...payload.beforeList];
      beforeInit.display = payload.beforeList.slice(0, 2);
      beforeInit.page = 0;
      beforeInit.end = payload.beforeList.length;*/
      return {
        ...userData,
        musicianList: musicianInit,
        beforeList: beforeInit,
      };
    case "NEXT_MUSICIANS":
      const nextPage = userData.musicianList.page + 4;
      if (nextPage > userData.musicianList.end) return userData;
      else {
        let newDisplay = [
          ...userData.musicianList.display,
          ...userData.musicianList.list.slice(nextPage, nextPage + 4),
        ];
        const musicianNext = userData.musicianList;
        musicianNext.list = userData.musicianList.list;
        musicianNext.page = nextPage;
        musicianNext.display = newDisplay;
        musicianNext.end = userData.musicianList.end;
        return {
          ...userData,
          musicianList: musicianNext,
        };
      }

    case "NEXT_BEFORE":
      const nextBeforePage = userData.musicianList.page + 2;
      if (nextPage > userData.beforeList.end) return userData;
      else {
        let newDisplay = [
          ...userData.beforeList.display,
          ...userData.beforeList.list.slice(nextBeforePage, nextBeforePage + 2),
        ];
        const BeforeNext = userData.beforeList;
        BeforeNext.list = userData.beforeList.list;
        BeforeNext.page = nextBeforePage;
        BeforeNext.display = newDisplay;
        BeforeNext.end = userData.beforeList.end;
        return {
          ...userData,
          beforeList: BeforeNext,
        };
      }
    case "TOGGLE_LIKE":
      // 미정입니다.
      const index = userData.musicianList.list.findIndex(
        (musician) => payload === musician.id
      );
      const likedMusician = {
        ...userData.musicianList.list[index],
        song: {
          ...userData.musicianList.list[index].song,
          isLike: !userData.musicianList.list[index].song.isLike,
        },
      };
    case "SELECT_SONG":
      const newList = userData.musicianList.list.map((musician) => {
        musician.song.isPlaying =
          musician.song.id === payload.id ? payload.status : false;
        return musician;
      });

      const musicianSelect = userData.musicianList;
      musicianSelect.list = newList;
      musicianSelect.display = newList.slice(0, userData.musicianList.page + 4);
      return {
        ...userData,
        musicianList: musicianSelect,
      };
    case "PLAY_SONG":
      return;
    case "STOP_SONG":
      return;

    default:
      return;
  }
};

export default reducer;
