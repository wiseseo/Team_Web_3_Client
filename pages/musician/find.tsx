import * as React from "react";
import styled from 'styled-components';
import SearchFilter from '../../components/MusicianFinder/SearchFilter';
import MusicianList from '../../components/MusicianFinder/MusicianList';
import FindStore from "../../stores/FindStore";

const MainContainer = styled.div`
  /*display: flex;
  flex-direction: column;
  background-color: #040104;
  justify-content : center;
  align-items : center;*/
  /*background: white;*/
  padding: 0 5em;
  max-width : 1300px;
  min-width : 1000px;
  margin : 0 auto;
  width: 100%;
`;

/*const Contents = styled.div `
  display: flex;
  flex-direction: column;
  /*max-width : 1300px;
  min-width : 1000px;*/
  /*width : 1120px;*/
  //width : 1000%;
  /*@media only screen and (max-width: 1280px) {
    width : 600px;
  }*/
//`;
const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  /*color: #ffffff;
  padding : 80px 400px 48px 0px;*/
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
        {/*<Contents>
          <Title>뮤지션 찾기</Title>
          <SearchFilter/>
          <MusicianList/>
        </Contents>*/}
      </MainContainer>
    </FindStore> 
  );
};

export default Find;