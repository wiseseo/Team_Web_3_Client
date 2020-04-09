import * as React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

import KakaoLogin from "react-kakao-login";

const Login: React.FC = () => {
  const successHandler = (res: GoogleLoginResponse) => {
    console.log(res);
  };

  const failureHandler = (error: any) => {
    console.error(error);
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={successHandler}
        onFailure={failureHandler}
      />
      <KakaoLogin
        jsKey={process.env.KAKAO_CLIENT_ID}
        onSuccess={(response) => console.log(response)}
        onFailure={(error) => console.error(error)}
      />
    </div>
  );
};

export default Login;
