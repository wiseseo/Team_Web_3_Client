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
        display: payload.slice(0, 10),
        page: 0,
        end: payload.length,
      };
    case "NEXT_MUSICIANS":
      const nextPage = musicianList.page + 10;
      if (nextPage > musicianList.end) return musicianList;
      else {
        let newDisplay = [
          ...musicianList.display,
          ...musicianList.list.slice(nextPage, nextPage + 10),
        ];
        return {
          list: musicianList.list,
          page: nextPage,
          display: newDisplay,
          end: musicianList.end,
        };
      }
    case "TOGGLE_LIKE":
      // 미정입니다.
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
    case "SELECT_SONG":
      const newList = musicianList.list.map((musician) => {
        musician.song.isPlaying =
          musician.song.id === payload.id ? payload.status : false;
        return musician;
      });
      return {
        ...musicianList,
        list: newList,
        display: newList.slice(0, musicianList.page + 10),
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
