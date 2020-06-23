import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import MusicianProfile from "../../components/MusicianProfile";
import MusicianProfileTab from "../../components/MusicianProfileTab";
import MusicianDetailStore from "./../../stores/MusicianDetailStore";

const Container = styled.div`
  display: flex;
  justifycontent: center;
`;
const Detail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <MusicianDetailStore id={id}>
      <Container>
        <MusicianProfile></MusicianProfile>
        <MusicianProfileTab></MusicianProfileTab>
      </Container>
    </MusicianDetailStore>
  );
};

export default Detail;
