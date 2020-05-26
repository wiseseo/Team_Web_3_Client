import * as React from "react";
import styled from "styled-components";

interface Props {}
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;
  background: #121212;
  border-radius: 8px;
  padding: 1rem;
`;
const ProfileImage = styled.div`
    background-image: url("${({ source }: { source: string }) => source}");
    background-repeat: no-repeat;
    background-size: contain;
    border-radius: 50%;
    width: 3.5rem;
    height: 3.5rem;
    margin: 1.5rem 7.25rem .5rem;
`;
const Name = styled.div`
  color: white;
  font-size: 0.875rem;
  color: #e2e1e2;
`;
const Introduction = styled.div`
  color: white;
  font-size: 0.75rem;
  color: #b3b4be;
  margin: 0.25rem 0 1.5rem;
  max-width: 10rem;
  text-align: center;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;
const Feature = styled.li`
  color: #a2a2a2;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  padding: 0.25em 0.75em;
`;
const Representation = styled.div``;
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <List>
      {features.map((feature) => (
        <Feature>{feature}</Feature>
      ))}
    </List>
  );
};
const Features = (props: Props) => {
  return (
    <Container>
      <Representation>
        <FeatureList
          features={[
            "스포츠",
            "기술",
            "게임",
            "시즌",
            "스포츠",
            "기술",
            "게임",
            "시즌",
          ]}
        ></FeatureList>
      </Representation>
      <ProfileImage source="https://mblogthumb-phinf.pstatic.net/MjAxODAxMjFfNyAg/MDAxNTE2NTEzNDMwNTIz.jhaceEmlCn_SPq5bEgzBVrDyi1gGeF4lRB-KWrRvrC8g.It70Wg4tXXRCpy6HlJdfP_XkTSY2CW3kZbBZE1EEYQ0g.JPEG.kimleeple/170822_%25EA%25B0%259C%25EA%25B8%25B0%25EC%259A%25B1_(1).jpg?type=o_webp" />
      <Name>마약왕</Name>
      <Introduction>일이삼사오육칠팔구십일이삼사오육치랄구십</Introduction>
    </Container>
  );
};

export default Features;
