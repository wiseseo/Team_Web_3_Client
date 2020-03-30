import * as React from "react";
import styled from 'styled-components';

const EnrollTitle = styled.h1`
  color : black
`;

const Enroll: React.FC = () => {
  return (
    <div>
      <EnrollTitle>Enroll</EnrollTitle>
    </div>
  );
};

export default Enroll;