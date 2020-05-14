import React, { useReducer } from "react";
import reducer from "./MusicianEnrollReducer";

interface stepOne {
    nickNm : string;
    introduction? : string;
    career : string;
    celPhone : string;
    portFolioLink : Array<string>;
    sns : Array<{snsNm : string, snsType : number}>;
    songEsntlUrl : string;
    portFolioUrl : string;
    songChcUrl: Array<{songNm : string, songUrl : string}>;
}

type ActionType = {
  type: "INSERT_STEPONE";
  payload?: any;
};

interface TagsInterface {
  stepOne: stepOne;
  dispatch?: React.Dispatch<ActionType>;
}

const defaultStepOne: stepOne = {
    nickNm : "",
    introduction : "",
    career : "",
    celPhone : "",
    portFolioLink : [],
    sns : [],
    songEsntlUrl : "",
    portFolioUrl : "",
    songChcUrl: []
};

export const MusicianEnrollContext = React.createContext<TagsInterface>({
    stepOne: defaultStepOne,
});

const MusicianEnrollStore = ({ children }: { children: React.ReactElement }) => {
  const [stepOne, dispatch] = useReducer(reducer, defaultStepOne);

  return (
    <MusicianEnrollContext.Provider value={{ stepOne, dispatch }}>
      {children}
    </MusicianEnrollContext.Provider>
  );
};

export default MusicianEnrollStore;
