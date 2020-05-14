type ActionType = {
    type: "ONE_TAG" | "TWO_TAG" | "THREE_TAG" | "FOUR_TAG" | "INSERT_TAG";
    payload?: any;
  };
  

interface Tags {
    stepOne_Tag: Array<string>;
    stepTwo_Tag: Array<string>;
    stepThree_Tag: Array<string>;
    stepFour_Tag: Array<string>;

}
  const reducer = (tags: Tags, { type, payload }: ActionType) => {
    switch (type) {
        case "ONE_TAG":
            console.log("Hi", type, payload);
            return { ...tags, stepOne_Tag : payload.tag };
        case "TWO_TAG":
            console.log("Hi", type, payload);
            return { ...tags, stepTwo_Tag : payload.tag };
        case "THREE_TAG":
            console.log("Hi", type, payload);
            return { ...tags, stepThree_Tag : payload.tag };
        case "FOUR_TAG":
            console.log("Hi", type, payload);
            return { ...tags, stepFour_Tag : payload.tag };
        case "INSERT_TAG":
            return { ...tags };
                
        default:
            return;
    }
  };
  
  export default reducer;
  