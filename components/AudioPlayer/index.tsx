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
    }
  }
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
      <PlayButton playAudio={playAudio} size={48} status={song.isPlaying} />
      <ProgressBar
        current={currentTime}
        duration={duration}
        changeCurrent={changeCurrent}
      />
      <Like onClick={() => dispatch({ type: "TOGGLE_LIKE" })}>
        <svg
          width="32"
          height="29"
          viewBox="0 0 32 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6653 2.77712C28.0869 0.98625 25.8974 0 23.5 0C20.1283 0 17.9936 2.01375 16.7966 3.70312C16.486 4.1415 16.2218 4.58106 16 4.99469C15.7782 4.58106 15.5141 4.1415 15.2034 3.70312C14.0064 2.01375 11.8717 0 8.5 0C6.10262 0 3.91306 0.986313 2.33469 2.77719C0.829188 4.48556 0 6.77356 0 9.21969C0 11.8824 1.03956 14.3589 3.27156 17.0134C5.26638 19.3859 8.13619 21.8314 11.4594 24.6632C12.6977 25.7185 13.9782 26.8098 15.3416 28.0026L15.3825 28.0384C15.5592 28.1932 15.7796 28.2705 16 28.2705C16.2204 28.2705 16.4408 28.1931 16.6175 28.0384L16.6584 28.0026C18.0217 26.8098 19.3023 25.7186 20.5408 24.6631C23.8638 21.8315 26.7336 19.386 28.7284 17.0134C30.9604 14.3589 32 11.8824 32 9.21969C32 6.77356 31.1708 4.48556 29.6653 2.77712ZM19.3246 23.2361C18.2571 24.1458 17.1584 25.0819 16 26.089C14.8416 25.0821 13.7429 24.1458 12.6753 23.236C6.17156 17.6939 1.875 14.0326 1.875 9.21969C1.875 7.23031 2.53781 5.38256 3.74137 4.01688C4.95875 2.63569 6.64869 1.875 8.5 1.875C11.0706 1.875 12.7323 3.45863 13.6735 4.78713C14.5178 5.97863 14.9584 7.17975 15.1086 7.64081C15.2343 8.02675 15.5941 8.28794 16 8.28794C16.4059 8.28794 16.7657 8.02675 16.8914 7.64081C17.0416 7.17975 17.4822 5.97863 18.3265 4.78706C19.2677 3.45863 20.9294 1.875 23.5 1.875C25.3513 1.875 27.0413 2.63569 28.2586 4.01688C29.4622 5.38256 30.125 7.23031 30.125 9.21969C30.125 14.0326 25.8284 17.6939 19.3246 23.2361Z"
            fill="#E2E1E2"
          />
        </svg>
      </Like>
      <Volume>
        <svg
          width="30"
          height="32"
          viewBox="0 0 30 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.0033 15.915C26.0033 11.694 23.3481 7.94523 19.3957 6.58642C19.135 6.49691 18.8508 6.6385 18.7619 6.90298C18.6735 7.16696 18.8133 7.4547 19.0745 7.54471C22.6213 8.76395 25.0044 12.1279 25.0044 15.9155C25.0044 19.6997 22.6258 23.0641 19.086 24.2869C18.8253 24.3769 18.6854 24.6641 18.7749 24.9291C18.8458 25.139 19.0396 25.2715 19.2474 25.2715C19.3008 25.2715 19.3552 25.2629 19.4087 25.2442C23.3536 23.8813 26.0033 20.1326 26.0033 15.915Z"
            fill="white"
          />
          <path
            d="M22.2204 4.03976C21.9667 3.93205 21.6735 4.05038 21.5651 4.30778C21.4577 4.56518 21.5761 4.86203 21.8303 4.97126C26.1778 6.8388 28.9868 11.1352 28.9868 15.9156C28.9868 20.8598 26.0429 25.2103 21.4872 26.9975C21.2299 27.0986 21.1021 27.3914 21.2019 27.6518C21.2784 27.8521 21.4677 27.975 21.668 27.975C21.7279 27.975 21.7888 27.9644 21.8483 27.9411C26.7916 26.0007 29.9858 21.2805 29.9858 15.9156C29.9858 10.7281 26.9375 6.0666 22.2204 4.03976Z"
            fill="white"
          />
          <path
            d="M21.5075 15.9153C21.5075 12.8953 19.5051 10.1999 16.6381 9.36043C16.3734 9.28407 16.0966 9.43729 16.0197 9.70632C15.9433 9.97435 16.0956 10.255 16.3614 10.3324C18.8033 11.0469 20.509 13.3428 20.509 15.9153C20.509 18.4878 18.8033 20.7837 16.3614 21.4982C16.0961 21.5756 15.9433 21.8562 16.0197 22.1243C16.0832 22.3458 16.2824 22.4899 16.4997 22.4899C16.5457 22.4899 16.5921 22.4833 16.6381 22.4702C19.5056 21.6302 21.5075 18.9348 21.5075 15.9153Z"
            fill="white"
          />
          <path
            d="M14.1058 0.0733136C13.8416 -0.0681847 13.5298 -0.00135217 13.3189 0.243478L5.82887 8.8892H0.727296C0.325296 8.8892 0 9.28678 0 9.77803V22.2223C0 22.7136 0.325296 23.1112 0.727296 23.1112H5.82887L13.3189 31.7569C13.4567 31.9167 13.6364 32 13.8182 32C13.9155 32 14.0136 31.9766 14.1059 31.9271C14.3729 31.7873 14.5455 31.4662 14.5455 31.1111V0.889303C14.5454 0.534224 14.3729 0.213062 14.1058 0.0733136Z"
            fill="#FDFDFF"
          />
        </svg>
        <input
          type="range"
          max={1}
          min={0}
          step={0.001}
          value={audioRef.current && audioRef.current.volume}
          onChange={volumeChange}
        />
      </Volume>

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
