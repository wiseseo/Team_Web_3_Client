import * as React from "react";
import ProgressBar from "./ProgressBar";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState<boolean>(false);
  const audioRef = React.useRef(null);
  const [requestId, setRequestId] = React.useState<number>();

  React.useEffect(() => {
    if (audioRef.current) {
      console.log(audioRef.current.volume);
    }
  }, [audioRef]);
  const step = () => {
    if (audioRef.current == null) return;
    if (audioRef.current.currentTime < audioRef.current.duration) {
      const id = requestAnimationFrame(step);
      setRequestId(id);
    }
  };
  const playAudio = () => {
    if (audioRef.current == null) return;

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
  };
  return (
    <div className="App">
      {audioRef.current && (
        <ProgressBar
          current={audioRef.current.currentTime}
          duration={audioRef.current.duration}
        />
      )}

      <audio preload="metadata" ref={audioRef} src={src} />
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
