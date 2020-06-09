import * as React from "react";
import styled from "styled-components";
const EstimateUserInfoData = styled.div`
    flex: 0.1;
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
    flex: 0.9;
    background : #121212;
    border-radius : 8px;
    width : 800px;

`;

const Container = styled.div`
    height : 100%;
    width : 100%;
    display : table;
`;

const Percent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
    margin-bottom : 12px;
    display : table-cell;
    vertical-align : middle;
`;

const EstimateContentMainTitle = styled.div`
    width : 100%;
    height : 78.05px;
    position : relative;
    border-radius: 8px;
    background: #181818;
`;
const EstimateContentMainSub = styled.div`
    width : 90%;
    height : 425px;
    margin : 6% 7%;
    display : table;
`;

const MyPageUserInfo = styled.div`
    display : flex;
    flex-direction : row;
`;

const MyPageUserInfoData = styled.div`
    flex: 1;
    color : #E2E1E2
`;

const MyPageUserInfoImg = styled.div`
    flex: 0.2;
    margin-top : 2px;
    color : #E2E1E2;
    display : flex;
`;

const MyPageTitle = styled.div`
    color : #E2E1E2;
    font-size : 1.125rem;
    font-weight : bold;
    
`;

const MyPageMainDesc = styled.div`
    font-size : 1rem;
    font-weight : bold;
    color : #B3B4BE;
    margin-top : 5px;
`;

const QuestionLayout = styled.div`
    margin-top : 60px;
`;
const QuestionTitle = styled.div`
    color : #B3B4BE;
    font-size : 1.125rem;
    margin-bottom : 8px;
`;

const Answer = styled.div`
    color : #E2E1E2;
    font-size : 1rem;
    font-weight : bold;
    margin-bottom : 24px;
`;

const Files = styled.div`

    color : #B3B4BE;
    font-size : 0.75rem;
    margin-top : 8px;
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
const index = ({object}): React.ReactElement => {
  

    // console.log(checkBoxList);
    return (
        <>
        <EstimateUserInfoData/>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>

            <Container>
                <Percent>뮤지션에게 의뢰서가 성공적으로 보내졌어요!</Percent>
            </Container>

            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <MyPageUserInfo>
                    <MyPageUserInfoImg>
                        <div style={{textAlign : "end"}}>
                            <img
                                src="/static/vector.png"
                                alt="vector"
                                style={{
                                    width : 88,
                                    height : 88,
                                    borderRadius : "50%",
                                    marginRight : "3%"
                                }}
                            />
                        </div>
                    </MyPageUserInfoImg>


                    <MyPageUserInfoData>

                        <MyPageTitle>김튜나</MyPageTitle>
                        <MyPageMainDesc style={{color : "#B3B4BE"}}>tuna@gmail.com</MyPageMainDesc>
                        <MyPageTitle style={{fontWeight : "normal", marginTop : 5}}>일이삼사오육칠팔구십일이삼사오육칠팔구십</MyPageTitle>

                    </MyPageUserInfoData>
                </MyPageUserInfo>
               
                <QuestionLayout>
                    <QuestionTitle>
                        어떤 용도로 사용할 음악인가요?
                    </QuestionTitle>
                    <Answer>
                        {object.stepOne.usage}
                    </Answer>
                    
                    <QuestionTitle>
                        음악의 상업적 이용이 가능한 저작권이 필요한가요?
                    </QuestionTitle>
                    <Answer>
                        {object.stepOne.copyright}
                    </Answer>
                    
                    <QuestionTitle>
                        어떤 분위기의 음악을 원하시나요?
                    </QuestionTitle>
                    <Answer>

                        {object.stepTwo.atmoKindNm.map((list, key) => {
                            if (object.stepTwo.atmoKindNm.length === key + 1 && object.stepTwo.atmoKindNmStr === ""){
                                return (
                                    <span key={key}>
                                        {list}
                                    </span>
                                )
                            }
                            else{
                                return (
                                    <span key={key}>
                                        {list},{" "}
                                    </span>
                                )
                            }
                            
                        })}
                        {object.stepTwo.atmoKindNmStr !== "" ? 
                        <>기타 : {object.stepTwo.atmoKindNmStr}</>
                        :
                        ""
                        }
                        
                    </Answer>
                    
                    <QuestionTitle>
                        어떤 테마의 음악을 원하시나요?
                    </QuestionTitle>
                    <Answer>
                        {object.stepThree.themeKindNm.map((list, key) => {
                            if (object.stepThree.themeKindNm.length === key + 1 && object.stepThree.themeKindNm === ""){
                                return (
                                    <span key={key}>
                                        {list}
                                    </span>
                                )
                            }
                            else{
                                return (
                                    <span key={key}>
                                        {list},{" "}
                                    </span>
                                )
                            }
                        })}
                        {object.stepThree.themeKindNmStr !== "" ? 
                        <>기타 : {object.stepThree.themeKindNmStr}</>
                        :
                        ""
                        }
                    </Answer>
                    
                    <QuestionTitle>
                        어떤 장르의 음악을 원하시나요?
                    </QuestionTitle>
                    <Answer>
                        {object.stepFour.genreKindNm.map((list, key) => {
                            if (object.stepFour.genreKindNm.length === key + 1 && object.stepFour.genreKindNmStr === ""){
                                return (
                                    <span key={key}>
                                        {list}
                                    </span>
                                )
                            }
                            else{
                                return (
                                    <span key={key}>
                                        {list},{" "}
                                    </span>
                                )
                            }
                        })}
                        {object.stepFour.genreKindNmStr !== "" ? 
                        <>기타 : {object.stepFour.genreKindNmStr}</>
                        :
                        ""
                        }
                    </Answer>
                    
                    <QuestionTitle>
                        어떤 종류의 악기를 원하시나요?
                    </QuestionTitle>
                    <Answer>
                        {object.stepFive.instruKindNm.map((list, key) => {
                            if (object.stepFive.instruKindNm.length === key + 1 && object.stepFive.instruKindNmStr === ""){
                                return (
                                    <span key={key}>
                                        {list}
                                    </span>
                                )
                            }
                            else{
                                return (
                                    <span key={key}>
                                        {list},{" "}
                                    </span>
                                )
                            }
                        })}
                        {object.stepFive.instruKindNmStr !== "" ? 
                        <>기타 : {object.stepFive.instruKindNmStr}</>
                        :
                        ""
                        }
                    </Answer>
                    
                    <QuestionTitle>
                        다음 중 필요한 작업 특성을 선택해주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepSix.spclNoteKindNm}
                    </Answer>
                    
                    <QuestionTitle>
                        음원 플레이 시간을 설정해주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepSeven.select ? 
                            <>{object.stepSeven.minTime} ~ {object.stepSeven.maxTime}</>
                        : 
                            <>협의 후 결정</>
                        }
                        
                    </Answer>
                    
                    <QuestionTitle>
                        음원 기획 의도를 알려주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepEight.intention}

                        <Files>
                        {object.stepEight.files.map((value, key) => {
                            return (
                                <div key={key} style={{marginBottom : 8}}>
                                    <img
                                        src={"/static/fileLink.png"}
                                        alt="fileLink"
                                        style={{
                                            width : 12,
                                            height : 12,
                                            marginRight : 5
                                        }}
                                    />
                                    {value[0].name.length > 20 ? value[0].name.substr(0, 20) : value[0].name}
                                </div>
                            )
                        })}
                        </Files>
                    </Answer>
                    
                    <QuestionTitle>
                        연락 가능한 연락처를 입력해주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepNine.number}, {object.stepNine.kakaoId} 
                    </Answer>
                    
                    <QuestionTitle>
                        희망하는 작업 기간을 선택해주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepTen.deadline[0]} ~ {object.stepTen.deadline[1]}
                    </Answer>
                    
                    <QuestionTitle>
                        희망하는 견적을 입력해주세요.
                    </QuestionTitle>
                    <Answer>
                        {object.stepEleven.minfee} ~ {object.stepEleven.maxfee}
                    </Answer>
                </QuestionLayout>
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{window.location.assign("/")}}>메인으로</BeforeButton>
                 
                <AfterButton onClick={()=>{}} style={{cursor : "pointer", background : "#6865FC"}}>마이페이지로</AfterButton>
                
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
