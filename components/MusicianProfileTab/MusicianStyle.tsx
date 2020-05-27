import * as React from "react";
import styled from "styled-components";

interface Props {
  styles: { title: string; features: string[] }[];
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
`;
const Feature = styled.li`
  font-size: 0.75rem;
  border-radius: 20px;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  padding: 0.375rem 0.75rem;
  margin-right: 0.5rem;
`;
const FeatureList = styled.ul`
  padding: 0;
  display: flex;
  margin: 0;
  list-style: none;
`;
const MusicianStyle = ({ styles }: Props) => {
  return (
    <Container>
      {styles.map((style) => (
        <Style>
          <Title>{style.title}</Title>
          <FeatureList>
            {style.features.map((feature) => (
              <Feature>{feature}</Feature>
            ))}
          </FeatureList>
        </Style>
      ))}
    </Container>
  );
};

export default MusicianStyle;
