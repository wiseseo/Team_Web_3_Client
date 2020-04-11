import * as React from "react";
import styled from "styled-components";
import MusicianCard from "./../MusicianCard";
import { MusicianContext } from "./../../stores/MusicianStore";

interface Props {
  title: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 72px 320px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: #e2e1e2;
`;

const Title = styled.h1``;
const Slider = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Back = styled.div``;
const Next = styled.div``;
const MusicianList = ({ title }: Props) => {
  const { musicianList, dispatch } = React.useContext(MusicianContext);

  const toggleLike = (id: string) => {
    dispatch({ type: "TOGGLE_LIKE", payload: id });
  };
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <div>더보기</div>
      </Header>
      <Slider>
        <Back onClick={() => dispatch({ type: "PREV_MUSICIANS" })}>
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
          <MusicianCard
            key={musician.id}
            musician={musician}
            toggleLike={toggleLike}
          />
        ))}
        <Next onClick={() => dispatch({ type: "NEXT_MUSICIANS" })}>
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
    </Container>
  );
};

export default MusicianList;
