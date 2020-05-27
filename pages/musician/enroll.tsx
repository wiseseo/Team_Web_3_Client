import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import MusicianEnroll from "../../components/MusicianEnroll";
import CurationStore from "./../../stores/CurationStore"
import MusicianEnrollStore from "../../stores/MusicianEnrollStore"
const EnrollTitle = styled.h1`
  color : black
`;

const Enroll: React.FC = () => {
  return (
    <>
        
        <MusicianEnrollStore>
          <MusicianEnroll/>
        </MusicianEnrollStore>
        
        <AudioPlayer />
    </>
  );
};

export default Enroll;