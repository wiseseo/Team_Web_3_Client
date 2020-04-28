import * as React from "react";
import styled from 'styled-components';

interface Props {}

const QuarterContainer = styled.div`
    position : absolute;
    bottom : 0px;
    width : 100%;
`;

const QuarterPercent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
`;

const QuarterProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const QuarterPro_One = styled.div`
    width : 25%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const QuarterPro_Two = styled.div`
    width : 25%;
    float : left;
    background : #3E3E41;
    border-radius : 0 2px 2px 0;
    box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
    height: 100%;
`;

const QuarterPro_Three = styled.div`
    width : 25%;
    float : left;
    background : #313133;
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const QuarterPro_Four = styled.div`
    width : 25%;
    float : left;
    background : #222223;
    border-radius : 0 2px 2px 0;
    height: 100%;
`;
const Quarter = (props: Props) => {
  return <>
    
    <QuarterContainer>
        <QuarterPercent>25%</QuarterPercent>
        <QuarterProgressBar>
            <QuarterPro_One/>
            <QuarterPro_Two/>
            <QuarterPro_Three/>
            <QuarterPro_Four/>
        </QuarterProgressBar>
    </QuarterContainer>

    </>
};

export default Quarter;
