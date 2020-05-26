import * as React from "react";
import styled from "styled-components";

interface Props {}
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  background: #121212;
  border-radius: 8px;
`;
const List = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 0.5rem;
  margin-top: 0;
`;
const Feature = styled.li`
  color: #a2a2a2;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  padding: 0.25em 0.75em;
  margin: 0.5rem;
`;
const Divide = styled.div`
  height: 0;
  border: 0.74px solid #3e3e41;
  align-self: stretch;
  margin: 0 0.625rem;
`;

const Title = styled.h4`
  color: #b3b4be;
  margin: 1.5rem 1rem 1rem;
`;
const Style = styled.li`
  color: #6865fc;
  font-size: 0.75rem;
  margin: 0 0.5rem;
`;
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <List>
      {features.map((feature) => (
        <Feature>{feature}</Feature>
      ))}
    </List>
  );
};
const StyleList = ({ styles }: { styles: string[] }) => {
  return (
    <List>
      <Style>{styles.join("/")}</Style>
    </List>
  );
};
const SNSLink = styled.div`
  color: #b3b4be;
  font-size: 0.625rem;
  padding: 0 1rem 0.75rem;
  display: flex;
  align-items: center;
`;
const LINK = styled.div`
  margin-left: 0.4rem;
`;
const Features = (props: Props) => {
  return (
    <Container>
      <Title>뮤지션 대표 특성</Title>
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
      <Divide />
      <Title>작업 스타일</Title>
      <StyleList
        styles={[
          "빠른 작업",
          "효과음",
          "빠른 작업",
          "빠른 작업",
          "빠른 작업",
          "사업자등록증",
        ]}
      ></StyleList>
      <Divide />
      <Title>SNS ID</Title>
      <SNSLink>
        <img src="/static/sns_facebook.png" alt="facebook" />
        <LINK>@dkjflajdflajkfd</LINK>
      </SNSLink>
      <SNSLink>
        <img src="/static/sns_instagram.png" alt="instagram" />
        <LINK>@dkjflajdflajkfd</LINK>
      </SNSLink>
      <SNSLink>
        <img src="/static/sns_twitter.png" alt="twitter" />
        <LINK>@dkjflajdflajkfd</LINK>
      </SNSLink>
      <Divide />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "1rem",
        }}
      >
        <Title>포트폴리오 사이트</Title>
        <img src="/static/link.png" alt="link" width={8} height={16} />
      </div>
    </Container>
  );
};

export default Features;
