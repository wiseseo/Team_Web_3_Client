import * as React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Banner from "../components/Banner";
import SituationList from "../components/SituationList";
import Category from "../components/Category";
import MusicianList from "../components/MusicianList";
import Footer from "../components/Footer";
import AudioPlayer from "../components/AudioPlayer";
import SongStore from "./../stores/SongStore";
import MusicianStore from "./../stores/MusicianStore";
import CurationStore from "./../stores/CurationStore";

const Title = styled.h1`
  color: black;
`;
const NavLi = styled.li`
  float: left;
  margin-left: 5%;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
  max-width: 1300px;
  margin: 0 auto;
`;

const Index: React.FC = () => {
  return (
    <div>
      <Banner />
      <SituationList />
      <Category />
      <MusicianStore>
        <MusicianList title="리스너들의 선택" />
      </MusicianStore>
      <MusicianStore>
        <MusicianList title="등장 새로운 뮤지션" />
      </MusicianStore>
    </div>
  );
};

export default Index;
