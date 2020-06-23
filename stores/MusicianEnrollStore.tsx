import React, { useReducer } from "react";
import reducer from "./MusicianEnrollReducer";

interface stepOne {

  nickNm : string;
  introduction : string;
  profileUrl : object;
  profilePreview : any;
  career : string;
  celPhone : string;
  portFolioLink : Array<string>;
  addUrl : Array<{key : number, data : string, fixFlag : boolean}>;
  addUrlIdx : number;
  sns : Array<{key : number, id : string}>;
  songEsntlUrl : object;
  songEsntPreview : any;
  portFolioMainMusic : object;
  portFolioSubMusic : Array<object>;
}

interface stepTwo {
    spclNoteKindNm : Array<string>,
    themeKindNm : Array<string>,
    genreKindNm : Array<string>,
    atmoKindNm : Array<string>,
    instruKindNm : Array<string>,
    workStage01 : string,
    workStage02 : string,
    workStage03 : string,
    qstnAns01 : string,
    qstnAns02 : string,
    qstnAns03 : string,
    qstnAns04 : string
}

interface stepThree {
  styPrc01 : string,
  styExpln01 : string,
  styPrc02 : string,
  styExpln02 : string,
  styPrc03 : string,
  styExpln03 : string,
  payMethod : boolean

}

const defaultStepOne: stepOne = {
  nickNm : '',
  introduction: '',
  profileUrl : {},
  profilePreview : '',
  career: '',
  celPhone: '',
  portFolioLink: [],
  addUrl : [{
    key : 0,
    data : "",
    fixFlag : false
  }],
  addUrlIdx : 1,
  sns: [
    {
      key : 1,
      id : ''
    },
    {
      key : 2,
      id : ''
    },
    {
      key : 3,
      id : ''
    },
    {
      key : 4,
      id : ''
    }
  ],
  songEsntlUrl: {},
  songEsntPreview : '',
  portFolioMainMusic: {
    lastModified: 0,
    name: '',
    size: 0,
    type: ''
  },
  portFolioSubMusic : [{
    lastModified: 0,
    name: '',
    size: 0,
    type: ''
  }],
};

const defaultStepTwo: stepTwo = {
    spclNoteKindNm : [],
    themeKindNm : [],
    genreKindNm : [],
    atmoKindNm : [],
    instruKindNm : [],
    workStage01 : "",
    workStage02 : "",
    workStage03 : "",
    qstnAns01 : "",
    qstnAns02 : "",
    qstnAns03 : "",
    qstnAns04 : ""
};

const defaultStepThree: stepThree = {
  styPrc01 : '',
  styExpln01 : '',
  styPrc02 : '',
  styExpln02 : '',
  styPrc03 : '',
  styExpln03 : '',
  payMethod : false
};

interface EnrollTags {
  stepOne_Tag : stepOne,
  stepTwo_Tag : stepTwo,
  stepThree_Tag : stepThree
}


type ActionType = {
  type: "INSERT_STEPONE" | "INSERT_STEPTWO" | "INSERT_STEPTHREE";
  payload?: any;
};

interface TagsInterface {
  enrollTags : EnrollTags
  dispatch?: React.Dispatch<ActionType>;
}

const defaultEnrollTags: EnrollTags = {
  stepOne_Tag : defaultStepOne,
  stepTwo_Tag : defaultStepTwo,
  stepThree_Tag : defaultStepThree,
  
}


export const MusicianEnrollContext = React.createContext<TagsInterface>({
  enrollTags: defaultEnrollTags,
});

const MusicianEnrollStore = ({ children }: { children: React.ReactElement }) => {
  const [enrollTags, dispatch] = useReducer(reducer, defaultEnrollTags);

  return (
    <MusicianEnrollContext.Provider value={{ enrollTags, dispatch }}>
      {children}
    </MusicianEnrollContext.Provider>
  );
};

export default MusicianEnrollStore;
