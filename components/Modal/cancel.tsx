import * as React from "react";
import styled from 'styled-components';

const LoginContainer = styled.div`
  height: 45vh;
`;

const LoginModalLogo = styled.div`
  text-align : center;
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
  padding-top : 15%;
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
  padding-top : 5%;
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

const Cancel = ({onCloseModal}): React.ReactElement => {

    const deleteButton = (res: any) => {
        console.log('Res : ', res);
    };

  return (

      <LoginContainer>

        <LoginModalTitle>정말 의뢰를 취소하시겠어요?</LoginModalTitle>

        <LoginModalLogo>
          <img
          src="/static/vector.png"
          alt="vector"
        />
        </LoginModalLogo>

        <LoginModalDescription>취소시 작성한 의뢰서가 사라집니다.</LoginModalDescription>

        <LoginModalButton>

          <LoginModalButtonLayout>
            <Button onClick={onCloseModal}>아니요, 의뢰를 취소하지 않습니다.</Button>
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <LeaveButton onClick={deleteButton}>네, 의뢰서를 삭제합니다..</LeaveButton>
          </LoginModalButtonLayout>

        </LoginModalButton>
      </LoginContainer>

  );
};

export default Cancel;
