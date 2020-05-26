import * as React from "react";
import styled from 'styled-components';

interface Props {}


const Contents = styled.div`
    display : flex;
    flex-direction : row;
    background-color : #040104;
    width L 644px;
    height : 247px;
    color : white;
`;

const ImgContainer = styled.div`
    background-color : #040104;
    display : flex;
    justify-content : center;
    align-items : center;
`;

const Photo = styled.div`
    width : 240px;
    height : 240px;
    background : white;
    background-image: url("https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size : contain;
    border-radius: 50%;
    overflow: hidden;
`;
const InfoContainer = styled.div`
    background-color : #040104;
`;
const EditProfile = (props: Props) => { 

    return(
        <Contents>
           <ImgContainer>
            <Photo/>
           </ImgContainer>
           <InfoContainer>

           </InfoContainer>
        </Contents>
        
    );
};

export default EditProfile;