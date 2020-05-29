import * as React from "react";
import styled from 'styled-components';
import MusicianEnroll from "../../components/MusicianEnroll";
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
        
    </>
  );
};

export default Enroll;