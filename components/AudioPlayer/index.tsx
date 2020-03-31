import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";

interface Props {
  src: string;
}

const AudioContainer = styled.div`
  display: flex;
  background: #110f11;
  position: fixed;
  bottom: 0;
`;

const AudioPlayer: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playAudio = () => {
    if (audioRef.current == null) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      setDuration(audioRef.current.duration);
      audioRef.current.play();
      setPlaying(true);
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
      <PlayButton playAudio={playAudio} status={playing} />
      <ProgressBar
        current={currentTime}
        duration={duration}
        changeCurrent={changeCurrent}
      />

      <audio
        preload="metadata"
        ref={audioRef}
        src={src}
        onTimeUpdate={updateProgress}
      />
      {audioRef.current && (
        <input
          type="range"
          max={1}
          min={0}
          step={0.01}
          value={audioRef.current.volume}
          onChange={volumeChange}
        />
      )}
    </AudioContainer>
  );
};

export default AudioPlayer;
