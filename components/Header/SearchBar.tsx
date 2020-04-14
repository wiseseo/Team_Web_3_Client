import * as React from "react";
import styled from "styled-components";

interface Props {}

const InputContainer = styled.div`
  margin-left: 3%;
  width: 30%;
  box-shadow: -2px 0px 10px rgba(88, 90, 107, 0.06);
  margin-right : auto;
  font-size: 1rem;
  min-width : 330px;
`;
const Input = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.placeholder
}))`
  float : left;
  border: none;
  width : 80%;
  color: #b3b4be;
  padding: 0.7em;
  border-radius: 10px;
  background: #ffffff;

`;

const SearchImg = styled.img`
  width : 23px;
  height : 23px;
  cursor : pointer;
  position : relative;
  right: 8%;
  padding-top: 0.3em;
`;
const SearchBar = (props: Props): React.ReactElement => {
  return( 
  <InputContainer>
    <Input placeholder="검색어를 입력해주세요" />
    <SearchImg
        src="/static/questionMark.png"
        alt="questionMark"
        onClick={()=>{location.href="/"}}
      />
  </InputContainer>
  )
};

export default SearchBar;
