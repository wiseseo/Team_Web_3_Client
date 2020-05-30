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
  width: 352px;
  background: #110f11;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
`;
const MusicContainer = styled.div`
  height: 168px;
  background-color: rgba(18,18,18, 0.3);
  background-blend-mode: multiply;
  background-image: url("${({ src }: { src: string }) => src}");
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s background;

  &:hover {
    background-color: transparent;
    background-position: 50% 45%;
    transition: 0.5s background;
  }
  &>button {
    opacity: 0;
    transition: 0.5s opacity;
  }
  &:hover>button {
    opacity: 1;
    transition: 0.5s opacity;
  }
`;
const MusicInfo = styled.div`
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  color: #b3b4be;
  align-self: stretch;
`;
const Space = styled.div`
  height: ${({ height }: { height: number }) => height}px;
  align-self: stretch;
`;
const MusicianInfo = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
`;
const ProfileContainer = styled.div`
  height: 108px;
  display: flex;
  padding: 1rem 1rem;
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
  cursor: pointer;
`;
const Profile = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${({ src }: { src: string }) => src}");
    background-repeat: no-repeat;
    background-size: contain;
`;
const Name = styled.div`
  color: #fdfdff;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  cursor: pointer;
`;
const Introduction = styled.div`
  color: #e2e1e2;
  font-size: 0.75rem;
  margin-top: 0.2rem;
  cursor: pointer;
`;
const Likes = styled.div`
  font-size: 0.75rem;
  color: #3e3e41;
  cursor: pointer;
`;

const MusicianLink = styled.div`
  height: 56px;
  display: flex;
  margin-top: 1rem;
  padding: 1.25rem 1.5rem;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const Features = styled.div`
  font-size: 0.875rem;
  color: #6865fc;
`;

const TagList = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0 1rem;
`;

const Tag = styled.li`
  font-size: 0.75rem;
  box-shadow: 0 0 0 1px #b3b4be inset;
  border-radius: 1.25rem;
  padding: 0.188rem 0.938rem;
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
  font-weight: bold;
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
  const getFeatureString = (features: string[]): string => {
    let str = features.reduce((res, feature) => `${res}/${feature}`);
    return str.length > 16 ? str.substring(0, 16) + "…" : str;
  };
  const [isLiked, setLike] = React.useState(false);
  return (
    <Card>
      <MusicContainer src={musician.song.cover_url}>
        <Space height={32} />
        <PlayButton
          playAudio={() =>
            selectSong(musician.song.id, !musician.song.isPlaying, musician)
          }
          size={56}
          status={
            currentSong.id === musician.song.id ? currentSong.isPlaying : false
          }
        />
        <MusicInfo>{musician.song.title}</MusicInfo>
      </MusicContainer>
      <MusicianInfo>
        <ProfileContainer>
          <Link href="/detail">
            <Circle>
              <Profile src={musician.profile_url} />
            </Circle>
          </Link>
          <Link href="/detail">
            <Info>
              <Name>{musician.name}</Name>
              <Introduction>{musician.introduction}</Introduction>
            </Info>
          </Link>
          <Likes onClick={() => toggleLike(musician.id)}>
            <img
              src={`/static/like${isLiked ? "d" : ""}.png`}
              alt="like"
              width={24}
              height={24}
              onMouseOver={(event) =>
                (event.target.src = `/static/like${
                  isLiked ? "d" : "-hover"
                }.png`)
              }
              onMouseLeave={(event) =>
                (event.target.src = `/static/like${isLiked ? "d" : ""}.png`)
              }
              onClick={(event) => setLike((prev) => !prev)}
            />
            <div>{musician.likes}</div>
          </Likes>
        </ProfileContainer>
        <Tags tags={musician.tags} />
        <Link href="/detail">
          <MusicianLink>
            <Features>{getFeatureString(musician.features)}</Features>
            <ShowButton>뮤지션 보기</ShowButton>
          </MusicianLink>
        </Link>
      </MusicianInfo>
    </Card>
  );
};

export default MusicianCard;
