import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Button = styled.div`
  color: #b3b4be;
  font-size: 1.125rem;
`;

const LinkButton = ({ text }: Props) => {
  return <Button>{text}</Button>;
};

export default LinkButton;
