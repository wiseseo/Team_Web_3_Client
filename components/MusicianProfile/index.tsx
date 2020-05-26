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
  position: sticky;
  top: 16px;
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
