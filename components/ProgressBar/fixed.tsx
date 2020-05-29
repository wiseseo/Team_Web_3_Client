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
    width : 100%;
    float : left;
    background : linear-gradient(173.96deg, #6865FC 36.28%, #658DFC 100%);
    border-radius : 0 2px 2px 0;
    height: 100%;
`;

const Fixed = (props: Props) => {
    return <>
        <Container>
            <ProgressBar>
                <Pro_One/>

            </ProgressBar>
        </Container>
    </>
};

export default Fixed;
