import React, { useReducer } from "react";
import reducer from "./CurationReducer";

interface Tags {
  stepOne_Tag: Array<string>;
  stepTwo_Tag: Array<string>;
  stepThree_Tag: Array<string>;
  stepFour_Tag: Array<string>;

}

type ActionType = {
  type: "ONE_TAG" | "TWO_TAG" | "THREE_TAG" | "FOUR_TAG" | "INSERT_TAG";
  payload?: any;
};

interface TagsInterface {
  tags: Tags;
  dispatch?: React.Dispatch<ActionType>;
}

const defaultTags: Tags = {
    stepOne_Tag: [],
    stepTwo_Tag: [],
    stepThree_Tag: [],
    stepFour_Tag: []
};

export const CurationContext = React.createContext<TagsInterface>({
    tags: defaultTags,
});

const CurationStore = ({ children }: { children: React.ReactElement }) => {
  const [tags, dispatch] = useReducer(reducer, defaultTags);

  return (
    <CurationContext.Provider value={{ tags, dispatch }}>
      {children}
    </CurationContext.Provider>
  );
};

export default CurationStore;
