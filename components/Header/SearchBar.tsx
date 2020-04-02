import * as React from "react";
import styled from "styled-components";

interface Props {}

const Input = styled.input.attrs(props => ({
  type: "text",
  placeholder: props.placeholder
}))`
  color: #b3b4be;
  padding: 0.4em;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: -2px 0px 10px rgba(88, 90, 107, 0.06);
  border: none;
  font-size: 1.125rem;
`;

const SearchBar = (props: Props): React.ReactElement => {
  return <Input placeholder="검색어를 입력해주세요" />;
};

export default SearchBar;
