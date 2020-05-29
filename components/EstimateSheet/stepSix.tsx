import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/six";
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

const CheckBoxContainer = styled.div``;

const CheckBoxLayout = styled.div`
    width: 100%;
    margin: 15px auto;
    position: relative;
    display: block;
`;

const CheckBoxLabel = styled.label`

    min-height: 34px;
    display: block;
    padding-left: 40px;
    margin-bottom: 0;
    font-weight: normal;
    cursor: pointer;
    vertical-align: sub;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        margin: 4px;
        width: 22px;
        height: 22px;
        transition: transform 0.28s ease;
        border-radius: 8px;
        border: 2px solid #3E3E41;
        background-color: #3E3E41;
    };

    &:after {
        content: '';
        display: block;
        width: 10px;
        height: 5px;
        border-bottom: 2px solid #6865FC;
        border-left: 2px solid #6865FC;
        -webkit-transform: rotate(-45deg) scale(0);
        transform: rotate(-45deg) scale(0);
        transition: transform ease 0.25s;
        will-change: transform;
        position: absolute;
        top: 12px;
        left: 10px;
    };
`;


const CheckBoxInput = styled.input`
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;
    margin-left: -20px;

    &:checked + ${CheckBoxLabel}:before {
        color: #6865FC;
    };

    &:checked + ${CheckBoxLabel}:after {
        -webkit-transform: rotate(-45deg) scale(1);
        transform: rotate(-45deg) scale(1);
    };
`;


const CheckBoxLabelSpan = styled.span`
    position: absolute;
    top: 50%;

    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    color : #B3B4BE;
`;

const CheckBoxEtcInput = styled.input`
    margin-top : 15px;
    float : left;
    margin-left: 35px;
    width : 328px;
    color : #B3B4BE;
    background: #3E3E41;
    border-radius: 8px;
    border : none;
    height: 32px;
    padding : 0 1.5%;
    &&{
        ::placeholder {
        color : rgba(179, 180, 190, 0.5);
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
  color: #666;
  font-weight: normal;
  cursor : pointer;
  &:before {
    content: " ";
    display: inline-block;
    position: relative;
    top: 5px;
    margin: 0 5px 0 0;
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
    width: 14px;
    height: 14px;
    position: absolute;
    top: 10px;
    left: 11px;
    content: " ";
    display: block;
    background: #6865FC;
  }
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
const index = ({nextButton, beforeButton, object}): React.ReactElement => {

    const [checkBoxArr, setCheckBoxArr] = React.useState([])

    const [checkBoxList, setCheckBoxList] = React.useState([
        {
            label : "보컬(랩 포함)",
            select : false
        },
        {
            label : "빠른 작업",
            select : false
        },
        {
            label : "효과음",
            select : false
        },
        {
            label : "작사(가사 제작)",
            select : false
        },
        {
            label : "신종 작업",
            select : false
        },
        {
            label : "사업자 등록증",
            select : false
        },
        {
            label : "해당사항 없음",
            select : false
        }
    ]);

    const checkBox = (e) => {
        console.log(e.target.value);
        
        
        if(checkBoxArr.includes(e.target.value)){
            let newList = [...checkBoxList];

            for(let i = 0 ; i < checkBoxList.length ; i++){
                if(checkBoxList[i].label === e.target.value){
                    newList[i].select = false;
                }
            }

            setCheckBoxArr(checkBoxArr.filter((item) => item !== e.target.value))
        }
        else{
            let newList = [...checkBoxList];

            for(let i = 0 ; i < checkBoxList.length ; i++){
                if(checkBoxList[i].label === e.target.value){
                    newList[i].select = true;
                }
            }
            setCheckBoxList(newList)
            setCheckBoxArr([...checkBoxArr, e.target.value]);
        }
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
            <EstimateSubTitle>작업 특성이란?</EstimateSubTitle>
            <EstimateSubDesc>
            {   
                "작업에 있어 필요한 세부 사항입니다.\n해당사항이 없을 시 '해당없음'을 눌러주세요.".split("\n").map(function(item, idx) {
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

                <EstimateContentMainSubTitle>다음 중 필요한 작업 특성을 선택해주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>원하는 옵션이 없을 시 해당사항 없음을 선택해주세요.</EstimateContentMainSubTitleBack>
                
                <CheckBoxContainer> 
                    {checkBoxList.map((list, key) => {
                        console.log(list, key);
                        if(list.select === true){

                          return (   
                              <CheckBoxLayout key={key}>
                                  <CheckBoxInput onChange={(e) => {checkBox(e)}} type="checkbox" id={`checkbox${key}`} name="" value={list.label}/>
                                  <CheckBoxLabel htmlFor={`checkbox${key}`}><CheckBoxLabelSpan style={{color : "#6865FC"}}>{list.label}</CheckBoxLabelSpan></CheckBoxLabel>
                              </CheckBoxLayout>
                          );

                        }

                        else{
                            return (
                            <CheckBoxLayout key={key}>
                                <CheckBoxInput onChange={(e) => {checkBox(e)}} type="checkbox" id={`checkbox${key}`} name="" value={list.label}/>
                                <CheckBoxLabel htmlFor={`checkbox${key}`}><CheckBoxLabelSpan>{list.label}</CheckBoxLabelSpan></CheckBoxLabel>
                            </CheckBoxLayout>
                            );
                        }

                    })}
                </CheckBoxContainer>


            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(6, "")}}>이전으로</BeforeButton>
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
                <AfterButton onClick={()=>{nextButton(6, "")}} style={{cursor : "pointer", background : "#6865FC"}}>저장하고 다음으로</AfterButton>
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
