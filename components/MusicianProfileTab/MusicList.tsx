import * as React from "react";
import styled from "styled-components";
import MusicianStyle from "./MusicianStyle";
import WorkingStep from "./WorkingStep";

interface Props {
  songList: {
    title: string;
    coverUrl: string;
    isPlaying?: boolean;
    songUrl: string;
    represent: number;
    multipartFile: string;
  }[];
}
const Container = styled.ul`
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Card = styled.li`
  display: flex;
  background: #181818;
  border-radius: 8px;
  align-items: center;
  margin-top: 1rem;
`;
const AlbumCover = styled.div`
background-image: url("${({ src }: { src: string }) => src}");
background-repeat: no-repeat;
background-position: center center;
background-size : contain;
border-radius: 4px;
margin: 0.5rem;
width: 3rem;
height: 3rem;
margin-left: 1rem;
`;

const Title = styled.div`
  font-size: 0.875rem;
  color: #e2e1e2;
  padding-left: 0.5rem;
`;
const TITLE = styled.div`
  color: #6865fc;
  border-radius: 2px;
  font-size: 0.5rem;
  padding: 0.25rem 0.4rem;
  background: none;
  border: 1px solid #6865fc;
`;
const MusicList = ({ songList }: Props) => {
  return (
    <Container>
      {songList.map((song, index) => (
        <Card key={index}>
          <AlbumCover src={song.coverUrl}></AlbumCover>
          {index == 0 && <TITLE>TITLE</TITLE>}
          <Title>{song.title}</Title>
        </Card>
      ))}
    </Container>
  );
};

export default MusicList;
