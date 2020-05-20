import * as React from "react";
import styled from 'styled-components';
//import Footer from '../Footer';

interface Props {}

const Container = styled.div`
    flex:50;
    background: yellow;
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
  padding: 0.5rem 1.5rem;
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
    background : white;
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

const TagContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem 1.5rem;
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

const MusicianSection = (props: Props) => { 

    const tags = ["스포츠", "기술", "게임", "시즌"];
    return (
        <Container>
            <LeftContainer>
                <ProfileContainer>
                    <Circle>
                        <Profile></Profile>
                    </Circle>
                    <Info>
                        <Name>이름</Name>
                        <Introduction>소개</Introduction>
                    </Info>
                </ProfileContainer>
                <TagContainer>
                    {tags.map((tag)=>{
                        return <Tag key={tag.toString()}>{tag}</Tag>
                    })}
                </TagContainer>
            </LeftContainer>
            <RightContainer>
                <SpecialNote>
                    빠른 작업/3분이상/효과음/보컬 곡 작곡
                </SpecialNote>
            </RightContainer>
        </Container>
    )
  
};

export default MusicianSection;
