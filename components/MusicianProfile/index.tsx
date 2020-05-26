import * as React from "react";
import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";
import Features from "./Features";

interface Props {}
const Container = styled.div`
  color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const MusicianProfile = (props: Props) => {
  return (
    <Container>
      <ProfileInfo />
      <Features />
    </Container>
  );
};

export default MusicianProfile;
