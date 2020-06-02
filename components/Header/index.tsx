import * as React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import MatchButton from "./MatchButton";
import LinkButton from "./LinkButton";

interface Props {}

const HeaderContainer = styled.header`
  background: #040104;
  align-items: center;
  padding: 2em 40px;
  width: 100%;
  min-width: 1000px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
`;

const Header = (props: Props): React.ReactElement => {
  return (
    <HeaderContainer>
      <img
        src="/static/tuna-logotype2.png"
        alt="logo"
        width="127px"
        height="40px"
        style={{ cursor: "pointer", marginRight: "auto" }}
        onClick={() => {
          location.href = "/";
        }}
      />
      <MatchButton />
      <LinkButton text="뮤지션 등록" type="enroll" />
      <LinkButton text="로그인/가입" type="sign" />
    </HeaderContainer>
  );
};

export default Header;
