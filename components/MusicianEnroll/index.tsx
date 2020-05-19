import * as React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import styled from "styled-components";
// import {MusicianEnrollContext} from "../../stores/MusicianEnrollStore";

interface Props {}

const EnrollContainer = styled.div`
    background: #040104;
    font-family: SpoqaHanSans;
    font-style: normal;
    padding: 0 5em;
`;
const EnrollTitle = styled.div`
    
    font-size : 1.5rem;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: bold;
    color : #E2E1E2;
    line-height: 41px;
    height : 10vh;
    padding-top : 3%;
`;
const MusicianEnroll = (props: Props) => {
    let stepLayout = <></>

    const [enrollStep, setStep] = React.useState<number>(1);
  
    // const enrollData = React.useContext(MusicianEnrollContext);

    // console.log("enrollData : ", enrollData);
    // console.log("enrollStep : ",enrollStep);
    const nextButton = (step : number, object : object) => {
        
        if(step == 1){
            console.log('1 : ', object);    
        }
        else if(step == 2){
            console.log('2 : ', object);
        }
        else if(step == 3){
            console.log('3 : ', object);
        }
        setStep(enrollStep+1);
    }

    if(enrollStep == 1){
        stepLayout = <StepTwo nextButton ={nextButton} />
    }
    else if(enrollStep == 2){
        stepLayout = <StepTwo nextButton ={nextButton} />
    }
    else{
        stepLayout = <StepThree nextButton ={nextButton} />
    }

    return(
        <>
        <EnrollContainer>
            <EnrollTitle>뮤지션 등록</EnrollTitle>
            {stepLayout}
        </EnrollContainer>
        </>
    );
};

export default MusicianEnroll;
