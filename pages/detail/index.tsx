import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import MusicianProfile from "../../components/MusicianProfile";
import MusicianProfileTab from "../../components/MusicianProfileTab";
import SongStore from "../../stores/SongStore";
import CurationStore from "../../stores/CurationStore";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AudioPlayer from "../../components/AudioPlayer";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
  max-width: 1300px;
  margin: 0 auto;
`;
const Detail: React.FC = () => {
  return (
    <SongStore>
      <MainContainer>
        <CurationStore>
          <Header />
        </CurationStore>

        <div style={{ display: "flex" }}>
          <MusicianProfile></MusicianProfile>
          <MusicianProfileTab></MusicianProfileTab>
        </div>
        <Footer />
        <AudioPlayer />
      </MainContainer>
    </SongStore>
  );
};

export default Detail;
