import React from "react";

interface Props {
  text: string;
}

const MatchButton = ({ text }: Props) => {
  return <button>{text}</button>;
};

export default MatchButton;
