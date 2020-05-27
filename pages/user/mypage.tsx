import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import CurationStore from "./../../stores/CurationStore";
import MyPageComponent from "../../components/Mypage";


const MyPage: React.FC = () => {
  return (
    <>

      <MyPageComponent/>      

      <AudioPlayer />

    </>
  );
};

export default MyPage;