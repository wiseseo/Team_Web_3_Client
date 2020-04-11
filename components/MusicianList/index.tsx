import * as React from "react";
import styled from "styled-components";
import MusicianCard from "./../MusicianCard";
import { MusicianContext } from "./../../stores/MusicianStore";

interface Props {}

const Slider = styled.ul`
  display: flex;
`;
const Back = styled.div``;
const Next = styled.div``;
const MusicianList = (props: Props) => {
  const { musicianList, dispatch } = React.useContext(MusicianContext);
  return (
    <div>
      뮤지션 리스트
      <Slider>
        <Back>
          <svg
            width="27"
            height="53"
            viewBox="0 0 27 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26 0.987305L1 25.8266L26 51.6594" stroke="#E2E1E2" />
          </svg>
        </Back>
        {musicianList.display.map((musician) => (
          <MusicianCard key={musician.id} musician={musician} />
        ))}
        <Next>
          <svg
            width="27"
            height="53"
            viewBox="0 0 27 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1.02148L26 26.289L1 52.5673" stroke="#6865FC" />
          </svg>
        </Next>
      </Slider>
    </div>
  );
};

export default MusicianList;
