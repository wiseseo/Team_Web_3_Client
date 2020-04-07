import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
  text: string;
}

const Button = styled.button`
  background: transparent;
  color: #6865fc;
  border: 2px solid #6865fc;
  border-radius: 10px;
  font-size: 1.125rem;
  padding: 0.4em 2em;
  cursor: pointer;

`;

const MatchButton = ({ text }: Props) => {
  return (
    <Link href="/match/index">
      <Button>
        {text}
      </Button> 
    </Link>
  );
};

export default MatchButton;
