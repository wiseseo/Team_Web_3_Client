import * as React from "react";
import styled from "styled-components";
import TabHeader from "./TabHeader";
import IntroductTab from "./IntroductTab";
import PriceTab from "./PriceTab";
import MusicTab from "./MusicTab";

interface Props {}
const Container = styled.div`
  padding-left: 1.5rem;
  flex: 5;
  display: flex;
  flex-direction: column;
`;
const Content = styled.div`
  height: 3000px;
`;
const MusicianProfileTab = (props: Props) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const changeTab = (index: number): void => {
    setTabIndex(index);
  };
  const TabPages = [<MusicTab />, <IntroductTab />, <PriceTab />];
  return (
    <Container>
      <TabHeader changeTab={changeTab} selected={tabIndex}></TabHeader>
      {TabPages[tabIndex]}
    </Container>
  );
};

export default MusicianProfileTab;
