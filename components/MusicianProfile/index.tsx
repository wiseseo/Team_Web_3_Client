import * as React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Features from "./Features";

interface Props {}
const Container = styled.div`
  color: white;
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-left: 5em;
`;
const MusicianProfile = (props: Props) => {
  const profileRef = React.useRef(null);
  React.useEffect(() => {
    const scrollHandler = (event) => {
      if (
        event.srcElement.scrollingElement.scrollTop >
        profileRef.current.offsetTop
      ) {
        console.log("떠있어야함");
      } else {
        console.log("올라가야함");
      }
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Container ref={profileRef}>
      <ProfileInfo />
      <Features />
    </Container>
  );
};

export default MusicianProfile;
