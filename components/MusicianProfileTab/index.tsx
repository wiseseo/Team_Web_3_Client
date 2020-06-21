import * as React from "react";
import styled from "styled-components";
import TabHeader from "./TabHeader";
import IntroductTab from "./IntroductTab";
import PriceTab from "./PriceTab";
import MusicTab from "./MusicTab";

interface Props {}
const Container = styled.div`
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
`;
const MusicianProfileTab = (props: Props) => {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  const [space, setSpace] = React.useState(16);
  const changeTab = (index: number): void => {
    setTabIndex(index);
    setSpace(60);
  };
  const TabRef = React.useRef(null);

  React.useEffect(() => {
    if (window.location.hash) {
      setSpace(60);
    }
    const scrollHandler = (event) => {
      if (
        event.srcElement.scrollingElement.scrollTop < TabRef.current.offsetTop
      ) {
        setSpace(16);
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Container ref={TabRef}>
      <TabHeader changeTab={changeTab} selected={tabIndex}></TabHeader>
      <MusicTab space={space} />
      <IntroductTab space={space} />
      <PriceTab space={space} />
    </Container>
  );
};

export default MusicianProfileTab;
