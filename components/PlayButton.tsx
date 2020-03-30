import * as React from "react";
import styled from "styled-components";

interface Props {
  playAudio: () => void;
}

const Button = styled.button`
  border: 1px solid #e2e1e2;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  aligns-items: center;
`;

const Tri = styled.input.attrs(props => ({ type: "checkbox" }))`
  appearance: none;
  outline: none;
  width: 1em;
  height: 1em;
  position: relative;
  margin-left: 0.1em;
  font-size: 1.4rem;

  &:checked ::before {
    transition: 0.1s;
    height: 1em;
    border-left-width: 0.35em;
    border-top-width: 0em;
    border-bottom-width: 0em;
  }
  &:checked ::after {
    transition: 0.1s;
    height: 1em;
    top: 0;
    border-left-width: 0.35em;
    border-top-width: 0em;
    border-bottom-width: 0em;
  }
  &::before {
    transition: 0.1s;
    content: "";
    display: block;
    height: 0.5em;
    width: 0px;
    border-left: 0.5em solid #e2e1e2;
    border-top: 0.25em solid transparent;
    border-bottom: 0.25em solid transparent;
    position: absolute;
    left: 0;
  }
  &::after {
    transition: 0.1s;
    content: "";
    height: 0px;
    width: 0px;
    border-left: 0.5em solid #e2e1e2;
    border-top: 0.25em solid transparent;
    border-bottom: 0.25em solid transparent;
    position: absolute;
    top: 0.25em;
    right: 0;
  }
`;

const PlayButton = ({ playAudio }: Props): React.ReactElement => {
  return (
    <Button onClick={playAudio}>
      <Tri />
    </Button>
  );
};

export default PlayButton;
