import * as React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import MatchButton from "./MatchButton";
import LinkButton from "./LinkButton";

interface Props {}

const HeaderContainer = styled.header`
  display: flex;
  background: #040104;
  align-items: center;
  padding: 2em 5em;
  input[type="text"] {
    margin-right: auto;
  }
`;

const Header = (props: Props): React.ReactElement => {
  return (
    <HeaderContainer>
      <img
        src="/static/logo.png"
        alt="logo"
        style={{cursor:"pointer"}}
        onClick={()=>{location.href="/"}}
      />
      <SearchBar />
      <MatchButton text="뮤지션매칭" />
      <LinkButton text="뮤지션 등록"  type="enroll"/>
      <LinkButton text="로그인/가입" type="sign" />
    </HeaderContainer>
  );
};

export default Header;
