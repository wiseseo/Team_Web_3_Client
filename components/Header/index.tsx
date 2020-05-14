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

const HeaderRightBtn = styled.div`
  min-width: 300px
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
      {/* <SearchBar /> */}
      <div style={{float : "right", width: "100%", minWidth : 480}}>
        <MatchButton />
        <LinkButton text="뮤지션 등록"  type="enroll"/>
        <LinkButton text="로그인/가입" type="sign" />
      </div>
    </HeaderContainer>
  );
};

export default Header;
