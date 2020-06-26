import * as React from "react";
import styled from "styled-components";
import { MusicianDetailContext } from "./../../stores/MusicianDetailStore";

interface Props {}
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  background: #121212;
  border-radius: 8px;
  width: 288px;
  margin-top: 1rem;
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
  margin: 0.25rem;
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
  font-weight: bold;
  padding: 0;
`;
const Style = styled.li`
  color: #6865fc;
  font-size: 0.75rem;
  margin: 0 0.5rem;
`;
const FeatureList = ({ features }: { features: string[] }) => {
  return (
    <List>
      {features.map((feature, index) => (
        <Feature key={index}>{feature}</Feature>
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
  const { musician } = React.useContext(MusicianDetailContext);
  const getFetureList = (musician) => {
    let {
      atmosphereList,
      themeList,
      genreList,
      instrumentList,
    } = musician.musicianList;
    atmosphereList = atmosphereList ? atmosphereList : [];
    themeList = themeList ? themeList : [];
    genreList = genreList ? genreList : [];
    instrumentList = instrumentList ? instrumentList : [];
    return [...atmosphereList, ...themeList, ...genreList, ...instrumentList];
  };
  return (
    <Container>
      <Title>뮤지션 대표 특성</Title>
      <FeatureList features={getFetureList(musician)}></FeatureList>
      <Divide />
      <Title>작업 스타일</Title>
      <StyleList
        styles={
          musician.musicianList.specialList
            ? musician.musicianList.specialList
            : []
        }
      ></StyleList>
      <Divide />
      <Title>SNS ID</Title>
      <SNSLink key="facebook">
        <img src="/static/sns_facebook.png" alt="facebook" />
        <LINK>@{musician.musicianList.snsNm}</LINK>
      </SNSLink>
      <SNSLink key="instagram">
        <img src="/static/sns_instagram.png" alt="instagram" />
        <LINK>@{musician.musicianList.snsNm}</LINK>
      </SNSLink>
      <SNSLink key="twitter">
        <img src="/static/sns_twitter.png" alt="twitter" />
        <LINK>@{musician.musicianList.snsNm}</LINK>
      </SNSLink>
      <Divide />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingRight: "1rem",
        }}
      >
        <Title>포트폴리오 사이트</Title>
        {[musician.musicianList.portFolioLink].map((link) => (
          <a href={link} key={link} target="_blank">
            <img src="/static/link.png" alt="link" width={20} height={20} />
          </a>
        ))}
      </div>
    </Container>
  );
};

export default Features;
