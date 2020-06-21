import * as React from "react";
import styled from "styled-components";

interface Props {
  steps: string[];
}
const Container = styled.ul`
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
const Style = styled.div`
  margin-bottom: 1rem;
`;
const Title = styled.h3`
  font-size: 0.875rem;
  color: #b3b4be;
  font-weight: bold;
`;
const Content = styled.p`
  color: #b3b4be;
  line-height: 1.75rem;
`;
const WorkingStep = ({ steps }: Props) => {
  return (
    <Container>
      {steps.map((step, index) => (
        <Style>
          <Title>{index + 1}step</Title>
          <Content>{step}</Content>
        </Style>
      ))}
    </Container>
  );
};

export default WorkingStep;
