import * as React from "react";
import PlayButton from "./../AudioPlayer/PlayButton";
import styled from "styled-components";

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
const MusicianCard = ({ musician, toggleLike, selectSong }: Props) => {
  return (
    <Card>
      <MusicContainer src={musician.song.cover_url}>
        <Space height={40} />
        <PlayButton
          playAudio={() =>
            selectSong(musician.song.id, !musician.song.isPlaying, musician)
          }
          size={64}
          status={musician.song.isPlaying}
        />
        <MusicInfo>{musician.song.title}</MusicInfo>
      </MusicContainer>
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
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.625 0.5C19.423 0.5 21.0652 1.23969 22.2489 2.58284C23.3781 3.86417 24 5.58017 24 7.41477C24 9.41178 23.2203 11.2692 21.5463 13.2601C20.0502 15.0395 17.8979 16.8736 15.4056 18.9973L15.3969 19.0047C14.4708 19.794 13.5131 20.6101 12.4938 21.5019L12.4631 21.5288C12.3306 21.6448 12.1653 21.7029 12 21.7029C11.8347 21.7029 11.6694 21.6449 11.5369 21.5288L11.5062 21.5019C10.4839 20.6075 9.5237 19.7892 8.59511 18.9979C6.10272 16.8741 3.94978 15.0395 2.45367 13.2601C0.77967 11.2692 0 9.41178 0 7.41477C0 5.58017 0.62189 3.86417 1.75102 2.58289C2.9348 1.23973 4.57697 0.5 6.375 0.5C8.90381 0.5 10.5048 2.01031 11.4026 3.27734C11.6355 3.60612 11.8336 3.9358 12 4.24602C12.1664 3.9358 12.3645 3.60612 12.5974 3.27734C13.4952 2.01031 15.0962 0.5 17.625 0.5Z"
                fill="#3E3E41"
              />
            </svg>

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
    </Card>
  );
};

export default MusicianCard;
