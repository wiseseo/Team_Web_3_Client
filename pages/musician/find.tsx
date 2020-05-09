import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header"
import AudioPlayer from "../../components/AudioPlayer"
//import Footer from "../../components/Footer";
import MusicianFinder from "../../components/MusicianFinder"

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
`;

const Find: React.FC = () => {
  return (
    <div>
      <MainContainer>
        <Header />
        <MusicianFinder/>
        {/*<Footer/>*/}
        {/* <AudioPlayer src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" /> */}
      </MainContainer>
    </div>
  );
};

export default Find;