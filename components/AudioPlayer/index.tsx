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
      box-shadow: -100vw 0 0 100vw #6865fc;
      background: linear-gradient(138.6deg, #6865fc 36.28%, #658dfc 100%);
    }
  }
`;
const AudioPlayer: React.FC = (): React.ReactElement => {
  const { song, dispatch } = React.useContext(SongContext);
  const [currentTime, setCurrentTime] = React.useState<number>(0);
  const [duration, setDuration] = React.useState<number>(0);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    stopAudio();
    if (song.isPlaying) {
      audioRef.current.play();
    }
  }, [song]);
  const stopAudio = () => {
    if (audioRef.current == null) return;
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  const playAudio = () => {
    if (audioRef.current == null) return;
    if (song.isPlaying) {
      audioRef.current.pause();
      dispatch({ type: "STOP_SONG" });
    } else {
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
          width="25"
          height="22"
          viewBox="0 0 25 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7666 0.5C19.5632 0.5 21.2041 1.23969 22.3869 2.58284C23.5152 3.86417 24.1366 5.58017 24.1366 7.41477C24.1366 9.41178 23.3575 11.2692 21.6848 13.2601C20.1899 15.0395 18.0392 16.8736 15.5489 18.9973L15.5402 19.0047C14.6148 19.794 13.6579 20.6101 12.6394 21.5019L12.6087 21.5288C12.4763 21.6448 12.3111 21.7029 12.1459 21.7029C11.9808 21.7029 11.8156 21.6449 11.6832 21.5288L11.6525 21.5019C10.631 20.6075 9.67156 19.7892 8.74369 18.9979C6.25324 16.8741 4.10198 15.0395 2.60703 13.2601C0.934337 11.2692 0.155273 9.41178 0.155273 7.41477C0.155273 5.58017 0.776679 3.86417 1.90493 2.58289C3.08779 1.23973 4.72868 0.5 6.52531 0.5C9.05215 0.5 10.6519 2.01031 11.549 3.27734C11.7817 3.60612 11.9797 3.9358 12.1459 4.24602C12.3122 3.9358 12.5102 3.60612 12.7429 3.27734C13.64 2.01031 15.2397 0.5 17.7666 0.5Z"
            fill="#3E3E41"
          />
        </svg>
      </Like>
      <Volume>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.2525 11.9365C20.2525 8.77072 18.2611 5.95917 15.2968 4.94006C15.1012 4.87292 14.8881 4.97912 14.8214 5.17748C14.7551 5.37546 14.86 5.59127 15.0559 5.65878C17.716 6.57321 19.5033 9.09614 19.5033 11.9369C19.5033 14.775 17.7194 17.2983 15.0645 18.2154C14.869 18.2829 14.7641 18.4983 14.8311 18.6971C14.8843 18.8545 15.0297 18.9539 15.1855 18.9539C15.2256 18.9539 15.2664 18.9474 15.3065 18.9334C18.2652 17.9112 20.2525 15.0997 20.2525 11.9365Z"
            fill="#3E3E41"
          />
          <path
            d="M17.4153 3.02982C17.225 2.94904 17.0051 3.03779 16.9238 3.23084C16.8433 3.42389 16.932 3.64652 17.1227 3.72844C20.3833 5.1291 22.4901 8.35141 22.4901 11.9367C22.4901 15.6449 20.2822 18.9077 16.8654 20.2481C16.6724 20.324 16.5765 20.5436 16.6515 20.7389C16.7088 20.8891 16.8508 20.9812 17.001 20.9812C17.0459 20.9812 17.0916 20.9733 17.1362 20.9558C20.8437 19.5006 23.2393 15.9604 23.2393 11.9367C23.2393 8.0461 20.9531 4.54995 17.4153 3.02982Z"
            fill="#3E3E41"
          />
          <path
            d="M16.8806 11.9367C16.8806 9.67169 15.3788 7.65016 13.2286 7.02056C13.03 6.96329 12.8225 7.07821 12.7648 7.27999C12.7075 7.481 12.8217 7.6915 13.021 7.74953C14.8525 8.28544 16.1318 10.0073 16.1318 11.9367C16.1318 13.8661 14.8525 15.588 13.021 16.1239C12.8221 16.1819 12.7075 16.3924 12.7648 16.5934C12.8124 16.7596 12.9618 16.8677 13.1248 16.8677C13.1593 16.8677 13.1941 16.8627 13.2286 16.8529C15.3792 16.2229 16.8806 14.2014 16.8806 11.9367Z"
            fill="#3E3E41"
          />
          <path
            d="M11.3294 0.0549852C11.1312 -0.0511385 10.8974 -0.00101413 10.7391 0.182609L5.12165 6.6669H1.29547C0.993972 6.6669 0.75 6.96509 0.75 7.33352V16.6667C0.75 17.0352 0.993972 17.3334 1.29547 17.3334H5.12165L10.7392 23.8177C10.8425 23.9375 10.9773 24 11.1137 24C11.1866 24 11.2602 23.9824 11.3294 23.9453C11.5297 23.8405 11.6591 23.5996 11.6591 23.3333V0.666978C11.6591 0.400668 11.5297 0.159796 11.3294 0.0549852Z"
            fill="#3E3E41"
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
        onLoadedMetadata={(event) => {
          setDuration(audioRef.current.duration);
        }}
        preload="metadata"
        ref={audioRef}
        src={song.song_url}
        onTimeUpdate={updateProgress}
      />
    </AudioContainer>
  );
};

export default AudioPlayer;
