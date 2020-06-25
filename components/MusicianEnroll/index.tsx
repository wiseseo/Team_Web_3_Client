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
    padding: 0 40px;
    max-width : 1300px;
    min-width : 950px;
    margin : 0 auto;
    width : 100%;
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
            console.log('stepOne : ',object);
            enrollData.dispatch({type : "INSERT_STEPONE", payload : {stepOne_Tag : object}})  
        }
        else if(step === 2){
            enrollData.dispatch({type : "INSERT_STEPTWO", payload : {stepTwo_Tag : object}})  
        }
        else if(step === 3){
            enrollData.dispatch({type : "INSERT_STEPTHREE", payload : {stepThree_Tag : object}})  

            console.log("finish Data Set", enrollData.enrollTags);

            const header = { 'Content-Type' : 'multipart/form-data' };
            let musicArray: any = new FormData();

            musicArray.append('musicianProfileFile', enrollData.enrollTags.stepOne_Tag.profileUrl);
            musicArray.append('portfolioFile', enrollData.enrollTags.stepOne_Tag.songEsntlUrl);
            musicArray.append('mainSongFile', enrollData.enrollTags.stepOne_Tag.portFolioMainMusic);
            for(let i = 0 ; i<enrollData.enrollTags.stepOne_Tag.portFolioSubMusic.length ;i++){
                musicArray.append('subSongFile', enrollData.enrollTags.stepOne_Tag.portFolioSubMusic[i][0]);
            }
            
            for(let key of musicArray.entries()) {
                console.log(key);
            }
            
            let enrollObj = {
                // atmosphereList: {
                //     tagNM: enrollData.enrollTags.stepTwo_Tag.atmoKindNm
                //   },
                //   career: enrollData.enrollTags.stepOne_Tag.career,
                //   cellPhone: enrollData.enrollTags.stepOne_Tag.celPhone,
                //   genreList: {
                //     tagNM: enrollData.enrollTags.stepTwo_Tag.genreKindNm
                //   },
                //   instrumentList: {
                //     tagNM: enrollData.enrollTags.stepTwo_Tag.instruKindNm
                    
                //   },
                //   introduction: enrollData.enrollTags.stepOne_Tag.introduction,
                  multipartFiles: [
                    musicArray
                  ]
                //   nickNm: enrollData.enrollTags.stepOne_Tag.nickNm,
                //   portFolioLink: "enrollData.enrollTags.stepOne_Tag.portFolioLink",
                //   qstnAns01: enrollData.enrollTags.stepTwo_Tag.qstnAns01,
                //   qstnAns02: enrollData.enrollTags.stepTwo_Tag.qstnAns02,
                //   qstnAns03: enrollData.enrollTags.stepTwo_Tag.qstnAns03,
                //   qstnAns04: enrollData.enrollTags.stepTwo_Tag.qstnAns04,
                //   snsNm: "enrollData.enrollTags.stepOne_Tag.sns",
                //   snsType: "0",
                //   specialList: {
                //     tagNM: enrollData.enrollTags.stepTwo_Tag.spclNoteKindNm
                //   },
                //   styExpln01: enrollData.enrollTags.stepThree_Tag.styExpln01,
                //   styExpln02: enrollData.enrollTags.stepThree_Tag.styExpln02,
                //   styExpln03: enrollData.enrollTags.stepThree_Tag.styExpln03,
                //   styPrc01: enrollData.enrollTags.stepThree_Tag.styPrc01,
                //   styPrc02: enrollData.enrollTags.stepThree_Tag.styPrc02,
                //   styPrc03: enrollData.enrollTags.stepThree_Tag.styPrc03,
                //   themeList: {
                //     tagNM: enrollData.enrollTags.stepTwo_Tag.themeKindNm
                //   },
                  
                //   workStage01: enrollData.enrollTags.stepTwo_Tag.workStage01,
                //   workStage02: enrollData.enrollTags.stepTwo_Tag.workStage02,
                //   workStage03: enrollData.enrollTags.stepTwo_Tag.workStage03
            }

            console.log(enrollObj);
            axios.post("http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/musicians", musicArray, {headers : header, withCredentials : true})
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
