import * as React from "react";
import styled from 'styled-components';
import SearchFilter from '../../components/MusicianFinder/SearchFilter';
import MusicianList from '../../components/MusicianFinder/MusicianList';
import FindStore from "../../stores/FindStore";

const MainContainer = styled.div`
  /*background: white;*/
  padding: 0 5em;
  max-width : 1300px;
  min-width : 1000px;
  margin : 0 auto;
  width: 100%;
`;

const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  color : #E2E1E2;
  line-height: 41px;
  height : 10vh;
  padding-top : 5em;
  padding-bottom : 4em;
  
`;

const Find: React.FC = () => {
  return (
    <FindStore>
      <MainContainer>
        <Title>뮤지션 찾기</Title>
        <SearchFilter/>
        <MusicianList/>
      </MainContainer>
    </FindStore> 
  );
};

export default Find;