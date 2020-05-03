import * as React from "react";
import ThreeQuarters from "../../ProgressBar/threeQuarters";
import styled from 'styled-components';

let tagList = [
    {
      key : 1,
      name : '긴장'
    },
    {
      key : 2,
      name : '감동'
    },
    {
      key : 3,
      name : '공포'
    },
    {
      key : 4,
      name : '공상'
    },
    {
      key : 5,
      name : '깜찍'
    },
    {
      key : 6,
      name : '모험'
    },
    {
      key : 7,
      name : '몽환'
    },
    {
      key : 8,
      name : '발랄'
    },
    {
      key : 9,
      name : '잔잔'
    },
    {
      key : 10,
      name : '사랑'
    },
    {
      key : 11,
      name : '서사'
    },
    {
      key : 12,
      name : '섹시'
    },
    {
      key : 13,
      name : '슬픔'
    },
    {
      key : 14,
      name : '신남'
    },
    {
      key : 15,
      name : '심각'
    },
    {
      key : 16,
      name : '어둠'
    },
    {
      key : 17,
      name : '코믹'
    },
    {
      key : 18,
      name : '희망'
    },
    {
      key : 19,
      name : '행복'
    },
    {
      key : 20,
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
  float : right;
  width: 344px;
  height: 48px;
  outline-width : 0px;
  cursor : pointer;
`;

const StepThree = ({nextButton, beforeButton}): React.ReactElement => {
    return (
        
        <CurationContainer>
            <CurationModalGray>
                <ThreeQuarters/>
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

export default StepThree;
