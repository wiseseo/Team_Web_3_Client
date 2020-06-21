import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 80px;
  cursor: pointer;
`;
const Title = styled.h1`
  color: #e2e1e2;
  margin-bottom: 2rem;
  font-weight: bold;
  font-size: 1.375rem;
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
  height: 116px;
  padding: 24px;
  font-size: 18px;
  background-image: url("${({ source }: { source: string }) => source}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #e2e1e2;
  border-radius: 8px;
  transition: 0.4s background;
  &:hover {
    transition: 0.4s background;
    background-position:right center;
  }
`;

const Category = (props: Props) => {
  return (
    <Container>
      <Title>카테고리</Title>
      <CardList>
        <Link href="/musician/find">
          <Card source="/static/categori1.png">분위기</Card>
        </Link>
        <Link href="/musician/find">
          <Card source="/static/categori2.png">테마</Card>
        </Link>
        <Link href="/musician/find">
          <Card source="/static/categori3.png">장르</Card>
        </Link>
        <Link href="/musician/find">
          <Card source="/static/categori4.png">악기</Card>
        </Link>
      </CardList>
    </Container>
  );
};

export default Category;
