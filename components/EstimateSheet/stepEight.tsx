import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/eight";
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
    width : 90%;
    height : 425px;
    margin : 7% 5%;
`;

const EstimateContentMainSubTitle = styled.div`
    font-size : 1.25rem;
    color : #FFFFFF;
    font-weight : bold;
    clear : both;
    margin-top : 56px;
`;
const EstimateContentMainSubTitleBack = styled.div`
    font-size : 0.75rem;
    color : #B3B4BE;
    margin-top : 8px;
`;

const EstimateContentMainButton = styled.div`
    width : 100%;
    height : 96px;
    text-align : center;
    display: table;
`;

const FormContainerTextarea = styled.textarea`

    margin-top : 18px;
    color : #B3B4BE;
    background: #3E3E41;
    border-radius: 8px;
    padding : 1.5%;
    border : none;
    line-height : 20px;
    width : 97%;
    height : 120px;
    &&{
        ::placeholder {
        color : #181818;
        font-size : 0.75rem;
        }
    }
    &:focus {
        outline : none;
    }
`;

const FormContainerRadioLayout = styled.div`
  color : #B3B4BE;
  font-size : 0.875rem;
  display: flex;
  flex-direction : row;
  position: relative;
  padding: 0 6px;
  margin: 20px 0 0;
  width : 100%;
  margin-bottom : 1%;
`;

const FormContainerRadioLabel = styled.label`
  color: #B3B4BE;
  font-weight: normal;
  cursor : pointer;
  &:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 10px 0 0;
    width: 20px;
    height: 20px;
    border-radius: 11px;
    border: 2px solid #3E3E41;
    background-color: transparent;
  }
`;

const FormContainerRadio = styled.input`
  display : none;

  &:checked + ${FormContainerRadioLabel}:after {
    border-radius: 11px;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 9px;
    left: 10px;
    content: " ";
    display: block;
    background: #6865FC;
  }
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
const index = ({nextButton, beforeButton, object}): React.ReactElement => {


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
            <EstimateSubTitle>기획 의도란?</EstimateSubTitle>
            <EstimateSubDesc>
                어떤 음악을 제작하고 싶은지 원하는 음원에 대해 상세하게 적어주세요. 참고 자료와 링크, 이미지를 첨부해주셔도 좋습니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>음원 기획 의도를 알려주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>음원을 기획하게 된 사유와 상세한 기획 의도에 대해 적어주세요. (2000자)</EstimateContentMainSubTitleBack>
                <FormContainerTextarea
                    placeholder="최소 30자 이상 입력해주세요."
                />
                <FormContainerRadioLayout>

                    <FormContainerRadio type="radio" value={"없음"} name="use" id={"없음"}/> 
                    <FormContainerRadioLabel htmlFor={"없음"}>참고자료 없음</FormContainerRadioLabel>

                </FormContainerRadioLayout>
                
                <FormContainerRadioLayout>

                    <FormContainerRadio type="radio" value={"참고"} name="use" id={"참고"}/> 
                    <FormContainerRadioLabel htmlFor={"참고"}>참고자료 있음</FormContainerRadioLabel>

                </FormContainerRadioLayout>

            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(8, "")}}>이전으로</BeforeButton>
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
                <AfterButton onClick={()=>{nextButton(8, "")}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
                :
                <AfterButton>다음으로</AfterButton>
                }
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
