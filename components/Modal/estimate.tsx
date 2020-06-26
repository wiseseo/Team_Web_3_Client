import * as React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
  height : 100%;
  background : #121212;
  border-radius: 8px;
`;

const LoginModalLogo = styled.div`
  text-align : center;
  padding-top : 20%;
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
  padding-top : 7%;
  padding-bottom : 10%;
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
  padding-top : 20%;
  margin: 0 10%;
`;

const LoginModalButtonLayout = styled.div`
  text-align : center;
  height: 40px;
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
  background: #6865FC;
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

const Estimate = ({nextButton}): React.ReactElement => {

    const confirmButton = (res: any) => {
        console.log('Res : ', res);
    };

    return (

      <LoginContainer>

        

        <LoginModalLogo>
        <img
          src="/static/logo.png"
          alt="logo"
          style={{cursor:"pointer"}}
          width="104px"
          height="32px"
          onClick={()=>{location.href="/"}}
        />
        </LoginModalLogo>

        <LoginModalTitle>성공적으로 의뢰를 보냈어요!</LoginModalTitle>
        <LoginModalDescription>뮤지션이 의뢰를 수락하면 </LoginModalDescription>
        <LoginModalDescription>입력하신 연락처로 연락할 거에요!</LoginModalDescription>
        <LoginModalButton>

          <LoginModalButtonLayout>
            <LeaveButton onClick={() => {nextButton(12, "")}}>내 의뢰 확인하기</LeaveButton>
          </LoginModalButtonLayout>

        </LoginModalButton>
      </LoginContainer>

  );
};

export default Estimate;
