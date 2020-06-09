import * as React from "react";
import Login from "../Modal/login";
import Leave from "../Modal/leave";
import Cancel from "../Modal/cancel";
import LoginMusician from "../Modal/loginMusician";
const index = ({onCloseModal, musicianFlag}): React.ReactElement => {

  return (
    <>
    {musicianFlag ? 
    
    <LoginMusician/>
    : 
    <Login/>
    
    }
    
    {/* <Cancel onCloseModal={onCloseModal}/> */}
    {/* <Leave onCloseModal={onCloseModal}/> */}
    </>
  );
};

export default index;
