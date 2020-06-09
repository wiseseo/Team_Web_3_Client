type ActionType = {
    type: "INSERT_STEPONE" | "INSERT_STEPTWO" | "INSERT_STEPTHREE" | "INSERT_STEPFOUR" | "INSERT_STEPFIVE" |
            "INSERT_STEPSIX" | "INSERT_STEPSEVEN" | "INSERT_STEPEIGHT" | "INSERT_STEPNINE" | "INSERT_STEPTEN" | "INSERT_ELEVEN";
    payload?: any;
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
  }
  
  interface stepSeven {
    minTime : string,
    maxTime : string,
    select : boolean
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
    deadline : Array<string>
  }
  
  interface stepEleven { 
    minfee : number,
    maxfee : number
  }

const reducer = (estimateStores : EstimateStores, { type, payload }: ActionType) => {
    switch (type) {
        case "INSERT_STEPONE":
            console.log("INSERT_STEPONE", type, payload);
            return {...estimateStores, stepOne : payload.stepOne};
            
        case "INSERT_STEPTWO":
            console.log("INSERT_STEPTWO", type, payload);
            return {...estimateStores, stepTwo : payload.stepTwo};
        
        case "INSERT_STEPTHREE":
            console.log("INSERT_STEPTHREE", type, payload);
            return {...estimateStores, stepThree : payload.stepThree};
    
        case "INSERT_STEPFOUR":
            console.log("INSERT_STEPFOUR", type, payload);
            return {...estimateStores, stepFour : payload.stepFour};
          
        case "INSERT_STEPFIVE":
            console.log("INSERT_STEPFIVE", type, payload);
            return {...estimateStores, stepFive : payload.stepFive};
      
        case "INSERT_STEPSIX":
            console.log("INSERT_STEPSIX", type, payload);
            return {...estimateStores, stepSix : payload.stepSix};
    
          
        case "INSERT_STEPSEVEN":
            console.log("INSERT_STEPSEVEN", type, payload);
            if(payload.stepSeven.select === false){
              return {...estimateStores, stepSeven : {minTime : "00:00:00", maxTime : "00:02:30", select : false}};
            }
            return {...estimateStores, stepSeven : {minTime : payload.stepSeven.minTime, maxTime : payload.stepSeven.maxTime, select : true} };
            
        case "INSERT_STEPEIGHT":
            console.log("INSERT_STEPEIGHT", type, payload);
            if(payload.stepEight.select === false){
              return {...estimateStores, stepEight : {intention : payload.stepEight.intention, files : []}};
            }
            return {...estimateStores, stepEight : {intention : payload.stepEight.intention, files : payload.stepEight.files}};
        
        case "INSERT_STEPNINE":
            console.log("INSERT_STEPNINE", type, payload);
            return {...estimateStores, stepNine : payload.stepNine};
    
            
        case "INSERT_STEPTEN":
            console.log("INSERT_STEPTEN", type, payload);
            return {...estimateStores, stepTen : payload.stepTen};
            
        case "INSERT_ELEVEN":
            console.log("INSERT_ELEVEN", type, payload);
            return {...estimateStores, stepEleven : payload.stepEleven};
        
        default:
            return;
    }
  };
  
  export default reducer;
  