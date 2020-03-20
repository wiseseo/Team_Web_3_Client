import * as React from "react";
import styled from 'styled-components';

const FindTitle = styled.h1`
  color : black
`;

const Find: React.FC = () => {
  return (
    <div>
      <FindTitle>Find</FindTitle>
    </div>
  );
};

export default Find;