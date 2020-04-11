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
      // 고민
      const index = musicianList.list.findIndex(
        (musician) => payload === musician.id
      );
      const likedMusician = {
        ...musicianList.list[index],
        song: {
          ...musicianList.list[index].song,
          isLike: !musicianList.list[index].song.isLike,
        },
      };
      return musicianList;
    case "SELECT_SONG":
      const newList = musicianList.list.map((musician) => {
        musician.song.isPlaying = musician.song.id === payload;
        return musician;
      });
      return {
        ...musicianList,
        list: newList,
        display: newList.slice(musicianList.page, musicianList.page + 3),
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
