type ActionType = {
  type: "INIT_SONG" | "CHANGE_SONG" | "LIKE_SONG" | "PLAY_SONG" | "STOP_SONG";
  payload?: any;
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
      return { ...payload };
    case "CHANGE_SONG":
      return { ...payload };
    case "LIKE_SONG":
      return { ...song, isLike: true };
    case "PLAY_SONG":
      return { ...song, isPlaying: true };
    case "STOP_SONG":
      return { ...song, isPlaying: false };
    default:
      return;
  }
};

export default reducer;
