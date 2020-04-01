import * as React from "react";
import styled from "styled-components";

interface Props {
  musician: {
    name: string;
    introduction: string;
    tags: string[];
    likes: number;
    profile: string;
    song: {
      title: string;
      cover: string;
      id: string;
    };
    features: string[];
  };
}

const MusicContainer = styled.div``;
const MusicianInfo = styled.div``;

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
    <div>
      <MusicContainer>
        <img src={musician.song.cover} />
        <div>
          {musician.name}-{musician.song.title}
        </div>
      </MusicContainer>
      <MusicianInfo>
        <img src={musician.profile} />
        <div>{musician.name}</div>
        <div>{musician.introduction}</div>
        <div>like{musician.likes}</div>
        <Tags tags={musician.tags} />
        <div>
          {musician.features.reduce((res, feature) => `${res}/${feature}`)}
        </div>
        <button>뮤지션 보기</button>
      </MusicianInfo>
    </div>
  );
};

export default MusicianCard;
