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
const index = ({nextButton , object}): React.ReactElement => {

    const [checkBoxArr, setCheckBoxArr] = React.useState([])

    const [checkBoxList, setCheckBoxList] = React.useState([
        {
            label : "작품이 필요해요.",
            select : false
        },
        {
            label : "특별한 선물을 할거에요.",
            select : false
        },
        {
            label : "혼자 듣기 위한 취향 맞춤 곡이 필요해요.",
            select : false
        },
        {
            label : "비즈니스용 음악이 필요해요.",
            select : false
        },
        {
            label : "기타 (직접입력)",
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

                <EstimateContentMainSubTitle>어떤 용도로 사용할 음악인가요?</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>최소 1개 이상의 항목을 선택해주세요.</EstimateContentMainSubTitleBack>
                
                <CheckBoxContainer> 
                    {checkBoxList.map((list, key) => {
                        console.log(list, key);
                        if(list.select === true){

                            if(list.label === "기타 (직접입력)"){
                                return (
                                    <CheckBoxLayout key={key}>
                                        <CheckBoxInput onChange={(e) => {checkBox(e)}} type="checkbox" id={`checkbox${key}`} name="" value={list.label}/>
                                        <CheckBoxLabel htmlFor={`checkbox${key}`}><CheckBoxLabelSpan style={{color : "#6865FC"}}>{list.label}</CheckBoxLabelSpan></CheckBoxLabel>
                                        <CheckBoxEtcInput />
                                    </CheckBoxLayout>
                                );
                            }
                            else{
                                return (
                                    
                                    <CheckBoxLayout key={key}>
                                        <CheckBoxInput onChange={(e) => {checkBox(e)}} type="checkbox" id={`checkbox${key}`} name="" value={list.label}/>
                                        <CheckBoxLabel htmlFor={`checkbox${key}`}><CheckBoxLabelSpan style={{color : "#6865FC"}}>{list.label}</CheckBoxLabelSpan></CheckBoxLabel>
                                    </CheckBoxLayout>
                                );
                            }
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
                
                <EstimateContentMainSubTitle style={{marginTop : "83px"}}>음악의 상업적 이용이 가능한 저작권이 필요한가요?</EstimateContentMainSubTitle>
            
                <div style={{display : "flex", flexDirection: "row"}}>
                    <FormContainerRadioLayout>

                        <FormContainerRadio type="radio" value="true" name="pay" id="ritema"/> 
                        <FormContainerRadioLabel htmlFor="ritema">네</FormContainerRadioLabel>

                    </FormContainerRadioLayout>

                    <FormContainerRadioLayout>

                        <FormContainerRadio type="radio" value="false" name="pay" id="ritemb"/> 
                        <FormContainerRadioLabel htmlFor="ritemb">아니요</FormContainerRadioLabel>

                    </FormContainerRadioLayout>
                </div>

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
