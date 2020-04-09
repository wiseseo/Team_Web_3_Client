import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";
import Profile from "./Profile";
import { SongContext } from "./../../stores/SongStore";

const AudioContainer = styled.div`
  display: flex;
  padding: 2.5rem;
  align-items: center;
  justify-content: space-around;
  background: #110f11;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;
const AudioPlayer: React.FC = (): React.ReactElement => {
  const { song, dispatch } = React.useContext(SongContext);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current == null) return;
    if (song.isPlaying) {
      audioRef.current.pause();
      dispatch({ type: "STOP_SONG" });
    } else {
      setDuration(audioRef.current.duration);
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
      <PlayButton playAudio={playAudio} status={song.isPlaying} />
      <ProgressBar
        current={currentTime}
        duration={duration}
        changeCurrent={changeCurrent}
      />
      <div>♡</div>
      <input
        type="range"
        max={1}
        min={0}
        step={0.01}
        value={audioRef.current && audioRef.current.volume}
        onChange={volumeChange}
      />
      <audio
        preload="metadata"
        ref={audioRef}
        src={song.song_url}
        onTimeUpdate={updateProgress}
      />
    </AudioContainer>
  );
};

export default AudioPlayer;
