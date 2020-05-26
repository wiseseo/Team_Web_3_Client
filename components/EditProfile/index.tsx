import * as React from "react";
import styled from 'styled-components';

interface Props {}


const Contents = styled.div`
    display : flex;
    flex-direction : row;
    background-color : #040104;
    width :  644px;
    height : 247px;
    color : white;
`;

const ImgContainer = styled.div`
    flex: 1;
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
    flex: 1;
    /*background-color : #040104;*/
    background-color : white;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : flex-end;
`;

const EmailContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const EmailBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/
`;

const NickNameContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const NickNameBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/
`;

const NickNameInput = styled.input`

`;

const PhoneNumberContainer = styled.div`
    width : 320px;
    height : 32px;
    background : red;
    display : flex;
    flex-direction : row;
`;

const PhoneNumberBox = styled.div`
    width : 212px;
    height : 32px;
    background-color : blue;
    /*background-color : #040104;*/
`;

const PhoneNumberInput = styled.input`
`;

const Label = styled.label`
    color : #B3B4BE;
    font-size : 0.875rem;
`;

const ModifyBtn = styled.input.attrs({ 
    type: 'submit',
    value: '수정'
  })`
    color : #6865FC;
    font-size ; 0.75rem;
    background-color : #040104;
`;
const WithdrawalBtn = styled.button`
    width : 320px;
    height : 32px;
    /*background : red;*/
    background-color : #040104;
    border: 1px solid #B3B4BE;
    box-sizing: border-box;
    border-radius: 0.5rem;
    color: #B3B4BE;
    font-size : 0.75rem;
`;

const EditProfile = (props: Props) => { 

    return(
        <Contents>
           <ImgContainer>
                <Photo/>
           </ImgContainer>
           <InfoContainer>
                <EmailContainer>
                    <Label>
                        이메일
                    </Label>
                    <EmailBox>
                        dffdf
                    </EmailBox>
                </EmailContainer>
                <NickNameContainer>
                    <Label>
                        닉네임
                    </Label>
                    <NickNameBox>
                        fdfd
                    </NickNameBox>
                    <ModifyBtn/>
                </NickNameContainer>
                <PhoneNumberContainer>
                    <Label>
                        전화번호
                    </Label>
                    <PhoneNumberBox>
                        fsfd
                    </PhoneNumberBox>
                    <ModifyBtn/>
                </PhoneNumberContainer>
                <WithdrawalBtn>
                    회원탈퇴
                </WithdrawalBtn>
           </InfoContainer>
        </Contents>
        
    );
};

export default EditProfile;