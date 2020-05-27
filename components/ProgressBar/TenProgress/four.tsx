import * as React from "react";
import styled from 'styled-components';

interface Props {}

const Container = styled.div`
    position : absolute;
    bottom : 0px;
    width : 100%;
`;

const Percent = styled.div`
    width: 100%;
    color: #6865FC;
    font-size:0.75rem;
    text-align : center;
    margin-bottom : 12px;
`;

const ProgressBar = styled.div`
    width : 100%;
    height: 8px;
`;
const Pro_One = styled.div`
    width : 36%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const Pro_Two = styled.div`
    width : 64%;
    float : left;
    background : #B3B4BE;
    border-radius : 0 2px 2px 0;
    height: 100%;
    opacity : 0.1;
`;



const index = (props: Props) => {
  return <>
    <Container>
        <Percent>어렵지 않아요!</Percent>
        <ProgressBar>
            <Pro_One/>
            <Pro_Two/>
        </ProgressBar>
    </Container>
  </>
};

export default index;
