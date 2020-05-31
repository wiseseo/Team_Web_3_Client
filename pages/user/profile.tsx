import * as React from "react";
import styled from 'styled-components';
import EditProfile from '../../components/EditProfile';

const MainContainer = styled.div`
  /*background: white;*/
  background-color: #040104;
  width : 100%;
  max-width : 1300px;
  min-width : 1000px;
  margin : 0 auto;
  padding: 0 5em;
`;

const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  color : #E2E1E2;
  line-height: 41px;
  height : 10vh;
  padding-top : 5em;
  padding-bottom : 4em;
  font-weight : bold;
`;


const Profile: React.FC = () => {
  return (
    <MainContainer>
      <Title>프로필 편집</Title>
      <EditProfile/>
    </MainContainer>
  );
};

export default Profile;