import * as React from "react";
import styled from "styled-components";

interface Props {
  changeTab: (index: number) => void;
  selected: number;
}
const Container = styled.div`
  color: #e2e1e2;
  display: flex;
`;
const Tab = styled.div`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "#6865fc" : "transparent"};
  margin-right: 1rem;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;
const TabHeader = ({ changeTab, selected }: Props) => {
  const tabList = ["음악리스트", "뮤지션 소개", "가격 정보"];
  return (
    <Container>
      {tabList.map((tab, index) => (
        <Tab onClick={() => changeTab(index)} isSelected={selected == index}>
          {tab}
        </Tab>
      ))}
    </Container>
  );
};

export default TabHeader;
