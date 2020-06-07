import * as React from "react";
import EstimateSheetComponent from "../../components/EstimateSheet";
import EstimateSheetStore from "../../stores/EstimateSheetStore";
const EstimateSheet: React.FC = () => {
  return (
    <>
      <EstimateSheetStore>
        <EstimateSheetComponent/>      
      </EstimateSheetStore>
    </>
  );
};

export default EstimateSheet;