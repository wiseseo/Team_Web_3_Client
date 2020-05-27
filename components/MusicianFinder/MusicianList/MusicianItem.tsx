import * as React from "react";
import styled from 'styled-components';


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
  }

const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: #121212;
  /*background-color: red;*/
  border-radius: 8px;
  height : 120px;
  margin-bottom : 1rem;
  min-width : 765px;
`;

const PlayerContainer = styled.div`
    flex:9;
    /*background: blue;*/
    /*background: #121212;*/
    display: flex;
    justify-content : center;
    align-items : center;
`;

const AlbumCover = styled.div`
    width : 80px;
    height : 80px;
    background : white;
    background-image: url("${({ src }: { src: string }) => src}");
    background-repeat: no-repeat;
    background-position: center center;
    background-size : contain;
`;

const MusicianContainer = styled.div`
    flex:50;
    /*background: yellow;*/
    /*background: #121212;*/
    display: flex;
    justify-content : space-between;
    align-items : center;
`;


const LeftContainer = styled.div`
    display: flex;
    flex-direction : column;
    justify-content : space-around;
    align-items : flex-start;
`;

const ProfileContainer = styled.div`
  /*flex: 3;*/
  display: flex;
  padding: 8px 24px;
  justify-content: space-between;
  align-items: center;
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
`;
const Introduction = styled.div`
  color: #e2e1e2;
  font-size: 0.875rem;
  margin: 3.2px 0;
`;

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 8px 24px;
`;

const Tag = styled.li`
  font-size: 0.75rem;
  border: 1px solid #A2A2A2;
  border-radius: 1.25rem;
  padding: 0.25rem 0.5rem;
  color: #A2A2A2;
  display: block;
  text-align: center;
  margin-right: 0.5rem;
`;

const RightContainer = styled.div`
    display: flex;
    justify-content : center;
    align-items : center;
`;

const SpecialNote = styled.div`
  font-size: 1rem;
  color: #6865fc;
`;

const LinkContainer = styled.div`
    flex:11;
    /*background: green;*/
    /*background: #121212;*/
    display: flex;
    justify-content : center;
    align-items : center;
`;

const ProfileButton = styled.a`
    background-color: #6865FC;
    color: white;
    border-radius: 4px;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`;

const MusicianItem = ( {musician }: Props) => { 
    //const tags = ["스포츠", "기술", "게임", "시즌"];
    return (
        <Card>
            <PlayerContainer>
                <AlbumCover src={musician.song.cover_url}> 

                </AlbumCover>
            </PlayerContainer>
            <MusicianContainer>
                <LeftContainer>
                    <ProfileContainer>
                        <Circle>
                            <Profile src={musician.profile_url}/>
                        </Circle>
                        <Info>
                            <Name>{musician.name}</Name>
                            <Introduction>{musician.introduction}</Introduction>
                        </Info>
                    </ProfileContainer>
                    <TagContainer>
                        {musician.tags.map((tag)=>{
                            return <Tag key={tag.toString()}>{tag}</Tag>
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
                <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2489 2.58284C21.0652 1.23969 19.423 0.5 17.625 0.5C15.0962 0.5 13.4952 2.01031 12.5974 3.27734C12.3645 3.60612 12.1664 3.9358 12 4.24602C11.8336 3.9358 11.6355 3.60612 11.4026 3.27734C10.5048 2.01031 8.90381 0.5 6.375 0.5C4.57697 0.5 2.9348 1.23973 1.75102 2.58289C0.621891 3.86417 0 5.58017 0 7.41477C0 9.41178 0.779672 11.2692 2.45367 13.2601C3.94978 15.0395 6.10214 16.8736 8.59453 18.9974C9.52327 19.7889 10.4837 20.6073 11.5062 21.5019L11.5369 21.5288C11.6694 21.6449 11.8347 21.7029 12 21.7029C12.1653 21.7029 12.3306 21.6448 12.4631 21.5288L12.4938 21.5019C13.5163 20.6073 14.4767 19.7889 15.4056 18.9973C17.8979 16.8736 20.0502 15.0395 21.5463 13.2601C23.2203 11.2692 24 9.41178 24 7.41477C24 5.58017 23.3781 3.86417 22.2489 2.58284ZM14.4934 17.9271C13.6928 18.6093 12.8688 19.3115 12 20.0667C11.1312 19.3115 10.3072 18.6094 9.50644 17.927C4.62867 13.7705 1.40625 11.0245 1.40625 7.41477C1.40625 5.92273 1.90336 4.53692 2.80603 3.51266C3.71906 2.47677 4.98652 1.90625 6.375 1.90625C8.30292 1.90625 9.54919 3.09397 10.2551 4.09034C10.8884 4.98397 11.2188 5.88481 11.3315 6.23061C11.4257 6.52006 11.6956 6.71595 12 6.71595C12.3044 6.71595 12.5743 6.52006 12.6685 6.23061C12.7812 5.88481 13.1116 4.98397 13.7449 4.0903C14.4508 3.09397 15.6971 1.90625 17.625 1.90625C19.0135 1.90625 20.2809 2.47677 21.1939 3.51266C22.0966 4.53692 22.5938 5.92273 22.5938 7.41477C22.5938 11.0245 19.3713 13.7705 14.4934 17.9271Z"
                fill="#E2E1E2"
              />
            </svg>
            </LinkContainer>
        </Card>
    )
  
};

export default MusicianItem;
