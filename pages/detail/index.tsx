import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import MusicianProfile from "../../components/MusicianProfile";
import MusicianProfileTab from "../../components/MusicianProfileTab";

const Detail: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <MusicianProfile></MusicianProfile>
      <MusicianProfileTab></MusicianProfileTab>
    </div>
  );
};

export default Detail;
