import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/seven";
import { TimePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = TimePicker;

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

const RangePickerOver = styled(RangePicker)`

  margin-top : 1% !important;
  margin-left : 1% !important;
  background : #121212 !important;

  &&{
    .ant-picker-input > input {
        color : #B3B4BE;
    };
    .ant-picker-input {
        margin-top: 2px;
    }
    .anticon {
        color : #B3B4BE;
    }
    .ant-picker-clear {
        background : #121212;
    }
    .ant-picker-range-separator {
        margin-bottom : 2px;
        padding-right : 18px;
        padding-left : 0;
    };
    .ant-picker-suffix{
        margin-top : 3px;
        margin-left: -5px;
    }
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

    const [stepSeven, setStepSeven] = React.useState<any>({
        minTime : "00:00:00",
        maxTime : "00:02:30",
        select : false,
    }) 

    const timeFormat = 'HH:mm:ss';
    const [radioBoxList, setRadioBoxList] = React.useState([
        {
            label : "협의 후 결정",
            select : false
        },
        {
            label : "직접 시간 설정",
            select : false
        },
    ])

    const checkBox = (e) => {
        console.log(e.target.value);
        let newList = [...radioBoxList];
        if(e.target.value === "협의 후 결정"){
            setStepSeven({...stepSeven, select : false})
        }
        else{
            setStepSeven({...stepSeven, select : true})
        }
        for(let i = 0 ; i < radioBoxList.length ; i++){
            if(radioBoxList[i].label === e.target.value){
                newList[i].select = true;
            }
            else{
                newList[i].select = false;
            }
        }
        setRadioBoxList(newList)
    }

    React.useEffect(() => {
        
        window.scrollTo(0, 0);
        let newList = [...radioBoxList];

        if(object.minTime !== "00:00:00"){
            for(let i = 0 ; i < radioBoxList.length ; i++){
                if(newList[i].label === "직접 시간 설정"){
                    newList[i].select = true;
                }
            }
        }
        else{
            for(let i = 0 ; i < radioBoxList.length ; i++){
                if(newList[i].label === "협의 후 결정"){
                    newList[i].select = true;
                }
            }
        }
        setRadioBoxList(newList);
       
    }, [object])

    React.useEffect(() => {
        if(radioBoxList[1].select === true){
            setStepSeven(object);
        }
        
    }, [radioBoxList]);

    console.log(stepSeven);
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
            <EstimateSubTitle>곡의 길이는 어떻게 아나요?</EstimateSubTitle>
            <EstimateSubDesc>
                의뢰하는 곡의 희망 재생 시간입니다. 필수는 아니니 뮤지션과 협의하여 정하셔도 됩니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>곡의 길이는 얼마나 되나요?</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>최소 최대 음원 시간을 입력해주세요.</EstimateContentMainSubTitleBack>
                
                {radioBoxList.map((list, key) => {
                            console.log(list, key);
                            if(list.select === true){
                                return (
                                    <FormContainerRadioLayout key={key}>

                                        <FormContainerRadio defaultChecked={true} onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label} style={{color : "#6865FC"}}>{list.label}</FormContainerRadioLabel>

                                    </FormContainerRadioLayout>
                                );
                            
                            }
                            else{
                                return (
                                    <FormContainerRadioLayout key={key}>

                                        <FormContainerRadio onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label}>{list.label}</FormContainerRadioLabel>

                                    </FormContainerRadioLayout>
                                );
                            }

                    })}

                {radioBoxList[1].select === true ?

                    <RangePickerOver 
                        picker="time"
                        defaultValue={[moment(stepSeven.minTime, timeFormat), moment(stepSeven.maxTime, timeFormat)]}
                        format={timeFormat}
                        onChange={(e, timeString) => {
                            setStepSeven({minTime : timeString[0], maxTime : timeString[1]})
                        }}
                     />  
                : 
                <></>
                }
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(7, stepSeven)}}>이전으로</BeforeButton>
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
                <AfterButton onClick={()=>{nextButton(7, stepSeven)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
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
