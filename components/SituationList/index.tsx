import * as React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 320px;
`;
const Title = styled.h1`
  color: white;
`;

const CardList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
`;

const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 287px;
  height: 288px;

  background: #121212;
  border-radius: 8px;
`;

const Question = styled.h2`
  color: #b3b4be;
  width: 125px;
  word-break: keep-all;
  margin: 2rem;
  margin-bottom: 1rem;
`;
const Answer = styled.div`
  color: #b5b5b5;
  font-size: 1.125rem;
  margin: 0 2rem;
`;

const customs = [
  { title: "작품에 필요한가요?", content: "크리에이티브 뮤직 커스텀" },
  { title: "특별한 선물인가요?", content: "이벤트 뮤직 커스텀" },
  { title: "혼자 들으실건가요?", content: "취향맞춤 뮤직 커스텀" },
  { title: "기업 이신가요?", content: "비즈니스 뮤직 커스텀" },
];

const Cards = (): React.ReactElement => (
  <CardList>
    {customs.map(({ title, content }: { title: string; content: string }) => (
      <Card>
        <Question>{title}</Question>
        <Answer>{content}</Answer>
      </Card>
    ))}
  </CardList>
);

const SituationList = (props: Props) => {
  return (
    <Container>
      <Title>상황별 뮤지션을 찾아보세요</Title>
      <Cards />
    </Container>
  );
};

export default SituationList;
