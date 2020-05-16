import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: radial-gradient(
    50.08% 50.08% at 50% 49.92%,
    #1a1623 0%,
    #000000 100%
  );
  overflow: hidden;
  position: relative;
`;
const Background = styled.img.attrs(({ src }: { src: string }) => ({ src }))`
  opacity: 0.5;
`;
const Position = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background: linear-gradient(157.06deg, #6865fc 36.28%, #658dfc 100%);
  border-radius: 8px;
  border: none;
  color: #fdfdff;
  font-size: 1.5rem;
  padding: 1rem 6rem;
`;
const Logo = styled.img``;
const Text = styled.div`
  color: #b3b4be;
  font-size: 1.27rem;
  margin: 1.5rem;
  margin-bottom: 2.5rem;
`;
const Descript = styled.div`
  color: #b3b4be;
  font-size: 0.875rem;
  margin: 1.5rem;
`;

interface Props {}

const Banner = (props: Props): React.ReactElement => {
  return (
    <Container>
      <Background src="/banner.png" />
      <Position>
        <Logo src="/static/tuna.png" alt="logo" />
        <Text>당신의 뮤지션은 누구?</Text>
        <Descript>뮤지션과 함께 커스터마이징 음악을 만들어보세요</Descript>
        <Button>뮤지션 매칭하기</Button>
      </Position>
    </Container>
  );
};

export default Banner;
