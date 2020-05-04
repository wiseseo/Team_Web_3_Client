import * as React from "react";
import styled from 'styled-components';
import Half from "../../ProgressBar/half";

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
  cursor : pointer;
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
  background: #B3B4BE;
  border-radius: 8px;
  border: none;
  color: #E2E1E2;
  float : right;
  font-size: 0.75rem;
  width: 344px;
  height: 48px;
  outline-width : 0px;
`;

const StepTwo = ({nextButton, beforeButton}): React.ReactElement => {

  let [tagList, setTagList] = React.useState([
    {
      key : 1,
      name : '국악',
      chosen : false
    },
    {
      key : 2,
      name : '뉴에이지',
      chosen : false
    },
    {
      key : 3,
      name : '락',
      chosen : false
    },
    {
      key : 4,
      name : '라틴',
      chosen : false
    },
    {
      key : 5,
      name : '레게',
      chosen : false
    },
    {
      key : 6,
      name : '메탈',
      chosen : false
    },
    {
      key : 7,
      name : '발라드',
      chosen : false
    },
    {
      key : 8,
      name : '블루스',
      chosen : false
    },
    {
      key : 9,
      name : '알앤비',
      chosen : false
    },
    {
      key : 10,
      name : '어쿠스틱',
      chosen : false
    },
    {
      key : 11,
      name : '오케스트리',
      chosen : false
    },
    {
      key : 12,
      name : '인디',
      chosen : false
    },
    {
      key : 13,
      name : '일렉트로닉',
      chosen : false
    },
    {
      key : 14,
      name : '앰비언트',
      chosen : false
    },
    {
      key : 15,
      name : '에픽',
      chosen : false
    },
    {
      key : 16,
      name : '재즈',
      chosen : false
    },
    {
      key : 17,
      name : '팝',
      chosen : false
    },
    {
      key : 18,
      name : '펑크',
      chosen : false
    },
    {
      key : 19,
      name : '포크',
      chosen : false
    },
    {
      key : 20,
      name : '하우스',
      chosen : false
    },
    {
      key : 21,
      name : '힙합',
      chosen : false
    },
    {
      key : 22,
      name : '컨츄리',
      chosen : false
    },
    {
      key : 23,
      name : '클래식',
      chosen : false
    },
    {
      key : 24,
      name : '키즈',
      chosen : false
    },
    {
      key : 25,
      name : '트로트',
      chosen : false
    },
    {
      key : 26,
      name : '테크노',
      chosen : false
    },
    {
      key : 27,
      name : 'CCM',
      chosen : false
    },
    {
      key : 28,
      name : '선택안함',
      chosen : false
    }
  ])
  
  const [selectTag, setSelectTag] = React.useState<boolean>(false);
  const [TagList, appendTagList] = React.useState([])
  const chosenTag = (key) => {

    let newTagList = [...tagList];
    newTagList[key-1].chosen = true; 
    setTagList(newTagList);
    setSelectTag(true);

    appendTagList([...TagList, newTagList[key-1].name]);

  }

  const releaseTag = (key) => {

    let newTagList = [...tagList];
    newTagList[key-1].chosen = false;
    setTagList(newTagList);
    setSelectTag(false);

    if(tagList.find(e => e.chosen == true) == undefined){
      setSelectTag(false);
    }
  }


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
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key)}} style={{color : "white", background: "#6865FC", border : "none"}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key)}}>{list.name}</CurationTag>
                }
                
            })}
              
            </CurationTagLayout>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <BeforeButton onClick={beforeButton}>이전으로</BeforeButton>
                {selectTag == true ? (<NextButton onClick={()=>{nextButton(2, TagList)}} style={{background : "#6865FC", cursor : "pointer"}}>다음으로</NextButton>) : (<NextButton>다음으로</NextButton>)}
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
    );
};

export default StepTwo;
