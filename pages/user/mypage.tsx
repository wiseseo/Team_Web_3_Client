import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import CurationStore from "./../../stores/CurationStore";
import MyPageComponent from "../../components/Mypage";

const MyPageTitle = styled.h1`
  color : black
`;

const MyPage: React.FC = () => {
  return (
    <>
      <CurationStore>
        <Header/>
      </CurationStore>

      <MyPageComponent/>      

      <AudioPlayer />

    </>
  );
};

export default MyPage;