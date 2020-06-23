import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import MusicianProfile from "../../components/MusicianProfile";
import MusicianProfileTab from "../../components/MusicianProfileTab";

const Detail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <MusicianProfile></MusicianProfile>
      <MusicianProfileTab></MusicianProfileTab>
    </div>
  );
};

export default Detail;
