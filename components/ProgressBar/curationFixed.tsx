import * as React from "react";
import styled from 'styled-components';

interface Props {}

const ThreeQuartersContainer = styled.div`
    position : absolute;
    bottom : 0px;
    width : 100%;
`;

const ThreeQuartersPercent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
`;

const ThreeQuartersProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const ThreeQuartersPro_One = styled.div`
    width : 100%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const ThreeQuarters = (props: Props) => {
    return <>
        <ThreeQuartersContainer>
            <ThreeQuartersPercent>100%</ThreeQuartersPercent>
            <ThreeQuartersProgressBar>
                <ThreeQuartersPro_One/>
            </ThreeQuartersProgressBar>
        </ThreeQuartersContainer>
  </>
};

export default ThreeQuarters;
