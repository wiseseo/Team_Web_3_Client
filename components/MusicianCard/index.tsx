import * as React from "react";
import PlayButton from "./../AudioPlayer/PlayButton";
import styled from "styled-components";
import Link from "next/link";

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
interface Props {
  musician: Musician;
  toggleLike: (id: string) => void;
  selectSong: (id: string, status: boolean, musician: Musician) => void;
  currentSong: Song;
}
const Card = styled.li`
  width: 392px;
  background: #110f11;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  overflow: hidden;
`;
const MusicContainer = styled.div`
  height: 176px;
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
  padding: 1em 2em;
  font-size: 0.75rem;
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
  padding: 1rem 1.5rem;
  justify-content: space-between;
  align-items: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
  margin-right: auto;
`;
const Circle = styled.div`
  width: 2rem;
  height: 2rem;
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
  font-size: 0.875rem;
`;
const Introduction = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
  margin: 0.2rem 0;
`;
const Likes = styled.div`
  font-size: 0.875rem;
  color: #3e3e41;
  margin: 0.5rem 0;
`;

const MusicianLink = styled.div`
  flex: 2;
  display: flex;
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  justify-content: space-between;
  align-items: center;
`;
const Features = styled.div`
  font-size: 0.875rem;
  color: #6865fc;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0 1.5rem;
`;

const Tag = styled.li`
  font-size: 0.875rem;
  border: 1px solid #b3b4be;
  border-radius: 1.375rem;
  padding: 0.375rem 0.5rem;
  color: #b3b4be;
  display: block;
  text-align: center;
  margin-right: 0.5rem;
`;

const ShowButton = styled.button`
  background: #6865fc;
  border-radius: 3px;
  padding: 0.2rem 0.6rem;
  border: none;
  color: white;
  font-size: 0.75rem;
`;

const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <TagList>
      {tags.map((tag) => (
        <Tag key={tag.toString()}>{tag}</Tag>
      ))}
    </TagList>
  );
};
const MusicianCard = ({
  musician,
  toggleLike,
  selectSong,
  currentSong,
}: Props) => {
  return (
    <Card>
      <MusicContainer src={musician.song.cover_url}>
        <Space height={40} />
        <PlayButton
          playAudio={() =>
            selectSong(musician.song.id, !musician.song.isPlaying, musician)
          }
          size={64}
          status={
            currentSong.id === musician.song.id ? currentSong.isPlaying : false
          }
        />
        <MusicInfo>{musician.song.title}</MusicInfo>
      </MusicContainer>
      <Link href="/detail">
        <MusicianInfo>
          <ProfileContainer>
            <Circle>
              <Profile src={musician.profile_url} />
            </Circle>
            <Info>
              <Name>{musician.name}</Name>
              <Introduction>{musician.introduction}</Introduction>
            </Info>
            <Likes onClick={() => toggleLike(musician.id)}>
              <img src="/static/like.png" alt="like" />
              <div>{musician.likes}</div>
            </Likes>
          </ProfileContainer>
          <Tags tags={musician.tags} />
          <MusicianLink>
            <Features>
              {musician.features.reduce((res, feature) => `${res}/${feature}`)}
            </Features>
            <ShowButton>뮤지션 보기</ShowButton>
          </MusicianLink>
        </MusicianInfo>
      </Link>
    </Card>
  );
};

export default MusicianCard;
