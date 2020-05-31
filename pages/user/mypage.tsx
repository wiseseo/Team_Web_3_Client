import * as React from "react";
import MyPageComponent from "../../components/Mypage";
import UserStore from "../../stores/UserStore";

const MyPage: React.FC = () => {
  return (
    <>
      <UserStore>
        <MyPageComponent/>      
      </UserStore>
    </>
  );
};

export default MyPage;