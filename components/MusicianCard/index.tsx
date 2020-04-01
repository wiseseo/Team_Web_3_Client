import * as React from "react";
import PlayButton from "./../AudioPlayer/PlayButton";
import styled from "styled-components";

interface Props {
  musician: {
    name: string;
    introduction: string;
    tags: string[];
    likes: number;
    profile: string;
    isPlaying: boolean;
    song: {
      title: string;
      cover: string;
      id: string;
    };
    features: string[];
  };
}
const Card = styled.div`
  width: 520px;
  height: 480px;
  background: #110f11;
  display: flex;
  flex-direction: column;
`;
const MusicContainer = styled.div`
  flex: 1;
  background-image: url("${({ src }: { src: string }) => src}");
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const MusicInfo = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 1rem 2rem;
  font-size: 1.125rem;
  color: #b3b4be;
  align-self: stretch;
`;
const Space = styled.div`
  height: ${({ height }: { height: number }) => height}px;
`;
const MusicianInfo = styled.div`
  flex: 1;
`;
const Profile = styled.div`
    background-image: url("${({ src }: { src: string }) => src}");
`;

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul>
      {tags.map(tag => (
        <li>{tag}</li>
      ))}
    </ul>
  );
};
const MusicianCard = ({ musician }: Props) => {
  return (
    <Card>
      <MusicContainer src={musician.song.cover}>
        <Space height={48} />
        <PlayButton playAudio={() => {}} status={musician.isPlaying} />
        <MusicInfo>
          {musician.name}-{musician.song.title}
        </MusicInfo>
      </MusicContainer>
      <MusicianInfo>
        <Profile src={musician.profile} />
        <div>{musician.name}</div>
        <div>{musician.introduction}</div>
        <div>like{musician.likes}</div>
        <Tags tags={musician.tags} />
        <div>
          {musician.features.reduce((res, feature) => `${res}/${feature}`)}
        </div>
        <button>뮤지션 보기</button>
      </MusicianInfo>
    </Card>
  );
};

export default MusicianCard;
