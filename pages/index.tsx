import * as React from "react";
import styled from 'styled-components';

const Title = styled.h1`
  color : black
`;

const Index: React.FC = () => {
  return (
    <div>
      <Title>My First Next.js Page</Title>
    </div>
  );
};

export default Index;