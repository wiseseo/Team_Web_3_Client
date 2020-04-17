import * as React from "react";
import Login from "../Modal/login";
import Leave from "../Modal/leave";
import Cancel from "../Modal/cancel";
const index = ({onCloseModal}): React.ReactElement => {

  return (
    // <Cancel onCloseModal={onCloseModal}/>
    <Login/>
    // <Leave onCloseModal={onCloseModal}/>
  );
};

export default index;
