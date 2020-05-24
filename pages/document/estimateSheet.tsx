import * as React from "react";
import styled from 'styled-components';
import Header from "../../components/Header";
import AudioPlayer from "../../components/AudioPlayer";
import CurationStore from "./../../stores/CurationStore";
import EstimateSheetComponent from "../../components/EstimateSheet";

const EstimateSheet: React.FC = () => {
  return (
    <>
      <CurationStore>
        <Header/>
      </CurationStore>

      <EstimateSheetComponent/>      

      <AudioPlayer />
    </>
  );
};

export default EstimateSheet;