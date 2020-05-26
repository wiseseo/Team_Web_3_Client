import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";
import Profile from "./Profile";
import { SongContext } from "./../../stores/SongStore";

const AudioContainer = styled.div`
  display: flex;
  padding: 1.25rem;
  align-items: center;
  justify-content: space-around;
  background: rgba(17, 15, 17, 0.8);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
`;
const Volume = styled.div`
  display: flex;
  align-items: center;
  input[type="range"] {
    margin: 0 1rem;
    -webkit-appearance: none;
    appearance: none;
    background-color: #b3b4be;
    overflow: hidden;
    height: 8px;
    width: 80px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1px;
      box-shadow: -100vw 0 0 100vw #6865fc;
      box-shadow: -100vw 0 0 100vw #6865fc;
      background: linear-gradient(138.6deg, #6865fc 36.28%, #658dfc 100%);
    }
  }
`;
const AudioPlayer: React.FC = (): React.ReactElement => {
  const { song, dispatch } = React.useContext(SongContext);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    stopAudio();
    if (song.isPlaying) {
      audioRef.current.play();
    }
  }, [song]);
  const stopAudio = () => {
    if (audioRef.current == null) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  const playAudio = () => {
    if (audioRef.current == null) return;
    if (duration == 0) setDuration(audioRef.current.duration);
    if (song.isPlaying) {
      audioRef.current.pause();
      dispatch({ type: "STOP_SONG" });
    } else {
      audioRef.current.play();
      dispatch({ type: "PLAY_SONG" });
    }
  };

  const updateProgress = (
    event: React.SyntheticEvent<HTMLAudioElement, Event>
  ) => {
    setCurrentTime((event.target as HTMLAudioElement).currentTime);
  };

  const volumeChange = (
    event: React.SyntheticEvent<HTMLInputElement, Event>
  ) => {
    audioRef.current.volume = Number((event.target as HTMLInputElement).value);
  };

  const changeCurrent = (value: number) => {
    if (audioRef.current === null) return;
    audioRef.current.currentTime = value;
  };
  return (
    <AudioContainer>
      <Profile cover={song.cover_url} name={song.name} title={song.title} />
      <PlayButton playAudio={playAudio} size={48} status={song.isPlaying} />
      <ProgressBar
        current={currentTime}
        duration={duration}
        changeCurrent={changeCurrent}
      />
      <Like onClick={() => dispatch({ type: "TOGGLE_LIKE" })}>
        <img src="/static/like.png" alt="like" />
      </Like>
      <Volume>
        <img src="/static/volume.png" alt="volume" />
        <input
          type="range"
          max={1}
          min={0}
          step={0.001}
          value={audioRef.current ? audioRef.current.volume : 0.5}
          onChange={volumeChange}
        />
      </Volume>

      <audio
        onLoadedMetadata={(event) => {
          setDuration(audioRef.current.duration);
        }}
        preload="metadata"
        ref={audioRef}
        src={song.song_url}
        onTimeUpdate={updateProgress}
      />
    </AudioContainer>
  );
};

export default AudioPlayer;
