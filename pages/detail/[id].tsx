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
  let musicianId: string;
  if (Array.isArray(id) && id.length > 0) {
    musicianId = id[0];
  } else if (id) {
    musicianId = `${id}`;
  } else {
    musicianId = "1";
  }
  return (
    <MusicianDetailStore musicianId={musicianId}>
      <Container>
        <MusicianProfile></MusicianProfile>
        <MusicianProfileTab></MusicianProfileTab>
      </Container>
    </MusicianDetailStore>
  );
};

export default Detail;
