import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/one";
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
`;

const EstimateContentMainSub = styled.div`
    width : 100%;
    height : 525px;
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
const index = ({nextButton , object}): React.ReactElement => {

  return (
    <>
    <EstimateUserInfoData>
                    
        <EstimateMainDesc>튜나 팁</EstimateMainDesc>
        <EstimateSubTitle>사용 용도란?</EstimateSubTitle>
        <EstimateSubDesc>
        {   
            "음악의 사용 범위 및 용도를 말합니다.\n기본적으로 의뢰한 음원의 저작권은 뮤지션에게 귀속되며 저작권을 구매시 가격이 더 올라가게 됩니다.".split("\n").map(function(item, idx) {
                return (
                    <span key={idx}>
                        {item}
                        <br/>
                    </span>
                    )
            })
        }
        </EstimateSubDesc>
        
    </EstimateUserInfoData>
    
    <EstimateContentMain>
        
        <EstimateContentMainTitle>
            <Progress/>
        </EstimateContentMainTitle>
        
        <EstimateContentMainSub>


        </EstimateContentMainSub>
        
        <EstimateContentMainButton>
            <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
            <BeforeButton onClick={()=>{history.back()}}>이전으로</BeforeButton>
            {
            // nickNmFlag === 1 &&
            // introductionFlag === 1 &&
            // (stepOneObj.profileUrl !== {}) &&
            // careerFlag === 1 &&
            // celPhoneFlag === 1 &&
            // (stepOneObj.songEsntlUrl !== {}) &&
            // (stepOneObj.portFolioMainMusic.size !== 0)
            1
            ? 
            <AfterButton onClick={()=>{nextButton(1, "")}} style={{cursor : "pointer", background : "#6865FC"}}>저장하고 다음으로</AfterButton>
            :
            <AfterButton>저장하고 다음으로</AfterButton>
            }
            </div>
        </EstimateContentMainButton>

    </EstimateContentMain>

    </>
  );
};

export default index;
