import * as React from "react";
import styled from 'styled-components';

const CurationContainer = styled.div`
  height : 100%;
  background : #121212;
  border-radius: 8px;
`;

const CurationModalLogo = styled.div`
  text-align : center;

  height: 200px;
`;

const CurationModalGray = styled.div`
    height : 64px;
    background: #181818;
    border-radius: 8px 8px 0 0;
    position : relative;
`;
const CurationModalTitle = styled.div`
  color: #FFFFFF;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 20px;
  align-items: center;
  text-align: center; 
  padding-top : 32px;
`;

const CurationModalDescription = styled.div`
  color: #B3B4BE;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 20px;
  align-items: center;
  text-align: center;   
  padding-top : 1%;
`;

const CurationModalButton = styled.div`
  margin: 0 10%;
`;

const CurationModalButtonLayout = styled.div`
  text-align : center;
  height: 5vh;
  margin-bottom : 16px;
`;

const NextButton = styled.button`
  background: #6865FC;
  border-radius: 8px;
  border: none;
  color: #E2E1E2;
  fontFamily: "SpoqaHanSans";
  font-size: 0.75rem;
  width: 344px;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const StepMain = ({nextButton}): React.ReactElement => {
    return (
        
        <CurationContainer>
            <CurationModalGray/>
            <CurationModalTitle>나에게 맞는 뮤지션은 누구일까요?</CurationModalTitle>
            <CurationModalDescription>나의 취향 뮤지션을 발견하고 나만의 곡을 의뢰해보세요.</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/curation-img.png"
            alt="vector"
            width="240px"
            height="188px"
            style={{
                
            }}
            />
            </CurationModalLogo>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <NextButton onClick={nextButton}>시작하기</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
    );
};

export default StepMain;
