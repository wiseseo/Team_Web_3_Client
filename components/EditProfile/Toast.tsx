import * as React from "react";
import styled from 'styled-components';

interface Props {}

const Container = styled.div`
    background-color: #040104;
    border: 1px solid #6865FC;
    box-sizing: border-box;
    border-radius: 8px;
    width: 224px;
    height: 56px;
    display : flex;
    flex-direction : row;
    justify-content : spcae-evenly;
    align-items : center;

    position: fixed;
    left: 50%;
    top: 15%;
    transform: translate(-50%, -50%);
    transition: .6s ease-in-out;
`;
const Toast = (props: Props) => { 
    return(
        <Container>
            <img src="/static/check.png" alt="check" style={{margin : "10px 10px 10px 20px"}}/>
            <div style={{color: "#B3B4BE", fontSize: "14px", margin: "10px 0px"}}>
                변경사항이 저장되었습니다.
            </div>
        </Container>
    );
};

export default Toast;
