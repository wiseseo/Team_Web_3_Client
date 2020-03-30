import * as React from "react";
import styled from 'styled-components';

const MypageTitle = styled.h1`
  color : black
`;

const Mypage: React.FC = () => {
  return (
    <div>
      <MypageTitle>Mypage</MypageTitle>
    </div>
  );
};

export default Mypage;