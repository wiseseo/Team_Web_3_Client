import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header"
import AudioPlayer from "../../components/AudioPlayer"
//import Footer from "../../components/Footer";
import MusicianFinder from "../../components/MusicianFinder"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #040104;
  justify-content : center;
  align-items : center;
  /*background: white;*/
`;

const Find: React.FC = () => {
  return (
    <>
        <Header/>
        <MainContainer>
          <MusicianFinder/>
        {/*<Footer/>*/}
        </MainContainer>
        {/* <AudioPlayer src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" /> */}
    </>
  );
};

export default Find;