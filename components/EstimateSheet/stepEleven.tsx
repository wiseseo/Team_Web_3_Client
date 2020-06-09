import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/eleven";
import {DatePicker, Slider, InputNumber, Row, Col } from "antd";
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

const SliderOver = styled(Slider)`

    && {
      .ant-slider-track {
        background-color : #6865FC !important;
      };
      .ant-slider-handle {
        width : 20px;
        height : 20px;
        margin-top : -8px;
        border: solid 2px #6865FC;
        background-color : #4C4C50;
      };
      .ant-slider-rail {
        background-color : #4C4C50;
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
  
    const [stepEleven, setStepEleven] = React.useState<any>({
        minfee : 0,
        maxfee : 0,
    }) 

    const valueChange = (value) => {
      setStepEleven({...stepEleven, minfee : value});
    }

    const valueMaxChange = (value) => {
      setStepEleven({...stepEleven, maxfee : value});
    }

    React.useEffect(() => {
        
      window.scrollTo(0, 0);
      setStepEleven(object);
     
  }, [object])

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
            <EstimateSubTitle>가격은 어떻게 결정되나요?</EstimateSubTitle>
            <EstimateSubDesc>
              튜나 내부 조사 결과 아마추어 뮤지션의 경우 일반적으로 1분 미만의 곡은 최소 3만원 이상, 3분 이상의 곡은 7만원 이상을 희망하고 있습니다.
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>희망하는 견적을 입력해주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>좌측 Tip 문구를 읽어보시고 적절한 금액을 입력해주세요.</EstimateContentMainSubTitleBack>
                
                <Row style={{marginTop : 32}}>
                  <Col span={3} style={{display : "table", height: 32}}>
                    <EstimateSubDesc style={{fontWeight : "bold", display: "table-cell", verticalAlign : "middle"}}>
                      희망 최소 견적
                    </EstimateSubDesc>
                  </Col>
                  <Col span={12}>
                    <SliderOver
                      min={10000}
                      max={10000000}
                      step={10000}
                      onChange={valueChange}
                      value={typeof stepEleven.minfee === 'number' ? stepEleven.minfee : 0}
                    />
                  </Col>
                  <Col span={4.5}>
                    <InputNumber
                      min={10000}
                      max={10000000}
                      step={10000}
                      style={{ margin: '0 16px', width : 120, backgroundColor : "#3E3E41", border: "none" }}
                      value={stepEleven.minfee}
                      onChange={valueChange}
                    />
                  </Col>
                  <Col span={1} style={{display : "table", height: 32}}>
                    <div style={{display: "table-cell", verticalAlign : "middle"}}>
                      원
                    </div>
                  </Col>
                </Row>

                <Row style={{marginTop : 32}}>
                  <Col span={3} style={{display : "table", height: 32}}>
                    <EstimateSubDesc style={{fontWeight : "bold", display: "table-cell", verticalAlign : "middle"}}>
                      가능 최대 견적
                    </EstimateSubDesc>
                  </Col>
                  <Col span={12}>
                    <SliderOver
                      min={10000}
                      max={10000000}
                      step={10000}
                      onChange={valueMaxChange}
                      value={typeof stepEleven.maxfee === 'number' ? stepEleven.maxfee : 0}
                    />
                  </Col>
                  <Col span={4.5}>
                    <InputNumber
                      min={10000}
                      max={10000000}
                      step={10000}
                      style={{ margin: '0 16px', width : 120, backgroundColor : "#3E3E41", border: "none" }}
                      value={stepEleven.maxfee}
                      onChange={valueMaxChange}
                    />
                  </Col>
                  <Col span={1} style={{display : "table", height: 32}}>
                    <div style={{display: "table-cell", verticalAlign : "middle"}}>
                      원
                    </div>
                  </Col>
                </Row>
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(11, stepEleven)}}>이전으로</BeforeButton>
                {
                stepEleven.minfee !== 0 &&
                stepEleven.maxfee !== 0
                
                ? 
                <AfterButton onClick={()=>{nextButton(11, stepEleven)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
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
