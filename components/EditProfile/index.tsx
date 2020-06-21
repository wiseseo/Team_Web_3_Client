import * as React from "react";
import styled from "styled-components";
import Toast from "./Toast";

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1120px;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #040104;
  width: 644px;
  height: 247px;
  color: white;
  margin-bottom: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
  background-color: #040104;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImgBox = styled.div`
  width: 240px;
  height: 240px;
  background-color: #040104;
  border-radius: 50%;
  overflow: hidden;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.7;
    .modify-img {
      display: block;
    }
  }
`;

const Photo = styled.div`
  /*width : 240px;
    height : 240px;*/
  width: 100%;
  height: 100%;
  background-image: url(${(props: { preview: any }) => props.preview});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const PhotoSelectBtn = styled.button`
  display: none;
  /*display : block;*/
  position: absolute;
  top: 80%;
  left: 50%;

  background: #6865fc;
  border: none;
  border-radius: 0.25rem;
  padding: 7px 15px;
  color: white;
  text-align: center;

  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: 0.5s ease;
  &:focus {
    outline: none;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  background-color: #040104;
  /*background-color : white;*/
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

const EmailContainer = styled.div`
  width: 320px;
  height: 32px;
  /*background : red;*/
  background: #040104;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const EmailBox = styled.div`
  width: 196px;
  height: 32px;
  padding-left: 16px;

  margin-right: 33px;
  /*background-color : blue;*/
  background-color: #040104;
  display: flex;
  align-items: center;
  color: #b3b4be;
`;

const NickNameContainer = styled.div`
  width: 320px;
  height: 32px;
  /*background : red;*/
  background-color: #040104;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const NickNameBox = styled.div`
  width: 180px;
  height: 32px;
  padding-left: 16px;
  /*background-color : blue;*/
  background-color: #040104;
  display: flex;
  align-items: center;
  color: #b3b4be;
  cursor: pointer;
`;

const NickNameInput = styled.input`
  &:focus {
    outline: none;
  }
  cursor: pointer;

  width: 180px;
  height: 31px;
  padding: 0px 0px 0px 16px;
  margin: 0;

  background: #121212;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 0.5rem;

  color: #ffffff;
  font-size: 0.875rem;
`;

const PhoneNumberContainer = styled.div`
  width: 320px;
  height: 32px;
  /*background : red;*/
  background-color: #040104;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const PhoneNumberBox = styled.div`
  width: 180px;
  height: 32px;
  padding-left: 16px;
  cursor: pointer;

  /*background-color : blue;*/
  background-color: #040104;

  display: flex;
  align-items: center;
  color: #b3b4be;
`;

const PhoneNumberInput = styled.input`
  cursor: pointer;
  &:focus {
    outline: none;
  }

  width: 180px;
  height: 31px;
  padding: 0px 0px 0px 16px;
  margin: 0;

  background: #121212;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: ${(props: { hasValidPN: boolean }) =>
    props.hasValidPN ? "none" : "1px solid #C93E37"};
  border-radius: 0.5rem;

  color: #ffffff;
  font-size: 0.875rem;
`;

const Label = styled.label`
  color: #b3b4be;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  padding-right: 16px;
`;

const ModifyNNBtn = styled.input.attrs({
  type: "submit",
  value: "수정",
})`
    color :  #${(props: { hasValidNN: boolean }) =>
      props.hasValidNN ? "6865FC" : "3E3E41"};
    font-size ; 0.825rem;
    background-color : #040104;
    border : none;

    cursor : pointer;
    margin-left : 10px;
    &:focus { outline:none; }
    font-weight : bold;
`;

const ModifyPNBtn = styled.input.attrs({
  type: "submit",
  value: "수정",
})`
    color :  #${(props: { hasValidPN: boolean }) =>
      props.hasValidPN ? "6865FC" : "3E3E41"};
    font-size ; 0.825rem;
    background-color : #040104;
    border : none;
    cursor : pointer;
    margin-left : 10px;
    font-weight : bold;

    &:focus { outline:none; }
`;

const Warning = styled.div`
  color: #c93e37;
  font-size: 0.6rem;
  margin-left: 10px;
  margin-top: 4px;
`;

const WithdrawalBtn = styled.button`
  width: 300px;
  height: 32px;
  /*background : red;*/
  background-color: #040104;
  border: 1px solid #b3b4be;
  box-sizing: border-box;
  border-radius: 0.5rem;
  color: #b3b4be;
  font-size: 0.825rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const EditProfile = (props: Props) => {
  const [imgFile, setImgFile] = React.useState<any>(
    "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg"
  );
  const [preview, setPreview] = React.useState<any>(
    "https://i.pinimg.com/736x/b3/0f/a8/b30fa894137c0254d47922a20e35d32c.jpg"
  );
  const [isNNClicked, setNNClicked] = React.useState<boolean>(false);
  const [isPNClicked, setPNClicked] = React.useState<boolean>(false);
  const [nickName, setNickName] = React.useState("거대한 참치");
  const [phoneNumber, setPhoneNumber] = React.useState("010-1111-1111");

  const [hasValidNN, setValidNN] = React.useState<boolean>(false);
  const [hasValidPN, setValidPN] = React.useState<boolean>(false);

  //const [isVisible, setIsVisible] = React.useState<boolean>(false);
  const [isToastShow, setToastShow] = React.useState<boolean>(false);

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImgFile(file);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
    if (e.target.value == "") setValidNN(false);
    else setValidNN(true);
  };

  const onChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
    /*if(e.target.value=="") setValidPN(false);
        else setValidPN(true);*/
    if (!isValidPN(e.target.value)) setValidPN(false);
    else setValidPN(true);
  };

  const isValidPN = (value: string): boolean => {
    const regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    return regExp.test(value);
  };

  React.useEffect(() => {
    console.log("preview : " + preview);
  }, [preview]);

  React.useEffect(() => {
    console.log("imgFile : " + imgFile);
  }, [imgFile]);

  React.useEffect(() => {
    console.log(nickName);
    console.log(hasValidNN);

    //if(nickName==="") setValidNN(false);
    //else setValidNN(true);
  }, [nickName]);

  React.useEffect(() => {
    console.log(phoneNumber);
    console.log(hasValidPN);
    console.log(isValidPN(phoneNumber));
  }, [phoneNumber]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (isToastShow) {
        setToastShow(false);
      }
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [isToastShow]);

  return (
    <Container>
      {isToastShow && <Toast />}
      <Contents>
        <ImgContainer>
          <ImgBox>
            <Photo preview={preview} />
            <PhotoSelectBtn
              className="modify-img"
              onClick={() => {
                document.getElementById("imgFileInput").click();
              }}
            >
              사진 수정하기
            </PhotoSelectBtn>
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profile_img"
              id="imgFileInput"
              style={{ display: "none" }}
              onChange={handleFileOnChange}
            ></input>
          </ImgBox>
        </ImgContainer>
        <InfoContainer>
          <EmailContainer>
            <Label>이메일</Label>
            <EmailBox>dffdf</EmailBox>
          </EmailContainer>
          <NickNameContainer>
            <Label>닉네임</Label>
            {!isNNClicked ? (
              <NickNameBox
                onClick={() => {
                  setNNClicked(true);
                }}
              >
                {nickName}
              </NickNameBox>
            ) : (
              <NickNameInput
                value={nickName}
                style={{ fontSize: "0.875rem" }}
                onChange={onChangeNickName}
                onKeyUp={(e) => {
                  if (e.keyCode == 13 && hasValidNN) {
                    setNNClicked(false);
                    setValidNN(false);
                    setToastShow(true);
                  }
                }}
              />
            )}
            <ModifyNNBtn
              hasValidNN={hasValidNN}
              onClick={() => {
                if (hasValidNN) {
                  setNNClicked(false);
                  setValidNN(false);
                  setToastShow(true);
                } else console.log("No!");
              }}
            />
          </NickNameContainer>
          <PhoneNumberContainer>
            <Label>전화번호</Label>
            {!isPNClicked ? (
              <PhoneNumberBox
                onClick={() => {
                  setPNClicked(true);
                }}
              >
                {phoneNumber}
              </PhoneNumberBox>
            ) : (
              <div>
                <PhoneNumberInput
                  value={phoneNumber}
                  style={{ fontSize: "0.875rem" }}
                  onChange={onChangePhoneNumber}
                  hasValidPN={hasValidPN}
                  onKeyUp={(e) => {
                    if (e.keyCode == 13 && hasValidPN) {
                      setPNClicked(false);
                      setValidPN(false);
                      setToastShow(true);
                    }
                  }}
                />
                {!hasValidPN && (
                  <Warning>
                    <img
                      src="/static/warn.png"
                      alt="warn"
                      width="10px"
                      height="10px"
                      style={{ marginBottom: "4px", marginRight: "4px" }}
                    />
                    올바른 휴대폰 번호가 아닙니다.
                  </Warning>
                )}
              </div>
            )}
            <ModifyPNBtn
              hasValidPN={hasValidPN}
              onClick={() => {
                if (hasValidPN) {
                  setPNClicked(false);
                  setValidPN(false);
                  setToastShow(true);
                } else console.log("No!");
              }}
            />
          </PhoneNumberContainer>
          <WithdrawalBtn>회원탈퇴</WithdrawalBtn>
        </InfoContainer>
      </Contents>
    </Container>
  );
};

export default EditProfile;
