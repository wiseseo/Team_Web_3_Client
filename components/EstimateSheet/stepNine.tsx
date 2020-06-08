import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/nine";
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

const InputLayout = styled.div`

    display : flex;
    flex-direction : row;
    margin-top : 24px;
`;
const Input = styled.input`
    
    width : 212px;
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
  
    const [stepNine, setStepNine] = React.useState<any>({
        number : "",
        kakaoId : ""
    }) 

    const phoneNumberRegExp = /^\d{3}-\d{3,4}-\d{4}$/;
    const [celPhoneFlag, setcelPhoneFlag] = React.useState<number>(0);

    React.useEffect(() => {
        
        if (stepNine.number !== "") {
            if(stepNine.number.match(phoneNumberRegExp)){
              setcelPhoneFlag(1)
            }
            else{
              setcelPhoneFlag(2)
            }
        }
        else {
            if(celPhoneFlag === 1 || celPhoneFlag === 2){
              setcelPhoneFlag(2);
            }
            else{
              setcelPhoneFlag(0);
            }
        }
    }, [stepNine]);

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
            <EstimateSubTitle>연락처를 왜 입력하나요?</EstimateSubTitle>
            <EstimateSubDesc>
                튜나는 뮤지션과 의뢰인을 매칭해주는 매칭사이트로 연락 및 거래과정은 고객과 의뢰인에게 맡기고 있습니다. 의뢰서를 보고 뮤지션이 연락하기 위한 최소한의 정보로 고객의 연락처를 필요로하며, 의뢰인 역시 뮤지션이 수락할 시 뮤지션의 연락처를 확인할 수 있습니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>연락 가능한 연락처를 입력해주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>의뢰 수락시 뮤지션이 연락할 수 있도록 연락처를 입력해주세요. 뮤지션이 의뢰를 수락하기 전까지 연락처는 공개되지 않습니다.</EstimateContentMainSubTitleBack>

                <InputLayout>
                    <div style={{display : "table", height : "32px", marginRight : "16px", width : "68px"}}>
                    <EstimateSubTitle style={{fontSize : "0.875rem", border : "none", display: "table-cell", verticalAlign : "middle"}}>전화번호<span style={{color : "#6865FC"}}>*</span></EstimateSubTitle>
                    </div>
                {celPhoneFlag === 0 ?
                
                    <Input defaultValue={stepNine.number} placeholder="010-1234-5678" onChange={e => {

                        setStepNine({...stepNine, number : e.target.value})
                    }}/>
                
                :
                (celPhoneFlag === 1 ? 
                        <Input defaultValue={stepNine.number} placeholder="010-1234-5678" onChange={e => {
    
                            setStepNine({...stepNine, number : e.target.value})
                        }}/>
                : 
                    <Input defaultValue={stepNine.number} style={{border : "1px solid #C93E37"}} placeholder="010-1234-5678" onChange={e => {

                        setStepNine({...stepNine, number : e.target.value})
                    }}/>
                )
                
                }
                </InputLayout>

                {celPhoneFlag === 2 ?
                    <div style={{marginLeft: 83}}>   
                        <img
                            src={"/static/warning.png"}
                            alt="warning"
                            style={{
                                width : 10,
                                height : 10,
                                marginRight : 5
                            }}
                        />
                        <span style={{color : "#C93E37", fontSize: "0.625rem"}}>올바른 휴대폰 번호가 아닙니다.</span>
                    </div>
                :
                ""
                }
                
                <InputLayout>
                  <div style={{display : "table", height : "32px", marginRight : "16px", width : "68px"}}>
                    <EstimateSubTitle style={{fontSize : "0.875rem", border : "none", display: "table-cell", verticalAlign : "middle"}}>카카오 ID</EstimateSubTitle>
                  </div>
                  <Input onChange={(e) => {setStepNine({...stepNine, kakaoId : e.target.value})}}/>
                </InputLayout>
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(9, stepNine)}}>이전으로</BeforeButton>
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
                <AfterButton onClick={()=>{nextButton(9, stepNine)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
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
