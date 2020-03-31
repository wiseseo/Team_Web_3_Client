import React from "react";

interface Props {
  text: string;
}

const LinkButton = ({ text }: Props) => {
  return <div>{text}</div>;
};

export default LinkButton;
