import * as React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";
import NaverLogin from "react-naver-login";

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
      <NaverLogin
        clientId={process.env.NAVER_CLIENT_ID}
        callbackUrl="http://127.0.0.1:3000/login"
        render={(props) => <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={(naverUser) => console.log(naverUser)}
        onFailure={() => console.error("error")}
      />
    </div>
  );
};

export default Login;
