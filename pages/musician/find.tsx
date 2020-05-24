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

`;

const Contents = styled.div `
  display: flex;
  flex-direction: column;
  /*padding-right : 25rem;
  padding-left : 25rem;*/
  width : 1120px;
  max-width : 1120px;
  min-width : 765px;
`;
const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  color: #ffffff;
  padding : 5rem 25rem 3rem 0rem;
  min-width : 765px;
`;

const Find: React.FC = () => {
  return (
    <>
        <Header/>
        <MainContainer>
          <FindStore>
            <Contents>
              <Title>뮤지션 찾기</Title>
              <SearchFilter/>
              <MusicianList/>
              <Footer></Footer>
            </Contents>
          </FindStore>
        {/*<Footer/>*/}
        </MainContainer>
        {/* <AudioPlayer src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" /> */}
    </>
  );
};

export default Find;