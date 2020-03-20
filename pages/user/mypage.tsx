import * as React from "react";
import styled from 'styled-components';

const MyPageTitle = styled.h1`
  color : black
`;

const MyPage: React.FC = () => {
  return (
    <div>
      <MyPageTitle>MyPage</MyPageTitle>
    </div>
  );
};

export default MyPage;