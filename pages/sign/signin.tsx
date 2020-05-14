import * as React from "react";
import styled from 'styled-components';


const SignInTitle = styled.h1`
  color : black
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
`;

const SignIn: React.FC = (open, onClose) => {
  return (
    
    <MainContainer>
      <SignInTitle>SignIn</SignInTitle>
    </MainContainer>
    
  );
};

export default SignIn;