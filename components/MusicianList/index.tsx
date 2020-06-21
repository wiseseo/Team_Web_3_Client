import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import MusicianCard from "./../MusicianCard";
import { MusicianContext } from "./../../stores/MusicianStore";
import { SongContext } from "./../../stores/SongStore";

interface Props {
  title: string;
  type: string;
}
interface Song {
  id: string;
  title: string;
  date: string;
  isPlaying: boolean;
  isLike: boolean;
  cover_url: string;
  song_url: string;
}

interface Musician {
  id: string;
  name: string;
  introduction: string;
  tags: string[];
  likes: number;
  profile_url: string;
  features: string[];
  song: Song;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 80px;
  position: relative;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e2e1e2;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #e2e1e2;
  font-weight: bold;
  font-size: 1.375rem;
  padding: 0;
  margin: 0;
`;
const Slider = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Back = styled.div`
  position: absolute;
  left: 40px;
  cursor: pointer;
`;
const Next = styled.div`
  position: absolute;
  right: 40px;
  cursor: pointer;
`;

const MoreButton = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    color: #6865fc;
  }
`;

const MusicianList = ({ title, type }: Props) => {
  const { musicianList, dispatch } = React.useContext(MusicianContext);
  const song = React.useContext(SongContext);
  const toggleLike = (id: string) => {
    dispatch[type]({ type: "TOGGLE_LIKE", payload: id });
  };
  const selectSong = (id: string, status: boolean, musician: Musician) => {
    dispatch[type]({ type: "SELECT_SONG", payload: { id, status } });

    const selectedSong = {
      ...musician.song,
      name: musician.name,
      isPlaying: status,
    };
    song.dispatch({ type: "CHANGE_SONG", payload: selectedSong });
  };
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Link href="/musician/find">
          <MoreButton>더보기</MoreButton>
        </Link>
      </Header>
      <Slider>
        <Back onClick={() => dispatch[type]({ type: "PREV_MUSICIANS" })}>
          <img
            src={`/static/back-${
              musicianList[type].page === 0 ? "dis" : "en"
            }abled.png`}
            width={16}
            height={32}
            alt="next"
          />
        </Back>
        {musicianList[type].display.map((musician) => (
          <MusicianCard
            key={musician.id}
            musician={musician}
            toggleLike={toggleLike}
            selectSong={selectSong}
            currentSong={song.song}
          />
        ))}
        <Next onClick={() => dispatch[type]({ type: "NEXT_MUSICIANS" })}>
          <img
            src={`/static/next-${
              musicianList[type].page < musicianList[type].end - 3
                ? "en"
                : "dis"
            }abled.png`}
            width={16}
            height={32}
            alt="next"
          />
        </Next>
      </Slider>
    </Container>
  );
};

export default MusicianList;
