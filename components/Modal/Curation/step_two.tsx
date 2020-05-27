import * as React from "react";
import Half from "../../ProgressBar/half";
import styled from 'styled-components';

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

const StepTwo = ({nextButton, beforeButton, object}): React.ReactElement=> {


  const [tagList, setTagList] = React.useState([
    {
      key : 1,
      name : '비즈니스',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 2,
      name : '교육',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 3,
      name : '스포츠',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 4,
      name : '기술',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 5,
      name : '게임',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 6,
      name : '시즌',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 7,
      name : '키즈',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 8,
      name : '도시',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 9,
      name : '힐링',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 10,
      name : '일상',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 11,
      name : '여행',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 12,
      name : '파티',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 13,
      name : '웨딩',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 14,
      name : '패션',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 15,
      name : '선택안함',
      chosen : false,
      chosenPossible : true
    }
  ])
  const [selectTag, setSelectTag] = React.useState<boolean>(false);
  const [TagList, appendTagList] = React.useState([])

  const chosenTag = (key) => {

    if(key == 15){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = false;
      }

      newTagList[key-1].chosen = true;
      newTagList[key-1].chosenPossible = true;
      setTagList(newTagList);
      setSelectTag(true);
      appendTagList([newTagList[key-1].name]);

    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = true; 
      setTagList(newTagList);
      setSelectTag(true);

      appendTagList([...TagList, newTagList[key-1].name]);

    }
    

  }

  const releaseTag = (key) => {

    if(key == 15){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      setTagList(newTagList);
      setSelectTag(false);
      appendTagList(TagList.filter(e => e !== newTagList[key-1].name));

    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = false;
      setTagList(newTagList);
      
      if(tagList.find(e => e.chosen == true) == undefined){
        setSelectTag(false);
      }
  
      appendTagList(TagList.filter(e => e !== newTagList[key-1].name));
    }
    
  }

  React.useEffect(() => {
    appendTagList(object);

    let tagFlag = true;

    for(let i = 0 ; i < tagList.length ; i++){
      for(let j = 0 ; j < object.length ; j++){
        setSelectTag(true);
        if(tagList[i].key === 15 && tagList[i].name === object[j]){
          tagFlag = false; 
        }
      }
    }

    if(tagFlag){
      for(let i = 0 ; i < tagList.length ; i++){
        for(let j = 0 ; j < object.length ; j++){
          if(tagList[i].name === object[j]){
              tagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < tagList.length ; i++){
        for(let j = 0 ; j < object.length ; j++){
          if(tagList[i].key === 15){
              tagList[i].chosen = true;
              tagList[i].chosenPossible = true; 
          }
          else{
              tagList[i].chosen = false;
              tagList[i].chosenPossible = false; 
          }
        }
      }
    }
    // console.log(object);
  }, [object])
  // console.log('Tag List : ',TagList);

  return (
        
        <CurationContainer>
            <CurationModalGray>
                <Half/>
            </CurationModalGray>
            <CurationModalTitle>
              어떤 테마의 음악을 원하시나요?
            </CurationModalTitle>
            
            
            <CurationModalDescription>
              <span>
                  <img
                  src="/static/alert.png"
                  alt="alert"
                  style={{
                    position: "relative",
                    top: "1vh",
                    right: "0.3vh"
                  }}
                  />
              </span>
              최소 1개 이상의 태그를 선택해주세요.
            </CurationModalDescription>

            <CurationTagLayout>

              {tagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key)}} style={{color : "white", background: "#6865FC", border : "1px solid rgb(4, 1, 4)"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
              })}
              
            </CurationTagLayout>

            
            <CurationModalButton>

            <CurationModalButtonLayout>
                <BeforeButton onClick={() => {beforeButton(2, TagList)}}>이전으로</BeforeButton>
                {selectTag == true ? (<NextButton onClick={()=>{nextButton(2, TagList)}} style={{background : "#6865FC", cursor : "pointer"}}>다음으로</NextButton>) : (<NextButton>다음으로</NextButton>)}
                
            </CurationModalButtonLayout>

            </CurationModalButton>
        </CurationContainer>
    );
};

export default StepTwo;

