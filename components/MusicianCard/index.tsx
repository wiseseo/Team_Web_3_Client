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
const Card = styled.li`
  width: 520px;
  height: 464px;
  background: #110f11;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
`;
const MusicContainer = styled.div`
height: 240px;
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
  display: flex;
  flex-direction: column;
`;
const ProfileContainer = styled.div`
  flex: 3;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
const TagLikeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
  margin: 0.5rem 0;
`;
const Profile = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${({ src }: { src: string }) => src}");
    background-repeat: no-repeat;
    background-size: contain;
`;
const Name = styled.div`
  color: #ffffff;
  font-size: 1.125rem;
`;
const Introduction = styled.div`
  color: #e2e1e2;
  font-size: 1.125rem;
  margin: 0.2rem 0;
`;
const Likes = styled.div`
  font-size: 1.125rem;
  color: #6865fc;
  margin: 0.5rem 0;
`;

const MusicianLink = styled.div`
  flex: 2;
  display: flex;
  padding: 1rem 2rem;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  justify-content: space-between;
  align-items: center;
`;
const Features = styled.div`
  font-size: 1.125rem;
  color: #6865fc;
`;

const Tag = styled.li`
  border: 1px solid #e2e1e2;
  border-radius: 2rem;
  padding: 0.2rem 0.6rem;
  color: #e2e1e2;
  display: block;
  text-align: center;
  margin: 0.2rem 0;
`;

const ShowButton = styled.button`
  background: #6865fc;
  border-radius: 10px;
  padding: 0.2rem 0.8rem;
  border: none;
  color: white;
  font-size: 1.125rem;
`;

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <ul>
      {tags.map((tag) => (
        <Tag key={tag.toString()}>{tag}</Tag>
      ))}
    </ul>
  );
};
const MusicianCard = ({ musician }: Props) => {
  return (
    <Card>
      <MusicContainer src={musician.song.cover}>
        <Space height={48} />
        <PlayButton
          playAudio={() => {}}
          size={64}
          status={musician.isPlaying}
        />
        <MusicInfo>
          {musician.name}-{musician.song.title}
        </MusicInfo>
      </MusicContainer>
      <MusicianInfo>
        <ProfileContainer>
          <ProfileInfo>
            <Circle>
              <Profile src={musician.profile} />
            </Circle>
            <Name>{musician.name}</Name>
            <Introduction>{musician.introduction}</Introduction>
          </ProfileInfo>
          <TagLikeInfo>
            <Likes>♡{musician.likes}</Likes>
            <Tags tags={musician.tags} />
          </TagLikeInfo>
        </ProfileContainer>
        <MusicianLink>
          <Features>
            {musician.features.reduce((res, feature) => `${res}/${feature}`)}
          </Features>
          <ShowButton>뮤지션 보기</ShowButton>
        </MusicianLink>
      </MusicianInfo>
    </Card>
  );
};

export default MusicianCard;
