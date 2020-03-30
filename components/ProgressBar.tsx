import * as React from "react";
import styled from "styled-components";

interface Props {
  current: number;
  duration: number;
}
const ProgressWrapper = styled.div`
  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #b3b4be;
    overflow: hidden;
    height: 8px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1px;
      box-shadow: -100vw 0 0 100vw #6865fc;
    }
  }
`;

const ProgressBar = ({ current = 0, duration }: Props): React.ReactElement => {
  return (
    <div>
      <ProgressWrapper>
        <input
          type="range"
          max={duration}
          min={0}
          step={0.01}
          value={current}
        />
      </ProgressWrapper>
      <h2>
        {Math.floor(current / 60)}:{Math.floor(current % 60)}/
        {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </h2>
    </div>
  );
};

export default ProgressBar;
