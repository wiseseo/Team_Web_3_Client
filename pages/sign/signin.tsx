import * as React from "react";
import styled from 'styled-components';

const SignInTitle = styled.h1`
  color : black
`;

const SignIn: React.FC = () => {
  return (
    <div>
      <SignInTitle>SignIn</SignInTitle>
    </div>
  );
};

export default SignIn;