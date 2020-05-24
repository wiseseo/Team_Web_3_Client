import * as React from "react";
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import CurationStore from "./../../stores/CurationStore";
import MyPageComponent from "../../components/Mypage/musicianMyPage";


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