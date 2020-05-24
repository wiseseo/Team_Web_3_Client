type ActionType = {
    type: "INSERT_STEPONE" | "INSERT_STEPTWO" | "INSERT_STEPTHREE"
    ;
    payload?: any;
  };


interface EnrollTags {
    stepOne_Tag : stepOne,
    stepTwo_Tag : stepTwo,
    stepThree_Tag : stepThree
}
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
    portFolioSubMusic : object;
    
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
const reducer = (enrollTags : EnrollTags, { type, payload }: ActionType) => {
    switch (type) {
        case "INSERT_STEPONE":
            console.log("INSERT_STEPONE", type, payload);
            return {...enrollTags, stepOne_Tag : payload.stepOne_Tag };
            
        case "INSERT_STEPTWO":
            console.log("INSERT_STEPTWO", type, payload);
            return {...enrollTags, stepTwo_Tag : payload.stepTwo_Tag };
        
            case "INSERT_STEPTHREE":
            console.log("INSERT_STEPTHREE", type, payload);
            return {...enrollTags, stepThree_Tag : payload.stepThree_Tag };
        default:
            return;
    }
  };
  
  export default reducer;
  