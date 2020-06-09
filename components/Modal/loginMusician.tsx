import * as React from "react";
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.div`
  height : 100%;
  background : #121212;
  border-radius: 8px;
`;

const LoginModalLogo = styled.div`
  text-align : center;
  padding-top : 66px;
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
`;

const LoginModalDescription = styled.div`
  color: #B3B4BE;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.625rem;
  line-height: 20px;
  align-items: center;
  text-align: center;   
  padding-top : 35px;
`;

const LoginModalButton = styled.div`
  padding-top : 16px;
  margin: 0 10%;
`;

const LoginModalButtonLayout = styled.div`
  text-align : center;
  height: 40px;
  margin-bottom : 16px;
`;

const KakaoButtonStyled = {
  background : "#F9E032",
  borderRadius: "8px",
  height: "100%",
  borderWidth: "inherit",
  width: "100%",
  color : "black",
  fontFamily: "SpoqaHanSans",
  fontSize : "0.75rem",
  fontWeight : 600,
  minWidth : 170,
  minHeight : 25,
  outlineWidth : 0,
  cursor : "pointer"
}

const NaverButtonStyled = {
  background : "#2DC622",
  borderRadius: "8px",
  height: "100%",
  borderWidth: "inherit",
  width: "100%",
  color : "#E2E1E2",
  fontFamily: "SpoqaHanSans",
  fontSize : "0.75rem",
  fontWeight : 600,
  minWidth : 170,
  minHeight : 25,
  cursor : "pointer"
}

const GoogleButtonStyled = {
  background : "#6863FC",
  borderRadius: "8px",
  height: "100%",
  borderWidth: "inherit",
  width: "100%",
  color : "#E2E1E2",
  fontFamily: "SpoqaHanSans",
  fontSize : "0.75rem",
  fontWeight : 600,
  minWidth : 170,
  minHeight : 25,
  cursor : "pointer"
}

const ImageStyled = styled.img`
  margin-right : 2%;
  top : 0.2vh;
  position : relative;
`;
const Login = (): React.ReactElement => {
  
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  const GoogleLogin = async () => {

    console.log("hi");
    
    console.log(response, error)
    try {
      window.location.assign("http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google");
      
    } catch (e) {

      setError(e);
    }

      console.log(response, error)
  }

  console.log('response : ',response)
  console.log('error : ', error)
  return (

      <LoginContainer>
        <LoginModalLogo>
          <img
          src="/static/logo.png"
          alt="logo"
          style={{cursor:"pointer"}}
          width={100}
          height={30}
          onClick={()=>{location.href="/"}}
        />
        </LoginModalLogo>

        <LoginModalTitle>당신의 음악이 브랜드가 되도록</LoginModalTitle>
        <LoginModalTitle style={{paddingTop : 0}}>튜나가 함께할게요.</LoginModalTitle>
        <LoginModalDescription>수수료없이 내가 만든 음악으로 수익을 가져가세요.</LoginModalDescription>
        
        <LoginModalButton>

          <LoginModalButtonLayout>
              <button onClick={(e) => {}} style={KakaoButtonStyled}>
                <ImageStyled src="/static/kakao.png"/>
                카카오 계정으로 로그인
              </button>

          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
              
                <button style={NaverButtonStyled} >
                  <ImageStyled src="/static/naver.png"/>
                  네이버 계정으로 로그인
                </button>
              
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
              
              <button onClick={GoogleLogin} style={GoogleButtonStyled}>
                <ImageStyled src="/static/google.png"/>
                구글 계정으로 로그인
              </button>
          </LoginModalButtonLayout>
        </LoginModalButton>
      </LoginContainer>

  );
};

export default Login;