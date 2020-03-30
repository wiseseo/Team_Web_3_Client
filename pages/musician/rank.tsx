import * as React from "react";
import styled from 'styled-components';

const RankTitle = styled.h1`
  color : black
`;

const Rank: React.FC = () => {
  return (
    <div>
      <RankTitle>Rank</RankTitle>
    </div>
  );
};

export default Rank;