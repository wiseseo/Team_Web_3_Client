import * as React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import PlayButton from "./PlayButton";
import Profile from "./Profile";
import { SongContext } from "./../../stores/SongStore";

interface Props {
  src: string;
}

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
const musician = {
  name: "마약왕",
  introduction: "나라에서 허락한 유일한 마약팔이",
  tags: ["태그", "태그그"],
  likes: 777,
  isPlaying: false,
  profile:
    "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg",
  song: {
    id: "1",
    title: "tuna",
    cover:
      "https://post-phinf.pstatic.net/MjAxOTA4MDJfMTMg/MDAxNTY0NzE4NzAwOTA5.tn4HF1zjhfl6_aHxlR7asab1KXtzqAr9cdtE1N34esUg.5Mh8Nq1dlgLPhjjClwburE2_cSS3KlbKega_nY1Jc0Ig.JPEG/%EB%94%94%EB%85%B8%EB%A7%88%EB%93%9C%ED%95%99%EA%B5%90_%EC%95%84%ED%8A%B8%EB%94%94%EB%A0%89%ED%84%B0_NSH_%EC%95%A8%EB%B2%94_%EC%BB%A4%EB%B2%84_%EB%94%94%EC%9E%90%EC%9D%B8_1.jpg?type=w1200",
  },
  features: ["빠른 작업", "3분 이상", "효과음", "보컬 곡 작곡"],
};
const AudioPlayer: React.FC<Props> = ({ src }: Props): React.ReactElement => {
  const { song, dispatch } = React.useContext(SongContext);
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
      <Profile
        cover={musician.song.cover}
        name={musician.name}
        title={musician.song.title}
      />
      <PlayButton playAudio={playAudio} status={playing} />
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
        src={src}
        onTimeUpdate={updateProgress}
      />
    </AudioContainer>
  );
};

export default AudioPlayer;
