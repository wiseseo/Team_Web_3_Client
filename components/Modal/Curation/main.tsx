import * as React from "react";
import styled from 'styled-components';

const CurationContainer = styled.div`
  height: 45vh;
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
  padding-bottom : 3%;
`;

const CurationModalButton = styled.div`
  padding-top : 40px;
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
            <CurationModalTitle>1</CurationModalTitle>
            <CurationModalDescription>어서오세요. 당신에게 딱맞는~ 어쩌고 하는 큐레이션 설명글</CurationModalDescription>

            <CurationModalLogo>
            <img
            src="/static/vector.png"
            alt="vector"
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
