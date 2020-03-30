import * as React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
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
    <div className="App">
      {audioRef.current && (
        <ProgressBar
          current={currentTime}
          duration={duration}
          changeCurrent={changeCurrent}
        />
      )}

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
      <button onClick={playAudio}>재생</button>
    </div>
  );
};

export default Audio;
