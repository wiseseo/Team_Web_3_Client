import * as React from "react";
import styled from 'styled-components';

const EstimateSheetTitle = styled.h1`
  color : black
`;

const EstimateSheet: React.FC = () => {
  return (
    <div>
      <EstimateSheetTitle>EstimateSheet</EstimateSheetTitle>
    </div>
  );
};

export default EstimateSheet;