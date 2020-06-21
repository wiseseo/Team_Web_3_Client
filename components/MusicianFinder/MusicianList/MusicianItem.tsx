import * as React from "react";
import styled from "styled-components";
import PlayButton from "../../AudioPlayer/PlayButton";

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

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: #121212;
  /*background-color: red;*/
  border-radius: 8px;
  height: 120px;
  margin-bottom: 1rem;
  min-width: 765px;
`;

const PlayerContainer = styled.div`
  flex: 8;
  /*background: blue;*/
  /*background: #121212;*/
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    background: rgba(43, 43, 43, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const AlbumCover = styled.div`
    width : 80px;
    height : 80px;
    background : white;
    background-image: url("${({ src }: { src: string }) => src}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size : contain;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius : 0.25rem;
`;

const MusicianContainer = styled.div`
  flex: 50;
  /*background: yellow;*/
  /*background: #121212;*/
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const ProfileContainer = styled.div`
  /*flex: 3;*/
  display: flex;
  padding: 0px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-right: auto;
`;
const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin: 8px 0;
`;
const Profile = styled.div`
    width: 100%;
    height: 100%;
    background : white;
    background-image: url("${({ src }: { src: string }) => src}");
    background-repeat: no-repeat;
    background-size: contain;
`;
const Name = styled.div`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: bold;
`;
const Introduction = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
  margin: 0px;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
`;

const Tag = styled.li`
  font-size: 0.75rem;
  border: 1px solid #a2a2a2;
  border-radius: 1.25rem;
  /*padding: 0.22rem 0.5rem;*/
  padding: 0.188rem 0.938rem;
  color: #a2a2a2;
  display: block;
  text-align: center;
  margin-right: 0.5rem;
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpecialNote = styled.div`
  font-size: 1rem;
  color: #6865fc;
`;

const LinkContainer = styled.div`
  flex: 12;
  /*background: green;*/
  background: #121212;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ProfileButton = styled.a`
  background-color: #6865fc;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight: bold;

  &:hover {
    background-color: #6865fc;
    color: white;
    border-radius: 4px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-weight: bold;
  }
`;

const Likes = styled.div``;

const MusicianItem = ({
  musician,
  toggleLike,
  selectSong,
  currentSong,
}: Props) => {
  const [isLiked, setLike] = React.useState(false);

  return (
    <Card>
      <PlayerContainer>
        <AlbumCover src={musician.song.cover_url}>
          <PlayButton
            playAudio={() =>
              selectSong(musician.song.id, !musician.song.isPlaying, musician)
            }
            size={48}
            status={
              currentSong.id === musician.song.id
                ? currentSong.isPlaying
                : false
            }
          />
        </AlbumCover>
      </PlayerContainer>
      <MusicianContainer>
        <LeftContainer>
          <ProfileContainer>
            <Circle>
              <Profile src={musician.profile_url} />
            </Circle>
            <Info>
              <Name>{musician.name}</Name>
              <Introduction>{musician.introduction}</Introduction>
            </Info>
          </ProfileContainer>
          <TagContainer>
            {musician.tags.map((tag) => {
              return <Tag key={tag.toString()}>{tag}</Tag>;
            })}
          </TagContainer>
        </LeftContainer>
        <RightContainer>
          <SpecialNote>
            {musician.features.reduce((res, feature) => `${res}/${feature}`)}
          </SpecialNote>
        </RightContainer>
      </MusicianContainer>
      <LinkContainer>
        <ProfileButton>뮤지션 보기</ProfileButton>
        <Likes onClick={() => toggleLike(musician.id)}>
          <img
            src={`/static/like${isLiked ? "d" : ""}.png`}
            alt="like"
            width="24"
            height="24"
            onClick={(event) => setLike((prev) => !prev)}
          />
        </Likes>
      </LinkContainer>
    </Card>
  );
};

export default MusicianItem;
