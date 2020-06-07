import React, { useReducer } from "react";
import reducer from "./EstimateSheetReducer";

interface stepOne {
  usage : string,
  copyright : string
}

interface stepTwo {
  atmoKindNm : Array<string>,
  atmoKindNmStr : string
}

interface stepThree {
  themeKindNm : Array<string>,
  themeKindNmStr : string
}

interface stepFour {
  genreKindNm : Array<string>,
  genreKindNmStr : string
}

interface stepFive {
  instruKindNm : Array<string>,
  instruKindNmStr : string
}

interface stepSix {
  spclNoteKindNm : Array<string>,
  spclNoteKindNmStr : string
}

interface stepSeven {
  minTime : string,
  maxTime : string
}

interface stepEight {
  intention : string,
  files : Array<any>
}

interface stepNine {
  number : string,
  kakaoId : string
}

interface stepTen {
  deadline : string
}

interface stepEleven { 
  minfee : number,
  maxfee : number
}

const defaultStepOne: stepOne = {
  usage : "",
  copyright : ""
};

const defaultStepTwo: stepTwo = {
  atmoKindNm : [],
  antoKindNmStr : ""
};

const defaultStepThree: stepThree = {
  themeKindNm : [],
  themeKindNmStr : ""
};

const defaultStepFour: stepFour = {
  genreKindNm : [],
  genreKindNmStr : ""
};

const defaultStepFive: stepFive = {
  instruKindNm : [],
  instruKindNmStr : ""
};

const defaultStepSix: stepSix = {
  spclNoteKindNm : [],
  spclNoteKindNmStr : ""
};

const defaultStepSeven: stepSeven = {
  minTime : "",
  maxTime : ""
};

const defaultStepEight: stepEight = {
  intention : "",
  files : []
};

const defaultStepNine: stepNine = {
  number : "",
  kakaoId : ""
};

const defaultStepTen: stepTen = {
  deadline : ""
};

const defaultStepEleven: stepEleven = {
  minfee : 0,
  maxfee : 0
};

interface EstimateStores {
  stepOne : stepOne,
  stepTwo : stepTwo,
  stepThree : stepThree,
  stepFour : stepFour,
  stepFive : stepFive,
  stepSix : stepSix,
  stepSeven : stepSeven,
  stepEight : stepEight,
  stepNine : stepNine,
  stepTen : stepTen,
  stepEleven : stepEleven
}


type ActionType = {
  type: "INSERT_STEPONE" | "INSERT_STEPTWO" | "INSERT_STEPTHREE" | "INSERT_STEPFOUR" | "INSERT_STEPFIVE" |
        "INSERT_STEPSIX" | "INSERT_STEPSEVEN" | "INSERT_STEPEIGHT" | "INSERT_STEPNINE" | "INSERT_STEPTEN" | "INSERT_ELEVEN";
  payload?: any;
};

interface EstimateInterface {
  estimateStores : EstimateStores
  dispatch?: React.Dispatch<ActionType>;
}

const defaultEstimateStroes : EstimateStores = {
  stepOne : defaultStepOne,
  stepTwo : defaultStepTwo,
  stepThree : defaultStepThree,
  stepFour : defaultStepFour,
  stepFive : defaultStepFive,
  stepSix : defaultStepSix,
  stepSeven : defaultStepSeven,
  stepEight : defaultStepEight,
  stepNine : defaultStepNine,
  stepTen : defaultStepTen,
  stepEleven : defaultStepEleven
}


export const EstimateSheetContext = React.createContext<EstimateInterface>({
  estimateStores: defaultEstimateStroes,
});

const EstimateSheetStore = ({ children }: { children: React.ReactElement }) => {
  const [estimateStores, dispatch] = useReducer(reducer, defaultEstimateStroes);

  return (
    <EstimateSheetContext.Provider value={{ estimateStores, dispatch }}>
      {children}
    </EstimateSheetContext.Provider>
  );
};

export default EstimateSheetStore;
