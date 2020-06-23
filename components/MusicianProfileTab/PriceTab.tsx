import * as React from "react";
import styled from "styled-components";
import FAQList from "./FAQList";
import PriceGuide from "./PriceGuide";
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
  margin: 2rem 0;
`;
const PriceTab = (props: Props) => {
  const { musician } = React.useContext(MusicianDetailContext);
  const guides = [
    {
      type: "StyleA",
      content: musician.musicianList.styExpln01,
      price: musician.musicianList.styPrc01,
    },
    {
      type: "StyleB",
      content: musician.musicianList.styExpln02,
      price: musician.musicianList.styPrc02,
    },
    {
      type: "StyleC",
      content: musician.musicianList.styExpln03,
      price: musician.musicianList.styPrc03,
    },
  ];
  const faqList = [
    {
      question: "자신의 음악 스타일에 어떤 강점이 있나요?",
      asked: musician.musicianList.qstnAns01,
    },
    {
      question: "취소 및 환불 규정이 어떻게 되나요?",
      asked: musician.musicianList.qstnAns02,
    },
    {
      question: "제작한 음원 중 대표곡의 작업 기간은 얼마나 되나요?",
      asked: musician.musicianList.qstnAns03,
    },
    {
      question: "커스터마이징 작곡 서비스의 견적은 어떤 기준으로 산정했나요?",
      asked: musician.musicianList.qstnAns04,
    },
  ];
  return (
    <Container id="price-scroll" space={props.space}>
      <Title>가격 가이드</Title>
      <PriceGuide guides={guides} />
      <Title>FAQ</Title>
      <FAQList faqList={faqList}></FAQList>
    </Container>
  );
};

export default PriceTab;
