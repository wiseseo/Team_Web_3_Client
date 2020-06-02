import * as React from "react";
import styled from "styled-components";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./stepFive";
import StepSix from "./stepSix";
import StepSeven from "./stepSeven";
import StepEight from "./stepEight";
import StepNine from "./stepNine";
import StepTen from "./stepTen";
import StepEleven from "./stepEleven";

interface Props {}

const EstimateContainer = styled.div`
    background: #040104;
    font-family: SpoqaHanSans;
    font-style: normal;
    padding: 0 40px;
    display: flex;
    flex-direction : column;
    min-width : 1050px;
    max-width : 1300px;
    margin : 0 auto;
`;

const EstimateUserInfo = styled.div`
    padding-top : 5%;
    display : flex;
    flex-direction : row;
`;


const EstimateTitle = styled.div`
    color : #E2E1E2;
    font-size : 1.55rem;
    font-weight : bold;
    padding-top : 3%;
`;


const EstimateSheet = (props: Props) => {

    let stepLayout = <></>
    const [enrollStep, setStep] = React.useState<number>(1);


    const nextButton = (step : number, object : object) => {
        
        if(step === 1){
            
        }
        else if(step === 2){
            
        }
        else if(step === 3){
        
        }
        else if(step === 4){
        
        }
        else if(step === 5){
        
        }
        else if(step === 6){
        
        }
        else if(step === 7){
        
        }
        else if(step === 8){
        
        }
        else if(step === 9){
        
        }
        else if(step === 10){
        
        }
        else if(step === 11){
        
        }
        
        setStep(enrollStep+1);
    }

    const beforeButton = (step : number, object : object) => {
        
        if(step === 1){
            
        }
        else if(step === 2){
            
        }
        else if(step === 3){
        
        }
        else if(step === 4){
        
        }
        else if(step === 5){
        
        }
        else if(step === 6){
        
        }
        else if(step === 7){
        
        }
        else if(step === 8){
        
        }
        else if(step === 9){
        
        }
        else if(step === 10){
        
        }
        else if(step === 11){
        
        }
        setStep(enrollStep-1);
    }

    if(enrollStep === 1){
        stepLayout = <StepOne nextButton ={nextButton} object={""} />
    }
    else if(enrollStep === 2){
        stepLayout = <StepTwo nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 3){
        stepLayout = <StepThree nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 4){
        stepLayout = <StepFour nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 5){
        stepLayout = <StepFive nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 6){
        stepLayout = <StepSix nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 7){
        stepLayout = <StepSeven nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 8){
        stepLayout = <StepEight nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 9){
        stepLayout = <StepNine nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 10){
        stepLayout = <StepTen nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    else if(enrollStep === 11){
        stepLayout = <StepEleven nextButton ={nextButton} beforeButton = {beforeButton} object={""} />
    }
    return(
        <>
        <EstimateContainer>
            <EstimateTitle>의뢰서 작성하기</EstimateTitle>
            
            <EstimateUserInfo>
            
                {stepLayout}

            </EstimateUserInfo>
        
        </EstimateContainer>
        </>
    );
};

export default EstimateSheet;
