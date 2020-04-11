type ActionType = {
  type:
    | "INIT_MUSICIANS"
    | "PREV_MUSICIANS"
    | "NEXT_MUSICIANS"
    | "TOGGLE_LIKE"
    | "SELECT_SONG";
  payload?: any;
};

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

interface MusicianList {
  list: Musician[];
  display: Musician[];
  page: number;
  end: number;
}
const reducer = (musicianList: MusicianList, { type, payload }: ActionType) => {
  switch (type) {
    case "INIT_MUSICIANS":
      return {
        list: [...payload],
        display: payload.slice(0, 3),
        page: 0,
        end: payload.length,
      };
    case "PREV_MUSICIANS":
      if (musicianList.page === 0) return musicianList;
      const prevPage = musicianList.page - 3;
      return {
        list: musicianList.list,
        page: prevPage,
        display: musicianList.list.slice(prevPage, prevPage + 3),
        end: musicianList.end,
      };
    case "NEXT_MUSICIANS":
      // 끝페이지 + 3 페이지 로딩
      const nextPage = musicianList.page + 3;
      if (nextPage > musicianList.end) return musicianList;
      return {
        list: musicianList.list,
        page: nextPage,
        display: musicianList.list.slice(nextPage, nextPage + 3),
        end: musicianList.end,
      };
    case "TOGGLE_LIKE":
      return;
    case "SELECT_SONG":
      return;
    default:
      return;
  }
};

export default reducer;
