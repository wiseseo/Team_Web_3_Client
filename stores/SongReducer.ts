type ActionType = {
  type: "INIT_SONG" | "CHANGE_SONG" | "TOGGLE_LIKE" | "PLAY_SONG" | "STOP_SONG";
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
    case "TOGGLE_LIKE":
      return { ...song, isLike: !song.isLike };
    case "PLAY_SONG":
      return { ...song, isPlaying: true };
    case "STOP_SONG":
      return { ...song, isPlaying: false };
    default:
      return;
  }
};

export default reducer;
