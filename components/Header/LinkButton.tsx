import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface Props {
  text: string;
  type: string;
}

const Button = styled.div`
  color: #b3b4be;
  font-size: 1.125rem;
  cursor: pointer;
  padding: 0.4em 2em;

`;

const LinkButton = ({ text, type }: Props) => {
  if(type=="enroll"){
    return (
    <Link href="/musician/enroll">
      <Button>
        {text}
      </Button>
    </Link>
    )
  }
  else
  {
    return (
    <Link href="/sign/signin">
      <Button>
        {text}
      </Button>
    </Link>
    )
  }
};

export default LinkButton;
