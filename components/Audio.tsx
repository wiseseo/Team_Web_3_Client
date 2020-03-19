import * as React from "react";

interface Props {
  src: string;
}

const Audio: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const [playing, setPlaying] = React.useState(false);
  const [now, setNow] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const audioRef = React.useRef(null);
  let intervalID;
  const playAudio = () => {
    if (audioRef.current !== null) {
      if (playing) {
        audioRef.current.pause();
        intervalID = clearInterval(intervalID);
        setPlaying(false);
      } else {
        audioRef.current.play();
        intervalID = setInterval(() => {
          setNow(audioRef.current.currentTime);
        }, 10);
        setPlaying(true);
      }
    }
  };
  return (
    <div className="App">
      <h2>
        {Math.floor(now / 60)}:{Math.floor(now % 60)}/
        {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </h2>
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
