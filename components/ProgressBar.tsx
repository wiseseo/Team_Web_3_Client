import * as React from "react";
import styled from "styled-components";

interface Props {
  current: number;
  duration: number;
  changeCurrent: (value: number) => void;
}
const ProgressWrapper = styled.div`
  span {
    font-size: 1.125rem;
    color: #b3b4be;
  }
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #b3b4be;
    overflow: hidden;
    height: 8px;
    width: 800px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1px;
      box-shadow: -100vw 0 0 100vw #6865fc;
    }
  }
`;

const ProgressBar = ({
  current = 0,
  duration,
  changeCurrent
}: Props): React.ReactElement => {
  const changeHandler = (
    event: React.SyntheticEvent<HTMLInputElement, Event>
  ) => {
    changeCurrent(Number((event.target as HTMLInputElement).value));
  };
  return (
    <div>
      <ProgressWrapper>
        <span>
          {Math.floor(current / 60)}:{Math.floor(current % 60)}
        </span>
        <input
          type="range"
          max={duration}
          min={0}
          step={0.01}
          value={current}
          onChange={changeHandler}
        />
        <span>
          {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </span>
      </ProgressWrapper>
    </div>
  );
};

export default ProgressBar;
