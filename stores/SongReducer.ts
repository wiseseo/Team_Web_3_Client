type ActionType = {
  type: "INIT_SONG" | "CHANGE_SONG" | "LIKE_SONG" | "PLAY_SONG" | "STOP_SONG";
  payload: any;
};

interface Song {
  id: string;
  name: string;
  title: string;
  date: string;
  cover_url: string;
  song_url: string;
  isPlaying: boolean;
  isLike: boolean;
}

const reducer = (song: Song, { type, payload }: ActionType) => {
  switch (type) {
    case "INIT_SONG":
      return;
    case "CHANGE_SONG":
      return;
    case "LIKE_SONG":
      return;
    case "PLAY_SONG":
      return;
    case "STOP_SONG":
      return;
    default:
      return;
  }
};

export default reducer;
