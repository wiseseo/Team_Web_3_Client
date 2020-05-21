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

  React.useEffect(() => {
    const FetchData = async () => {
      try {
        const res = await fetch(`https://dog.ceo/api/breeds/image/random`, {});
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    FetchData();
  }, []);

  console.log('response : ',response)
  console.log('error : ', error)
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
              <button onClick={(e) => {}} style={KakaoButtonStyled}>
                <ImageStyled src="/static/kakao.png"/>
                카카오 계정으로 로그인
              </button>

          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
              <button onClick={(e) => {}} style={NaverButtonStyled}>
                <ImageStyled src="/static/naver.png"/>
                네이버 계정으로 로그인
              </button>
          </LoginModalButtonLayout>

          <LoginModalButtonLayout>
              <button onClick={(e) => {}} style={GoogleButtonStyled}>
                <ImageStyled src="/static/google.png"/>
                구글 계정으로 로그인
              </button>
          </LoginModalButtonLayout>
        </LoginModalButton>
      </LoginContainer>

  );
};

export default Login;