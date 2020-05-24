import * as React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import styled from "styled-components";
import {MusicianEnrollContext} from "../../stores/MusicianEnrollStore";
import axios from "axios";
interface Props {}

const EnrollContainer = styled.div`
    background: #040104;
    font-family: SpoqaHanSans;
    font-style: normal;
    padding: 0 5em;
    max-width : 1300px;
    margin : 0 auto;
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
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);

    const enrollData = React.useContext(MusicianEnrollContext);

    const nextButton = (step : number, object : object) => {
        
        if(step === 1){
            enrollData.dispatch({type : "INSERT_STEPONE", payload : {stepOne_Tag : object}})  
        }
        else if(step === 2){
            enrollData.dispatch({type : "INSERT_STEPTWO", payload : {stepTwo_Tag : object}})  
        }
        else if(step === 3){
            enrollData.dispatch({type : "INSERT_STEPTHREE", payload : {stepThree_Tag : object}})  

            console.log("finish Data Set", enrollData.enrollTags);

            const header = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type : application/json, Accept : application/json' }
            axios.post("http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians", enrollData.enrollTags, {headers : header})
            .then((musicians) =>{
                console.log("musicians : ", musicians)
            })
            .catch((e) => {
                console.log("musicians Catch : ", e);
            })

            
        }
        
        setStep(enrollStep+1);
    }

    const beforeButton = (step : number, object : object) => {
        
        if(step === 2){
            console.log('2 : ', object);
            enrollData.dispatch({type : "INSERT_STEPTWO", payload : {stepTwo_Tag : object}})      
        }
        else if(step == 2){
            console.log('3 : ', object);
            enrollData.dispatch({type : "INSERT_STEPTHREE", payload : {stepThree_Tag : object}})  
        }
        setStep(enrollStep-1);
    }

    if(enrollStep == 1){
        stepLayout = <StepOne nextButton ={nextButton} object={enrollData.enrollTags.stepOne_Tag}/>
    }
    else if(enrollStep == 2){
        stepLayout = <StepTwo nextButton ={nextButton} beforeButton = {beforeButton} object={enrollData.enrollTags.stepTwo_Tag}/>
    }
    else{
        stepLayout = <StepThree nextButton ={nextButton} beforeButton = {beforeButton} object={enrollData.enrollTags.stepThree_Tag}/>
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
