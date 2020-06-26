import * as React from "react";
import styled from "styled-components";

interface Props {
  changeTab: (index: number) => void;
  selected: number;
}
const Container = styled.div`
  color: #e2e1e2;
  display: flex;
  position: sticky;
  top: 0;
  background: black;
`;
const Tab = styled.a`
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "#6865fc" : "transparent"};
  font-weight: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "bold" : "light"};
  margin-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: #e2e1e2;
  &:hover {
    color: #6865fc;
  }
`;
const TabHeader = ({ changeTab, selected }: Props) => {
  const tabList = ["음악리스트", "뮤지션 소개", "가격 정보"];
  const scrollList = ["music-scroll", "introduct-scroll", "price-scroll"];
  return (
    <Container>
      {tabList.map((tab, index) => (
        <Tab
          key={index}
          href={`#${scrollList[index]}`}
          onClick={() => changeTab(index)}
          isSelected={selected == index}
        >
          {tab}
        </Tab>
      ))}
    </Container>
  );
};

export default TabHeader;
