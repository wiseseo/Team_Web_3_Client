import * as React from "react";
import styled from 'styled-components';

interface Props {}

const FixedContainer = styled.div`
    position : absolute;
    bottom : 0px;
    width : 100%;
`;

const FixedPercent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
`;

const FixedProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const FixedPro_One = styled.div`
    width : 25%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const FixedPro_Two = styled.div`
    width : 25%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
    height: 100%;
`;

const FixedPro_Three = styled.div`
    width : 25%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const FixedPro_Four = styled.div`
    width : 25%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const Fixed = (props: Props) => {
    return <>
        <FixedContainer>
            <FixedPercent>100%</FixedPercent>
            <FixedProgressBar>
                <FixedPro_One/>
                <FixedPro_Two/>
                <FixedPro_Three/>
                <FixedPro_Four/>
            </FixedProgressBar>
        </FixedContainer>
    </>
};

export default Fixed;
