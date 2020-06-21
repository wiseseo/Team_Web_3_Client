import * as React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Banner from "../components/Banner";
import SituationList from "../components/SituationList";
import Category from "../components/Category";
import MusicianList from "../components/MusicianList";
import MusicianStore from "./../stores/MusicianStore";

const Index: React.FC = () => {
  return (
    <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 40px" }}>
      <Banner />
      <Category />
      <MusicianStore>
        <>
          <MusicianList title="리스너들의 선택" type="byRank" />
          <MusicianList title="등장 새로운 뮤지션" type="byNew" />
        </>
      </MusicianStore>
    </div>
  );
};

export default Index;
