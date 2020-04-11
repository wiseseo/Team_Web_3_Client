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
}
const reducer = (musicianList: MusicianList, { type, payload }: ActionType) => {
  switch (type) {
    case "INIT_MUSICIANS":
      return { list: [...payload], display: payload.slice(0, 3), page: 0 };
    case "PREV_MUSICIANS":
      return;
    case "NEXT_MUSICIANS":
      return;
    case "TOGGLE_LIKE":
      return;
    case "SELECT_SONG":
      return;
    default:
      return;
  }
};

export default reducer;
