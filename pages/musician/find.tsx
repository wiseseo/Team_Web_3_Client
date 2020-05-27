import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header"
import AudioPlayer from "../../components/AudioPlayer"
//import Footer from "../../components/Footer";
//import MusicianFinder from "../../components/MusicianFinder"
import SearchFilter from '../../components/MusicianFinder/SearchFilter';
import MusicianList from '../../components/MusicianFinder/MusicianList';
import Footer from '../../components/Footer';
import FindStore from "../../stores/FindStore";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #040104;
  justify-content : center;
  align-items : center;
  /*background: white;*/
  max-width : 1920px;
  min-width : 765px;
  /*@media only screen and (max-width: 765px) {
    width : 765px;
  }*/

`;

const Contents = styled.div `
  display: flex;
  flex-direction: column;
  width : 1120px;
  max-width : 1120px;
  min-width : 765px;
  @media only screen and (max-width: 1280px) {
    width : 600px;
  }
`;
const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  color: #ffffff;
  padding : 80px 400px 48px 0px;
  min-width : 765px;
`;

const Find: React.FC = () => {
  return (
    <MainContainer>
      <FindStore>
        <Contents>
          <Title>뮤지션 찾기</Title>
          <SearchFilter/>
          <MusicianList/>
        </Contents>
      </FindStore>
    </MainContainer>
  );
};

export default Find;