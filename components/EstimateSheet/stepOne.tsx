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

const CheckBoxContainer = styled.div``;

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

const CheckBoxEtcInput = styled.input`
    margin-top : 15px;
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
const index = ({nextButton , object}): React.ReactElement => {

    const [stepOne, setStepOne] = React.useState<any>({
        usage : "",
        copyright : ""
    }) 

    const [radioBoxList, setRadioBoxList] = React.useState([
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

    const [radioBoxSubList, setRadioBoxSubList] = React.useState([
        {
            label : "네",
            select : false
        },
        {
            label : "아니요",
            select : false
        },
    ])

    const checkBox = (e) => {
        console.log(e.target.value);
        
        let newList = [...radioBoxList];

        for(let i = 0 ; i < radioBoxList.length ; i++){
            if(radioBoxList[i].label === e.target.value){
                newList[i].select = true;
            }
            else{
                newList[i].select = false;
            }
        }
        setRadioBoxList(newList)
        setStepOne({...stepOne, usage : e.target.value});
    }

    const subCheckBox = (e) => {
        let newList = [...radioBoxSubList];

        for(let i = 0 ; i < radioBoxSubList.length ; i++){
            if(radioBoxSubList[i].label === e.target.value){
                newList[i].select = true;
            }
            else{
                newList[i].select = false;
            }
        }
        setRadioBoxSubList(newList)
        setStepOne({...stepOne, copyright : e.target.value});
    }

    React.useEffect(() => {
        setStepOne(object);
        window.scrollTo(0, 0);

        let newList = [...radioBoxList];
        let newSubList = [...radioBoxSubList];

        for(let i = 0 ; i < radioBoxList.length ; i++){
            if(radioBoxList[i].label === object.usage){
                newList[i].select = true;
            }
            else{
                newList[i].select = false;
            }
        }
        for(let i = 0 ; i < radioBoxSubList.length ; i++){
            if(radioBoxSubList[i].label === object.copyright){
                newSubList[i].select = true;
            }
            else{
                newSubList[i].select = false;
            }
        }
        
        setRadioBoxList(newList);
        setRadioBoxSubList(newSubList);
    }, [object])

    // console.log(stepOne);
    
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
                
                
                <CheckBoxContainer> 
                    {radioBoxList.map((list, key) => {
                        
                        if(list.select === true){

                            if(list.label === "기타 (직접입력)"){
                                
                                return (
                                    <FormContainerRadioLayout style={{flexDirection : "column"}} key={key}>

                                        <FormContainerRadio defaultChecked={true} onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="use" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label} style={{color : "#6865FC"}}>{list.label}</FormContainerRadioLabel>
                                        <CheckBoxEtcInput onChange={(e) => {setStepOne({...stepOne, usage : e.target.value})}}/>
                                    </FormContainerRadioLayout>
                                );
                            }
                            else{
                                return (
                                    <FormContainerRadioLayout key={key}>

                                        <FormContainerRadio defaultChecked={true} onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="use" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label} style={{color : "#6865FC"}}>{list.label}</FormContainerRadioLabel>

                                    </FormContainerRadioLayout>
                                );
                            }
                        }
                        else{
                            return (
                                <FormContainerRadioLayout key={key}>

                                    <FormContainerRadio onChange={(e) => {checkBox(e)}} type="radio" value={list.label} name="use" id={list.label}/> 
                                    <FormContainerRadioLabel htmlFor={list.label}>{list.label}</FormContainerRadioLabel>

                                </FormContainerRadioLayout>
                            );
                        }

                    })}
                </CheckBoxContainer>
                
                <EstimateContentMainSubTitle style={{marginTop : "83px"}}>음악의 상업적 이용이 가능한 저작권이 필요한가요?</EstimateContentMainSubTitle>
            
                <div style={{display : "flex", flexDirection: "row"}}>
                    {radioBoxSubList.map((list, key) => {
                            
                            if(list.select === true){
                                return (
                                    <FormContainerRadioLayout key={key}>

                                        <FormContainerRadio defaultChecked={true} onChange={(e) => {subCheckBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label} style={{color : "#6865FC"}}>{list.label}</FormContainerRadioLabel>

                                    </FormContainerRadioLayout>
                                );
                            
                            }
                            else{
                                return (
                                    <FormContainerRadioLayout key={key}>

                                        <FormContainerRadio onChange={(e) => {subCheckBox(e)}} type="radio" value={list.label} name="pay" id={list.label}/> 
                                        <FormContainerRadioLabel htmlFor={list.label}>{list.label}</FormContainerRadioLabel>

                                    </FormContainerRadioLayout>
                                );
                            }

                    })}
                </div>

            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{history.back()}}>메인으로</BeforeButton>
                {
                    (radioBoxList.findIndex(x => x.select === true) !== -1 || stepOne.usage.length > 0)&&
                    radioBoxSubList.findIndex(x => x.select === true) !== -1 
                ? 
                <AfterButton onClick={()=>{nextButton(1, stepOne)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
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
