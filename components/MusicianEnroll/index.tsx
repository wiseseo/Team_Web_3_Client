import * as React from "react";
import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepThree";
import styled from "styled-components";
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
  
    const nextButton = () => {
        setStep(enrollStep+1);
    }

    if(enrollStep == 1){
        stepLayout = <StepOne nextButton ={nextButton}/>
    }
    else if(enrollStep == 2){
        stepLayout = <StepTwo nextButton ={nextButton}/>
    }
    else{
        stepLayout = <StepThree nextButton ={nextButton}/>
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
