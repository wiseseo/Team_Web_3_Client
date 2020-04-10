import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: radial-gradient(
    50.08% 50.08% at 50% 49.92%,
    #1a1623 0%,
    #000000 100%
  );
  position: relative;
`;
const Background = styled.img.attrs(({ src }: { src: string }) => ({ src }))`
  opacity: 0.2;
`;
const Position = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Button = styled.button`
  background: linear-gradient(157.06deg, #6865fc 36.28%, #658dfc 100%);
  border-radius: 8px;
  border: none;
  color: #fdfdff;
  font-size: 1.5rem;
  padding: 0.75em 5em;
`;
const Space = styled.div`
  height: 4rem;
`;

interface Props {}

const Banner = (props: Props): React.ReactElement => {
  return (
    <Container>
      <Background src="/banner.png" />
      <Position>
        <Space></Space>
        <Button>뮤지션 매칭하기</Button>
      </Position>
    </Container>
  );
};

export default Banner;
