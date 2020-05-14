import * as React from "react";
import styled from 'styled-components';

interface Props {}

const HalfContainer = styled.div`
    position : absolute;
    bottom : 0px;
    width : 100%;
`;

const HalfPercent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
`;

const HalfProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const HalfPro_One = styled.div`
    width : 50%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const HalfPro_Three = styled.div`
    width : 25%;
    float : left;
    background : #313133;
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const HalfPro_Four = styled.div`
    width : 25%;
    float : left;
    background : #222223;
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const Half = (props: Props) => {
  return <>
    <HalfContainer>
        <HalfPercent>50%</HalfPercent>
        <HalfProgressBar>
            <HalfPro_One/>
            <HalfPro_Three/>
            <HalfPro_Four/>
        </HalfProgressBar>
    </HalfContainer>
  </>
};

export default Half;
