import * as React from "react";
import styled from "styled-components";
import TabHeader from "./TabHeader";

interface Props {}
const Container = styled.div`
  padding-left: 1.5rem;
  flex: 5;
  display: flex;
  flex-direction: column;
`;
const MusicianProfileTab = (props: Props) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const changeTab = (index: number): void => {
    setTabIndex(index);
  };
  return (
    <Container>
      <TabHeader changeTab={changeTab} selected={tabIndex}></TabHeader>
    </Container>
  );
};

export default MusicianProfileTab;
