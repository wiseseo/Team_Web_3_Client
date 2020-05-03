import * as React from "react";
import styled from 'styled-components';
import Half from "../../ProgressBar/half";

let tagList = [
    {
      key : 1,
      name : '국악'
    },
    {
      key : 2,
      name : '뉴에이지'
    },
    {
      key : 3,
      name : '락'
    },
    {
      key : 4,
      name : '라틴'
    },
    {
      key : 5,
      name : '레게'
    },
    {
      key : 6,
      name : '메탈'
    },
    {
      key : 7,
      name : '발라드'
    },
    {
      key : 8,
      name : '블루스'
    },
    {
      key : 9,
      name : '알앤비'
    },
    {
      key : 10,
      name : '어쿠스틱'
    },
    {
      key : 11,
      name : '오케스트리'
    },
    {
      key : 12,
      name : '인디'
    },
    {
      key : 13,
      name : '일렉트로닉'
    },
    {
      key : 14,
      name : '앰비언트'
    },
    {
      key : 15,
      name : '에픽'
    },
    {
      key : 16,
      name : '재즈'
    },
    {
      key : 17,
      name : '팝'
    },
    {
      key : 18,
      name : '펑크'
    },
    {
      key : 19,
      name : '포크'
    },
    {
      key : 20,
      name : '하우스'
    },
    {
      key : 21,
      name : '힙합'
    },
    {
      key : 22,
      name : '컨츄리'
    },
    {
      key : 23,
      name : '클래식'
    },
    {
      key : 24,
      name : '키즈'
    },
    {
      key : 25,
      name : '트로트'
    },
    {
      key : 26,
      name : '테크노'
    },
    {
      key : 27,
      name : 'CCM'
    },
    {
      key : 28,
      name : '선택안함'
    }
    
  ]
const CurationContainer = styled.div`
  height: 45vh;
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
    padding-top : 32px;
    padding-left : 42px;
    font-weight: bold;
`;

const CurationModalDescription = styled.div`
    color: #6865FC;
    font-family: SpoqaHanSans;
    font-style: normal;
    font-weight: normal;
    font-size: 0.75rem;
    line-height: 20px;
    align-items: center;
    padding-top : 1%;
    padding-bottom : 3%;
    padding-left : 42px;
    font-weight: bold;
`;

const CurationTagLayout = styled.div`
  padding : 0 42px;
  height : 198px;
`;

const CurationTag = styled.span`
  border-radius : 20px;
  border : 1px solid #B3B4BE;
  color : #B3B4BE;
  margin-right : 16px;

  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 22px;
  margin-top : 8px;
  padding : 3px 15px;
  display : inline-block;
  margin-bottom : 8px;
`;

const CurationModalButton = styled.div`
  padding-top : 40px;
  margin: 0 5%;
`;

const CurationModalButtonLayout = styled.div`
  text-align : center;
  height: 5vh;
  margin-bottom : 16px;
`;

const BeforeButton = styled.button`
  background: #121212;
  border-radius: 8px;
  border: 1px solid #B3B4BE;
  color: #E2E1E2;
  float : left;
  font-size: 0.75rem;
  width: 344px;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const NextButton = styled.button`
  background: #6865FC;
  border-radius: 8px;
  border: none;
  color: #E2E1E2;
  float : right;
  fontFamily: "SpoqaHanSans";
  font-size: 0.75rem;
  width: 344px;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const StepTwo = ({nextButton, beforeButton}): React.ReactElement => {
    return (
        
        <CurationContainer>
            <CurationModalGray>
                <Half/>
            </CurationModalGray>
            <CurationModalTitle>
                <span>
                    <img
                    src="/static/alert.png"
                    alt="alert"
                    style={{
                    position: "relative",
                    top: "0.6vh",
                    right: "0.3vh"
                    }}
                    />
                </span>
                어떤 장르의 음악을 원하시나요?
            </CurationModalTitle>
            <CurationModalDescription>최소 1개 이상의 태그를 선택해주세요.</CurationModalDescription>

            <CurationTagLayout>

              {tagList.map((list, key) => {
                return <CurationTag>{list.name}</CurationTag>
              })}
              
            </CurationTagLayout>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <BeforeButton onClick={beforeButton}>이전으로</BeforeButton>
                <NextButton onClick={nextButton}>다음으로</NextButton>
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
    );
};

export default StepTwo;
