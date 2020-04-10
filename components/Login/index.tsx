import * as React from "react";
import styled from 'styled-components';
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import KakaoLogin from "react-kakao-login";

const Login = (): React.ReactElement => {
  
  const successHandler = (res: GoogleLoginResponse) => {
    console.log('google Res : ', res);
  };

  const failureHandler = (error: any) => {
    console.error('google Err : ', error);
  };

  return (
    <>
      <div>
        <GoogleLogin
          clientId={process.env.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={successHandler}
          onFailure={failureHandler}
        />
        <KakaoLogin
          jsKey={process.env.KAKAO_CLIENT_ID}
          onSuccess={(response) => console.log('hi : ',response)}
          onFailure={(error) => console.error('hi : ',error)}
          
          getProfile={true}
        />
      </div>
    </>
  );
};

export default Login;
