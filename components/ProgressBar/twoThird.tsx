import * as React from "react";
import styled from 'styled-components';

interface Props {}

const Container = styled.div`
    margin : 1% 0;
`;

const ProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const Pro_One = styled.div`
    width : 66%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const Pro_Two = styled.div`
    width : 34%;
    float : left;
    background : #3E3E41;
    border-radius : 0 2px 2px 0;
    box-shadow: 1px 4px 1px rgba(0, 0, 0, 0.25);
    height: 100%;
`;

const TwoThird = (props: Props) => {
  return <>
    
    <Container>
        <ProgressBar>
            <Pro_One/>
            <Pro_Two/>
        </ProgressBar>
    </Container>

    </>
};

export default TwoThird;
