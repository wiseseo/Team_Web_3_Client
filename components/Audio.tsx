import * as React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef(null);
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
    setCurrentTime(event.target.currentTime);
  };
  return (
    <div className="App">
      {audioRef.current && (
        <ProgressBar current={currentTime} duration={duration} />
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
          onChange={e => (audioRef.current.volume = e.target.value)}
        />
      )}
      <button onClick={playAudio}>재생</button>
    </div>
  );
};

export default Audio;
