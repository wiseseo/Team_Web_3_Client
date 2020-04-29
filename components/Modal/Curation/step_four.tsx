import * as React from "react";
import styled from 'styled-components';
import Fixed from "../../ProgressBar/fixed";

let tagList = [
    {
      key : 1,
      name : '드럼'
    },
    {
      key : 2,
      name : '일렉기타'
    },
    {
      key : 3,
      name : '어쿠스틱기타'
    },
    {
      key : 4,
      name : '벨'
    },
    {
      key : 5,
      name : '보컬'
    },
    {
      key : 6,
      name : '신디사이저'
    },
    {
      key : 7,
      name : '색소폰'
    },
    {
      key : 8,
      name : '스트링'
    },
    {
      key : 9,
      name : '오르골'
    },
    {
      key : 10,
      name : '오케스트라'
    },
    {
      key : 11,
      name : '전통악기'
    },
    {
      key : 12,
      name : '트럼펫'
    },
    {
      key : 13,
      name : '플룻'
    },
    {
      key : 14,
      name : '피아노'
    },
    {
      key : 15,
      name : '퍼거션'
    },
    {
      key : 16,
      name : '하프'
    },
    {
      key : 17,
      name : '효과음'
    },
    {
      key : 18,
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
  fontFamily: "SpoqaHanSans";
  font-size: 0.75rem;
  width: 344px;
  float : right;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const StepFour = ({nextButton, beforeButton}): React.ReactElement => {
    return (
        
        <CurationContainer>
            <CurationModalGray>
                <Fixed/>
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
                어떤 분위기의 음악을 원하시나요?
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

export default StepFour;
