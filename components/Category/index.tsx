import * as React from "react";
import styled from "styled-components";

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 80px;
`;
const Title = styled.h1`
  color: #e2e1e2;
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
  width: 256px;
  height: 124px;
  padding: 24px;
  font-size: 18px;

  color: #e2e1e2;
  background: #6865fc;
  border-radius: 8px;
`;

const Category = (props: Props) => {
  return (
    <Container>
      <Title>카테고리</Title>
      <CardList>
        <Card>분위기</Card>
        <Card>테마</Card>
        <Card>장르</Card>
        <Card>악기</Card>
      </CardList>
    </Container>
  );
};

export default Category;
