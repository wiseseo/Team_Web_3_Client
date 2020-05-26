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
      {/* <Title>Tuna</Title>

      <ul>
        <NavLi style={{ marginLeft: 0 }}>
          <Link href="/musician/find">
            <a>Musician Find</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="musician/enroll">
            <a>Musician Enroll</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/sign/signin">
            <a>signin Mypage</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/sign/signup">
            <a>signup Mypage</a>
          </Link>
        </NavLi>
      </ul>

      <ul style={{ clear: "both" }}>
        <li style={{ marginLeft: 0 }}>
          <Link href="/musician/find">
            <a>Musician Find</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/match/index">
            <a>match Index</a>
          </Link>
        </li>

        <li>
          <Link href="/musician/searchCtg">
            <a>Musician searchCtg</a>
          </Link>
        </li>

        <li>
          <Link href="/musician/rank">
            <a>Musician Rank</a>
          </Link>
        </li>

        <li>
          <div>새로운 뮤지션</div>
        </li>
        <li>
          <Link href="/musician/portfolio">
            <a>Musician portfolio</a>
          </Link>
        </li>
      </ul> */}

      <SongStore>
        <MainContainer>
          <CurationStore>
            <Header />
          </CurationStore>

          <Banner />
          <SituationList />
          <Category />
          <MusicianStore>
            <MusicianList title="리스너들의 선택" />
          </MusicianStore>
          <MusicianStore>
            <MusicianList title="등장 새로운 뮤지션" />
          </MusicianStore>

          <Footer />
          <AudioPlayer />
        </MainContainer>
      </SongStore>
    </div>
  );
};

export default Index;
