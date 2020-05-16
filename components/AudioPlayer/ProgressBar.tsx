import * as React from "react";
import styled from "styled-components";

interface Props {
  current: number;
  duration: number;
  changeCurrent: (value: number) => void;
}
const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  div {
    display: inline-block;
    color: #b3b4be;
    width: 3em;
    &:first-child {
      text-align: right;
    }
    &:last-child {
      text-align: left;
    }
  }
  input[type="range"] {
    margin: 0 1rem;
    -webkit-appearance: none;
    appearance: none;
    background-color: #b3b4be;
    overflow: hidden;
    height: 8px;
    width: 800px;
    border-radius: 2px;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 1px;
      box-shadow: -100vw 0 0 100vw #6865fc;
      background: linear-gradient(138.6deg, #6865fc 36.28%, #658dfc 100%);
    }
  }
`;

const TimeDisplay = ({ value }: { value: number }): React.ReactElement => (
  <div>
    {Math.floor(value / 60)}:{Math.floor(value % 60) < 10 && 0}
    {Math.floor(value % 60)}
  </div>
);

const ProgressBar = ({
  current = 0,
  duration,
  changeCurrent,
}: Props): React.ReactElement => {
  const changeHandler = React.useCallback(
    (event: React.SyntheticEvent<HTMLInputElement, Event>) => {
      changeCurrent(Number((event.target as HTMLInputElement).value));
    },
    []
  );

  return (
    <div>
      <ProgressWrapper>
        <TimeDisplay value={current} />
        <input
          type="range"
          max={duration}
          min={0}
          step={0.01}
          value={current}
          onChange={changeHandler}
        />
        <TimeDisplay value={duration} />
      </ProgressWrapper>
    </div>
  );
};

export default ProgressBar;
