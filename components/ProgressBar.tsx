import * as React from "react";
import styled from "styled-components";

interface Props {
  current: number;
  duration: number;
}
const ProgressWrapper = styled.div`
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
  }
  progress[value]::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
  progress[value]::-webkit-progress-value:after {
    content: "";
    width: 20px;
    height: 40px;
    position: absolute;
    right: 0;
  }
`;

const ProgressBar = ({ current = 0, duration }: Props): React.ReactElement => {
  return (
    <div>
      <ProgressWrapper>
        <progress max={duration} value={current} />
      </ProgressWrapper>
      <h2>
        {Math.floor(current / 60)}:{Math.floor(current % 60)}/
        {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
      </h2>
    </div>
  );
};

export default ProgressBar;
