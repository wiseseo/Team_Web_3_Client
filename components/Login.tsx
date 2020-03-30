import * as React from "react";
import { GoogleLogin, GoogleLoginResponse } from "react-google-login";

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
    </div>
  );
};

export default Login;
