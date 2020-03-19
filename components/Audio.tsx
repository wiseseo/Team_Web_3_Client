import * as React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [now, setNow] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef(null);
  const [intervalId, setIntervalId] = React.useState<number>();
  const playAudio = () => {
    if (audioRef.current !== null) {
      if (playing) {
        audioRef.current.pause();
        clearInterval(intervalId);
        setPlaying(false);
      } else {
        audioRef.current.play();
        const id = setInterval(() => {
          setNow(audioRef.current.currentTime);
        }, 10);
        setIntervalId(id);
        setPlaying(true);
      }
    }
  };
  return (
    <div className="App">
      <ProgressBar current={now} duration={duration} />
      <audio
        preload="metadata"
        onLoadedMetadata={() => setDuration(audioRef.current.duration)}
        ref={audioRef}
        src={src}
      />
      <button onClick={playAudio}>재생</button>
    </div>
  );
};

export default Audio;
