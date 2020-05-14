import * as React from "react";
import styled from 'styled-components';
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import KakaoLogin from "react-kakao-login";

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
  padding-top : 15%;
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
}

const ImageStyled = styled.img`
  margin-right : 2%;
  top : 0.2vh;
  position : relative;
`;
const Login = (): React.ReactElement => {
  
  const successHandler = (res: GoogleLoginResponse) => {
    console.log('google Res : ', res);
  };

  const failureHandler = (error: any) => {
    console.error('google Err : ', error);
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

        <LoginModalTitle>당신을 위한 뮤지션과의 특별한 만남</LoginModalTitle>
        <LoginModalDescription>다음 가입방법 중 하나를 선택하세요.</LoginModalDescription>
        
        <LoginModalButton>

          <LoginModalButtonLayout>
            <KakaoLogin
            
              jsKey={process.env.KAKAO_CLIENT_ID}
              onSuccess={(response) => console.log('hi : ',response)}
              onFailure={(error) => console.error('hi : ',error)}
              render={renderProps => (
                <button onClick={renderProps.onClick} style={KakaoButtonStyled}>
                  <ImageStyled src="/static/kakao.png"/>
                  카카오 계정으로 로그인
                </button>
              )}
              getProfile={true}
            />
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <KakaoLogin
              jsKey={process.env.KAKAO_CLIENT_ID}
              onSuccess={(response) => console.log('hi : ',response)}
              onFailure={(error) => console.error('hi : ',error)}
              render={renderProps => (
                <button onClick={renderProps.onClick} style={NaverButtonStyled}>
                  <ImageStyled src="/static/naver.png"/>
                  네이버 계정으로 로그인
                </button>
              )}
              getProfile={true}
            />
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
            <GoogleLogin
              
              clientId={process.env.GOOGLE_CLIENT_ID}
              render={renderProps => (
                <button onClick={renderProps.onClick} style={GoogleButtonStyled}>
                  <ImageStyled src="/static/google.png"/>
                  구글 계정으로 로그인
                </button>
              )}
              onSuccess={successHandler}
              onFailure={failureHandler}
            />
          </LoginModalButtonLayout>
        </LoginModalButton>
      </LoginContainer>

  );
};

export default Login;