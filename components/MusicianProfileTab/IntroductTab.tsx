import * as React from "react";
import styled from "styled-components";
import MusicianStyle from "./MusicianStyle";
import WorkingStep from "./WorkingStep";
import { MusicianDetailContext } from "./../../stores/MusicianDetailStore";

interface Props {
  space: number;
}
const Container = styled.div`
  margin-top: 1rem;
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
  padding-top: ${({ space }: { space: number }) => space}px;
  width: 648px;
`;
const Title = styled.h3`
  color: #6865fc;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const Introduct = styled.p`
  color: #b3b4be;
  line-height: 1.75rem;
`;
const IntroductTab = (props: Props) => {
  const { musician } = React.useContext(MusicianDetailContext);
  const tabList = ["음악리스트", "뮤지션 소개", "가격 정보"];
  const styles = [
    {
      title: "이런 테마의 작업이 가능합니다.",
      features: musician.musicianList.themeList
        ? musician.musicianList.themeList
        : [],
    },
    {
      title: "이런 장르의 작업이 가능합니다.",
      features: musician.musicianList.genreList
        ? musician.musicianList.genreList
        : [],
    },
    {
      title: "이런 분위기의 작업이 가능합니다.",
      features: musician.musicianList.atmosphereList
        ? musician.musicianList.atmosphereList
        : [],
    },
    {
      title: "이런 악기를 사용한 작업이 가능합니다",
      features: musician.musicianList.instrumentList
        ? musician.musicianList.instrumentList
        : [],
    },
  ];
  const steps = [
    musician.musicianList.workStage01,
    musician.musicianList.workStage02,
    musician.musicianList.workStage03,
  ];
  return (
    <Container id="introduct-scroll" space={props.space}>
      <Title>뮤지션의 스타일은?</Title>
      <MusicianStyle styles={styles} />
      <Title>당신은 어떤 뮤지션인가요?</Title>
      <Introduct>{musician.musicianList.introduction}</Introduct>
      <Title>작업 단계는 어떻게 되나요?</Title>
      <WorkingStep steps={steps} />
    </Container>
  );
};

export default IntroductTab;
