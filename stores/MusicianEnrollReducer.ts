type ActionType = {
    type: "INSERT_STEPONE";
    payload?: any;
  };

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
const reducer = (stepOne : stepOne, { type, payload }: ActionType) => {
    switch (type) {
        case "INSERT_STEPONE":
            return {...stepOne};
        default:
            return;
    }
  };
  
  export default reducer;
  