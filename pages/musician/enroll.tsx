import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import MusicianEnroll from "../../components/MusicianEnroll";
import CurationStore from "./../../stores/CurationStore"

const EnrollTitle = styled.h1`
  color : black
`;

const Enroll: React.FC = () => {
  return (
    <>

        <CurationStore>
          <Header/>
        </CurationStore>
        <MusicianEnroll/>
        
        <AudioPlayer />
    </>
  );
};

export default Enroll;