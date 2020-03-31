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
        src="https://s.pstatic.net/static/www/img/uit/2019/sp_search.svg"
        alt="logo"
      />
      <SearchBar />
      <MatchButton text="뮤지션매칭" />
      <LinkButton text="뮤지션 등록" />
      <LinkButton text="로그인/가입" />
    </HeaderContainer>
  );
};

export default Header;
