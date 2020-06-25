import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/twelve";
import {DatePicker} from "antd";
import axios from "axios";
const EstimateUserInfoData = styled.div`
    flex: 0.2;
    color : #E2E1E2;
    padding-right : 7%;
`;


const EstimateMainDesc = styled.div`
    font-size : 1.25rem;
    font-weight : bold;
    color : #6865FC;
    margin-bottom : 24px;
`;

const EstimateSubTitle = styled.div`
    font-size : 1rem;
    color : #B3B4BE;
    font-weight :bold;
    border-bottom: 1px solid  #3E3E41;
    padding-bottom: 5px;
    margin-bottom : 8px;
`;

const EstimateSubDesc = styled.div`
    font-size: 0.875rem;
    line-height : 23px;
    color : #B3B4BE;
`;

const EstimateContentMain = styled.div`
    flex: 0.8;
    background : #121212;
    border-radius : 8px;
    width : 800px;
    height : 693px;

`;

const EstimateContentMainTitle = styled.div`
    width : 100%;
    height : 56px;
    position : relative;
    border-radius: 8px;
    background: #181818;
`;

const EstimateContentMainSub = styled.div`
    width : 90%;
    height : 425px;
    margin : 7% 5%;
    display : table;
`;

const EstimateContentMainSubTitle = styled.div`
    display : table-cell;
    vertical-align : middle;
    text-align : center;
    width : 100%;
    font-size : 1.25rem;
    line-height: 44px;
    color : #FFFFFF;
    font-weight : bold;
    clear : both;
    margin-top : 56px;
`;
const EstimateContentMainButton = styled.div`
    width : 100%;
    height : 96px;
    text-align : center;
    display: table;
`;

const BeforeButton = styled.button`
    background : #121212;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    width : 344px;
    height : 48px;
    border: 0.6px solid #B3B4BE;
    font-size : 1rem;
    font-weight : bold;
    margin-right : 32px;
    cursor : pointer;
`;

const AfterButton = styled.button`
    width : 344px;
    height : 48px;
    background : #B3B4BE;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    border: none;
    font-size : 1rem;
`;
const index = ({nextButton, beforeButton, object}): React.ReactElement => {
  

    const EstimateSend = () => {
        console.log("object : ", object)
        
        let requestObj : object = 
        {
            contractRequestDto : {

                usage : object.stepOne.usage,
                copyright : object.stepOne.copyright,
                minTime : object.stepSeven.minTime,
                maxTime : object.stepSeven.maxTime,
                playTimeChangable : object.stepSeven.select,
                intention : object.stepEight.intention,
                phoneNumber : object.stepNine.number,
                kakaoId : object.stepNine.kakaoId,
                startDate : object.stepTen.deadline[0],
                dueDate : object.stepTen.deadline[1],
                minFee : object.stepEleven.minfee,
                maxFee : object.stepEleven.maxfee
                
                },
                atmo : {
                    tags : object.stepTwo.atmoKindNm,
                    etcTag : object.stepTwo.atmoKindNmStr
                
                },
                theme : {
                    tags : object.stepThree.themeKindNm,
                    etcTag : object.stepThree.themeKindNmStr
                },
                genre : {
                    tags : object.stepFour.genreKindNm,
                    etcTag : object.stepFour.genreKindNmStr
                },
                
                instru : {
                    tags : object.stepFive.instruKindNm,
                    etcTag : object.stepFive.instruKindNmStr
                },
                spclNote : {
                    tags : object.stepSix.spclNoteKindNm,
                    etcTag : ""
                },

                documents : object.stepEight.files,
                
                userId : "",
                musicianId : ""

        }

        console.log("requestObj : ", requestObj)
        // axios.post("http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/contract", requestObj, {withCredentials : true})
        // .then((musicians) =>{
        //     console.log("musicians : ", musicians)
        // })
        // .catch((e) => {
        //     console.log("musicians Catch : ", e);
        // })  
    }
    // console.log(checkBoxList);
    return (
        <>
        <EstimateUserInfoData>
                        
            <img
                src={"/static/Frame.png"}
                alt="vector"
                style={{
                    width : 23,
                    height : 23,
                    borderRadius : "50%",
                    float : "left",
                    marginRight : "3%"
                }}
            />
            <EstimateMainDesc>튜나 팁</EstimateMainDesc>
            <EstimateSubTitle>뮤지션이 수락했는지 어떻게 아나요?</EstimateSubTitle>
            <EstimateSubDesc>
              마이페이지에 가면 뮤지션이 수락했는지 알 수 있어요. 이틀 내에 연락이 오지 않는다면 다른 뮤지션을 찾아 의뢰해보세요!
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                
                <EstimateContentMainSubTitle> 준비 완료! <br/>뮤지션에게 의뢰서를 보내고 <br/>특별한 곡을 받아보세요!</EstimateContentMainSubTitle>
                {/* <EstimateContentMainSubTitle> 뮤지션에게 의뢰서를 보내 곡을 만들어보세요.</EstimateContentMainSubTitle> */}
                
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(12, "")}}>이전으로</BeforeButton>
                 
                <AfterButton onClick={()=>{
                    nextButton(12, "");
                    EstimateSend();
                }}
                
                style={{cursor : "pointer", background : "#6865FC"}}>뮤지션에게 보내기</AfterButton>
                
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
