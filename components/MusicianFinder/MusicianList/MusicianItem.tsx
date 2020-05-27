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
    flex:15;
    /*background: green;*/
    background: #121212;
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

const Likes = styled.div`
  margin-left : 24px;
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
                <Likes>
                  <img src="/static/like.png" alt="like" />
                </Likes>
            </LinkContainer>
        </Card>
    )
  
};

export default MusicianItem;
