import * as React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Features from "./Features";

interface Props {}
const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 288px;
`;
const Wrapper = styled.div`
  ${({ isFloat }: { isFloat: boolean }) =>
    isFloat ? "position: fixed;top: 16px;" : ""}
`;
const MusicianProfile = (props: Props) => {
  const [isFloat, setFloat] = React.useState(false);
  const profileRef = React.useRef(null);
  React.useEffect(() => {
    const scrollHandler = (event) => {
      if (
        event.srcElement.scrollingElement.scrollTop >
        profileRef.current.offsetTop
      ) {
        setFloat(true);
      } else {
        setFloat(false);
      }
    };
    //window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <Container>
      <Wrapper isFloat={isFloat} ref={profileRef}>
        <ProfileInfo />
        <Features />
      </Wrapper>
    </Container>
  );
};

export default MusicianProfile;
