import * as React from "react";
import styled from 'styled-components';
import Curation from "../../components/Modal/curation";
const MyPageTitle = styled.h1`
  color : black
`;

const MyPage: React.FC = () => {
  return (
    <div>
      <MyPageTitle>MyPage</MyPageTitle>
      <Curation/>
    </div>
  );
};

export default MyPage;