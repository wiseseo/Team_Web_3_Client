import * as React from "react";
import Audio from "./../components/Audio";
import styled from "styled-components";

const Title = styled.h1`
  color: black;
`;

const Index: React.FC = () => {
  return (
    <div>
      <Title>My First Next.js Page</Title>
      <Audio src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" />
    </div>
  );
};

export default Index;
