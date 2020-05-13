import * as React from "react";
import styled from "styled-components";
import OneThird from "../ProgressBar/oneThird";
interface Props {}

const StepOneContainer = styled.div`
  width : 100%;
  background: #040104;
  padding-bottom : 10%;
`;

const StepOneTitle = styled.div`
  font-size : 1rem;
  color: #6865FC;
`;

const StepOneNeeds = styled.div`
  font-size : 0.75rem;
  color: #B3B4BE;
  float : right;
  padding-bottom : 1%;
`;

const FormContainer = styled.div`
  clear : both;
  padding-top : 3%;
  padding-bottom : 6%;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  border-radius: 0.741935px;
`;

const FormContainerTitle = styled.div`
  color : #B3B4BE;
  float : left;
  font-size : 1rem;
  font-weight : bold;
  padding-top : 0.5%;
  
`;

const FormContainerInput = styled.input`
  float : right;
  width : 70%;
  color : #B3B4BE;
  background: #121212;
  border-radius: 8px;
  border : none;
  height: 32px;
  padding : 0 1.5%;
  &&{
    ::placeholder {
      color : #B3B4BE;
      font-size : 0.75rem;
    }
  }
`;

const FormContainerProfile = styled.div`
  float : right;
  width : 73%;
  position : relative;
  top : -1.5vh;
`;

const FormContainerProfileUpload = styled.button`
  background : #3E3E41;
  color : #B3B4BE;
  width : 56px;
  height : 32px;
  font-size : 0.75rem;
  font-weight : bold;
  border : none;
  border-radius: 6px;
  margin-bottom : 0.5%;

`;

const FormContainerProfileContent = styled.div`
  color : #6865FC;
  font-size : 0.75rem;
`;

const FormContainerInputTitle = styled.div`
  float : right;
  width : 73%;
  color : #B3B4BE;
  height: 32px;
`;

const FormContainerAddURL = styled.div`
  float: right;
  margin-bottom : 2%;
  width: 73%;
`;

const FormContainerAddURLButton = styled.button`
  border-radius: 8px;
  border: 1px solid #FFFFFF;
  background: #040104;
  color: #B3B4BE;
  height: 32px;
  width: 144px;
  cursor : pointer;
`;

const FormContainerInputSelect = styled.div`
  margin-bottom : 3%;
  width : 32%;
  float : right;
  padding-left : 3%;
`;

const FormContainerInputSelectBox = styled.select`
  border-radius : 8px;
  padding-left: 3%;
  background: #040104;
  height: 32px;
  color: #B3B4BE;
  border: 1px solid #B3B4BE;
  width: 50%;
`;

const StepOne = ({ nextButton }) => {

  const [addUrl, setAddUrl] = React.useState([0]);
  const [addSns, setAddSns] = React.useState([0]);
  const addUrlButton = () => {

    setAddUrl(previousUrl => (previousUrl.concat(addUrl.length)));

  }  

  const addSnsButton = () => {

    setAddSns(previousSns => (previousSns.concat(addSns.length)));

  }  
  // console.log(addUrl)
  return (
  <>
    <StepOneContainer>
      <StepOneTitle><span style={{fontWeight : "bold"}}>STEP1</span> 뮤지션 소개 정보</StepOneTitle>
      <OneThird/>
      <StepOneNeeds><span style={{color : "#6865FC"}}>*</span>는 필수입니다.</StepOneNeeds>
      
      <FormContainer>
        <FormContainerTitle>뮤지션 활동명<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerInput/>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>프로필 사진<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerProfile>
          
          <img
            src="/static/vector.png"
            alt="vector"
            style={{
                width : 45,
                height : 45,
                borderRadius : "50%",
                float : "left",
                marginRight : "3%"
            }}
            />

          <div>
            <FormContainerProfileUpload onClick={()=>{
              document.getElementById('getFile').click()
            }}>업로드
            </FormContainerProfileUpload>
            <input style={{visibility : "hidden"}} type="file" id="getFile"/>

            <FormContainerProfileContent>250x250 픽셀에 최적화되어 있으며, 10Mb 이하의 JPG, GIF, PNG 파일을 지원합니다.</FormContainerProfileContent>
          </div>
        </FormContainerProfile>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>카피라이트<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        
        <FormContainerInputTitle>
          <div style={{fontSize : "0.875rem", float:"left"}}>뮤지션으로서의 자신을 한문장으로 표현해주세요</div>
          <div style={{float : "right", fontSize:"0.625rem"}}>40자</div>
        </FormContainerInputTitle>
        <FormContainerInput style={{marginBottom : "3%"}}/>

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>경력<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>

        <FormContainerInput style={{marginBottom : "3%", height : 200}}/>
        

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>포트폴리오 링크</FormContainerTitle>

          {addUrl.map((value, idx) => {
            
            console.log('value : ',value,idx);
            return <FormContainerInput style={{marginBottom : "3%"}} key={idx}/>;
          })}
          
        <div><div style={{width : "30%"}}/></div>
  
        <FormContainerAddURL> 
          <FormContainerAddURLButton onClick={addUrlButton}>+ url추가하기</FormContainerAddURLButton>
        </FormContainerAddURL>
        
        <div><div style={{width : "30%"}}/></div>

        <FormContainerProfileContent style={{width : "73%", float : "right", marginBottom : "2%"}}> 
          유튜브, 사운드클라우드, 개인사이트 등 작업 음원을 올리는 포트폴리오 사이트 링크를 등록해주세요
        </FormContainerProfileContent>
        
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>휴대폰 번호<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerInput placeholder="010-1234-5678"/>

        <div><div style={{width : "30%"}}/></div>

        <FormContainerProfileContent style={{width : "73%", float : "right", marginBottom : "2%", marginTop : "2%"}}> 
          거래가 성사되기 전에는 뮤지션의 연락처가 공개되지 않습니다. 원활한 소통을 위해 연락처를 기입해주세요.
        </FormContainerProfileContent>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>SNS 연락처</FormContainerTitle>
        
        {addSns.map((value, idx) => {
          
          console.log(value,idx);
          return (
          <div> 
            
            <FormContainerInputSelect>
              <FormContainerInputSelectBox name="cars">
                <option disabled selected>선택해주세요</option>
                <option value="카카오톡">카카오톡</option>
                <option value="페이스북">페이스북</option>
                <option value="인스타그램">인스타그램</option>
                <option value="트위터">트위터</option>
              </FormContainerInputSelectBox>
            </FormContainerInputSelect>

            <FormContainerInput style={{marginBottom : "3%", width : "35%", float : "right"}} key={idx}/>
            
          </div>
        )})}
        

        <FormContainerAddURL> 
          <FormContainerAddURLButton onClick={addSnsButton}>+ SNS추가하기</FormContainerAddURLButton>
        </FormContainerAddURL>

        <div><div style={{width : "30%"}}/></div>

        <FormContainerProfileContent style={{width : "73%", float : "right", marginBottom : "2%"}}> 
          원활한 소통을 위해 고객이 확인 가능한 SNS 아이디를 남겨주세요.
        </FormContainerProfileContent>

      </FormContainer>

      <FormContainer>
        <FormContainerTitle>포트폴리오 음원</FormContainerTitle>
        <FormContainerInput/>
      </FormContainer>

    </StepOneContainer>
  </>
  );
};

export default StepOne;

{/* <button onClick={nextButton}>hi</button> */}