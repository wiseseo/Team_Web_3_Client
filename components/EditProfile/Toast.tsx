import * as React from "react";
import styled, {keyframes} from 'styled-components';

interface Props {}

const toast_in_top = keyframes`
    from {
        transform: translate(-50%, 0%px);
    }
    to {
        transform: translate(-50%, 10%);
    }
`;

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
    position : fixed;
    left : 50%;
    top : 15%;
    transform : translate(-50%, -50%);
    transition: tansform 1s ease-in-out;
    animation : ${toast_in_top} 1s;
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
