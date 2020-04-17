import * as React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
  height: 45vh;
`;

const LoginModalLogo = styled.div`
  text-align : center;
  padding-top : 10%;

`;
const LoginModalTitle = styled.div`
  color: #E2E1E2;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 20px;
  align-items: center;
  text-align: center; 
  padding-top : 5%;
  padding-bottom : 15%;
`;

const LoginModalDescription = styled.div`
  color: #E2E1E2;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 20px;
  align-items: center;
  text-align: center;   

`;

const LoginModalButton = styled.div`
  padding-top : 10%;
  margin: 0 10%;
`;

const LoginModalButtonLayout = styled.div`
  text-align : center;
  height: 5vh;
  margin-bottom : 16px;
`;

const Button = styled.button`
  background: linear-gradient(157.06deg, #6865fc 36.28%, #658dfc 100%);
  border-radius: 8px;
  border: none;
  color: #fdfdff;
  fontFamily: "SpoqaHanSans",
  font-size: 0.75rem;
  width: 100%;
  height: 100%;
  outline-width : 0px;
  cursor : pointer;
`;


const LeaveButton = styled.button`
  background: #B3B4BE;
  border-radius: 8px;
  border: none;
  color: #E2E1E2;
  fontFamily: "SpoqaHanSans",
  font-size: 0.75rem;
  width: 100%;
  height: 100%;
  outline-width : 0px;
  cursor : pointer;
`;

const Leave = ({onCloseModal}): React.ReactElement => {

    const leaveButton = (res: any) => {
        console.log('Res : ', res);
    };

  return (

      <LoginContainer>
        <LoginModalLogo>
          <img
          src="/static/logo.png"
          alt="logo"
          style={{cursor:"pointer"}}
          onClick={()=>{location.href="/"}}
        />
        </LoginModalLogo>

        <LoginModalTitle>정말 탈퇴하시겠습니까 :(</LoginModalTitle>
        <LoginModalDescription>튜나와 함께한 모든 추억이 사라집니다.</LoginModalDescription>
        <LoginModalDescription>당신을 위한 뮤지션을 찾아보세요</LoginModalDescription>

        <LoginModalButton>

          <LoginModalButtonLayout>
            <Button onClick={onCloseModal}>취소하겠습니다.</Button>
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <LeaveButton onClick={leaveButton}>탈퇴하겠습니다.</LeaveButton>
          </LoginModalButtonLayout>

        </LoginModalButton>
      </LoginContainer>

  );
};

export default Leave;
