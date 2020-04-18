import * as React from "react";
import styled from 'styled-components';

const SignUpTitle = styled.h1`
  color : black
`;

const SignUp: React.FC = () => {
  return (
    <div>
      <SignUpTitle>SignUp</SignUpTitle>
    </div>
  );
};

export default SignUp;