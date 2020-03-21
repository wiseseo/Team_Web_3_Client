import * as React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef(null);
  const [requestId, setRequestId] = React.useState<number>();
  React.useEffect(() => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  }, [audioRef]);

  const step = () => {
    if (audioRef.current.currentTime < duration) {
      const id = requestAnimationFrame(step);
      setRequestId(id);
    }
  };
  const playAudio = () => {
    if (audioRef.current !== null) {
      if (playing) {
        audioRef.current.pause();
        cancelAnimationFrame(requestId);
        setPlaying(false);
      } else {
        audioRef.current.play();
        const id = requestAnimationFrame(step);
        setRequestId(id);
        setPlaying(true);
      }
    }
  };
  return (
    <div className="App">
      <ProgressBar
        current={
          audioRef.current && audioRef.current.currentTime
            ? audioRef.current.currentTime
            : 0
        }
        duration={duration}
      />
      <audio preload="metadata" ref={audioRef} src={src} />
      <button onClick={playAudio}>재생</button>
    </div>
  );
};

export default Audio;
