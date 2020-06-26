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
import StepTwelve from "./stepTwelve";
import EstimateResult from "./estimateResult";
import {EstimateSheetContext} from "../../stores/EstimateSheetStore";
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
    const [enrollStep, setStep] = React.useState<number>(10);
    const estimateSheetData = React.useContext(EstimateSheetContext);

    console.log(estimateSheetData.estimateStores);

    const nextButton = (step : number, object : object) => {
        
        if(step === 1){
            estimateSheetData.dispatch({type : "INSERT_STEPONE", payload : {stepOne : object}})   
        }
        else if(step === 2){
            estimateSheetData.dispatch({type : "INSERT_STEPTWO", payload : {stepTwo : object}})   
        }
        else if(step === 3){
            estimateSheetData.dispatch({type : "INSERT_STEPTHREE", payload : {stepThree : object}})   
        }
        else if(step === 4){
            estimateSheetData.dispatch({type : "INSERT_STEPFOUR", payload : {stepFour : object}})   
        }
        else if(step === 5){
            estimateSheetData.dispatch({type : "INSERT_STEPFIVE", payload : {stepFive : object}})   
        }
        else if(step === 6){
            estimateSheetData.dispatch({type : "INSERT_STEPSIX", payload : {stepSix : object}})   
        }
        else if(step === 7){
            estimateSheetData.dispatch({type : "INSERT_STEPSEVEN", payload : {stepSeven : object}})   
        }
        else if(step === 8){
            estimateSheetData.dispatch({type : "INSERT_STEPEIGHT", payload : {stepEight : object}})   
        }
        else if(step === 9){
            estimateSheetData.dispatch({type : "INSERT_STEPNINE", payload : {stepNine : object}})   
        }
        else if(step === 10){
            estimateSheetData.dispatch({type : "INSERT_STEPTEN", payload : {stepTen : object}})   
        }
        else if(step === 11){
            estimateSheetData.dispatch({type : "INSERT_ELEVEN", payload : {stepEleven : object}})   
        }
        
        setStep(enrollStep+1);
    }

    const beforeButton = (step : number, object : object) => {
        
        if(step === 2){
            estimateSheetData.dispatch({type : "INSERT_STEPTWO", payload : {stepTwo : object}})   
        }
        else if(step === 3){
            estimateSheetData.dispatch({type : "INSERT_STEPTHREE", payload : {stepThree : object}})   
        }
        else if(step === 4){
            estimateSheetData.dispatch({type : "INSERT_STEPFOUR", payload : {stepFour : object}})   
        }
        else if(step === 5){
            estimateSheetData.dispatch({type : "INSERT_STEPFIVE", payload : {stepFive : object}})   
        }
        else if(step === 6){
            estimateSheetData.dispatch({type : "INSERT_STEPSIX", payload : {stepSix : object}})   
        }
        else if(step === 7){
            estimateSheetData.dispatch({type : "INSERT_STEPSEVEN", payload : {stepSeven : object}})   
        }
        else if(step === 8){
            estimateSheetData.dispatch({type : "INSERT_STEPEIGHT", payload : {stepEight : object}})   
        }
        else if(step === 9){
            estimateSheetData.dispatch({type : "INSERT_STEPNINE", payload : {stepNine : object}})   
        }
        else if(step === 10){
            estimateSheetData.dispatch({type : "INSERT_STEPTEN", payload : {stepTen : object}})   
        }
        else if(step === 11){
            estimateSheetData.dispatch({type : "INSERT_ELEVEN", payload : {stepEleven : object}})   
        }
        setStep(enrollStep-1);
    }

    if(enrollStep === 1){
        stepLayout = <StepOne nextButton ={nextButton} object={estimateSheetData.estimateStores.stepOne} />
    }
    else if(enrollStep === 2){
        stepLayout = <StepTwo nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepTwo} />
    }
    else if(enrollStep === 3){
        stepLayout = <StepThree nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepThree} />
    }
    else if(enrollStep === 4){
        stepLayout = <StepFour nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepFour} />
    }
    else if(enrollStep === 5){
        stepLayout = <StepFive nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepFive} />
    }
    else if(enrollStep === 6){
        stepLayout = <StepSix nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepSix} />
    }
    else if(enrollStep === 7){
        stepLayout = <StepSeven nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepSeven} />
    }
    else if(enrollStep === 8){
        stepLayout = <StepEight nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepEight} />
    }
    else if(enrollStep === 9){
        stepLayout = <StepNine nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepNine} />
    }
    else if(enrollStep === 10){
        stepLayout = <StepTen nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepTen} />
    }
    else if(enrollStep === 11){
        stepLayout = <StepEleven nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores.stepEleven} />
    }
    else if(enrollStep === 12){
        stepLayout = <StepTwelve nextButton ={nextButton} beforeButton = {beforeButton} object={estimateSheetData.estimateStores} />
    }
    else if(enrollStep === 13){
        stepLayout = <EstimateResult object={estimateSheetData.estimateStores} />
    }
    return(
        <>
        <EstimateContainer>
            {enrollStep === 13 ?
            <EstimateTitle>보낸 의뢰서 확인</EstimateTitle>
            :
            <EstimateTitle>의뢰서 작성하기</EstimateTitle>
            }
            
            <EstimateUserInfo>
            
                {stepLayout}

            </EstimateUserInfo>
        
        </EstimateContainer>
        </>
    );
};

export default EstimateSheet;
