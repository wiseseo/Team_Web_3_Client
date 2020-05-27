import * as React from "react";
import styled from "styled-components";
import FAQList from "./FAQList";
import PriceGuide from "./PriceGuide";

interface Props {}
const Container = styled.div`
  color: #e2e1e2;
  display: flex;
  flex-direction: column;
  margin-right: 10rem;
`;
const Title = styled.h3`
  color: #6865fc;
`;
const PriceTab = (props: Props) => {
  const guides = [
    {
      type: "StyleA",
      content: `단순 효과음(20초내외)
      피드백 없음
      개인적 용도로만 사용 가능
      (상업적 사용 불가)
      의뢰 완료시 수정요청 1회 가능
      환불 불가환불 불가환불 불가…`,
      price: 30000,
    },
    {
      type: "StyleB",
      content: `단순 효과음(20초내외)
      피드백 없음
      개인적 용도로만 사용 가능
      (상업적 사용 불가)
      의뢰 완료시 수정요청 1회 가능
      환불 불가환불 불가환불 불가…`,
      price: 30000,
    },
    {
      type: "StyleC",
      content: `단순 효과음(20초내외)
      피드백 없음
      개인적 용도로만 사용 가능
      (상업적 사용 불가)
      의뢰 완료시 수정요청 1회 가능
      환불 불가환불 불가환불 불가…`,
      price: 30000,
    },
  ];
  const faqList = [
    {
      question: "자신의 음악 스타일에 어떤 강점이 있나요?",
      asked:
        "한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질문을 하면, 그 질문을 통해 모두가 문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질",
    },
    {
      question: "취소 및 환불 규정이 어떻게 되나요?",
      asked:
        "한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질문을 하면, 그 질문을 통해 모두가 문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질",
    },
    {
      question: "제작한 음원 중 대표곡의 작업 기간은 얼마나 되나요?",
      asked:
        "한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질문을 하면, 그 질문을 통해 모두가 문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질",
    },
    {
      question: "커스터마이징 작곡 서비스의 견적은 어떤 기준으로 산정했나요?",
      asked:
        "한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했습니다. Chapter에 따라 분야를 나눠 놓았고, Chapter와 별개로 공부 방법이나 강의 주제를 벗어난 질문은 따로 정리하였습니다.한 사람이 질문을 하면, 그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 자주 나온 질문 70~80개와 저의 답변을 정리한 PDF 자료집을 준비했그 질문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질문을 하면, 그 질문을 통해 모두가 문을 통해 모두가 배우게 됩니다. 그래서 지금까지 한 사람이 질",
    },
  ];
  return (
    <Container>
      <Title>가격 가이드</Title>
      <PriceGuide guides={guides} />
      <Title>FAQ</Title>
      <FAQList faqList={faqList}></FAQList>
    </Container>
  );
};

export default PriceTab;
