import * as React from "react";
import styled from "styled-components";
import MusicList from "./MusicList";
import { MusicianDetailContext } from "./../../stores/MusicianDetailStore";

interface Props {
  space: number;
}
const Container = styled.div`
  width: 648px;
  padding-top: ${({ space }: { space: number }) => space}px;
`;

const MusicTab = (props: Props) => {
  const { musician } = React.useContext(MusicianDetailContext);
  return (
    <Container id="music-scroll" space={props.space}>
      <MusicList songList={musician.songList} />
    </Container>
  );
};

export default MusicTab;
