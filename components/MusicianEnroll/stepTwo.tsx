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
  display : flex;
  padding-top : 3%;
  padding-bottom : 6%;
  border-top: 1px solid rgba(104, 101, 252, 0.4);
  border-radius: 0.741935px;
`;

const FormContainerTitle = styled.div`
  color : #B3B4BE;
  font-size : 1rem;
  padding-top : 0.5%;
  flex : 1;
`;

const FormContainerRight = styled.div`
  flex : 2.5;

`;
const FormContainerMainDesc = styled.div`
  font-size : 0.875rem;
  font-weight : bold;
  color : #B3B4BE;
`;

const FormContainerSubDesc = styled.div`
  font-size : 0.875rem;
  color : #B3B4BE;
  padding : 1.5% 0;
  margin : 1.5% 0;
  border-bottom: 1px solid rgba(104, 101, 252, 0.4);
`;

const FormContainerDesc = styled.div`
  color : #6865FC;
  font-size: 0.75rem;
  margin-top : 1%;
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

const FlowButtonLayout = styled.div`
  padding : 0 5%;
  padding-bottom : 10%;
`;

const BeforeButton = styled.button`
  float : left;
  background : #B3B4BE;
  border-radius : 8px;
  color : #4C4C50;
  padding : 1.5% 4%;
  width : 168px;
  border: none;
  font-size : 1rem;
`;

const AfterButton = styled.button`
  float : right;
  width : 304px;
  background : #B3B4BE;
  border-radius : 8px;
  color : #E2E1E2;
  padding : 1.5% 4%;
  border: none;
  font-size : 1rem;
`;
const StepTwo = ({ nextButton }) => {

  const [tagList, setTagList] = React.useState([
    {
      key : 1,
      name : '빠른작업',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 2,
      name : '신중작업',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 3,
      name : '효과음',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 4,
      name : '보컬가능',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 5,
      name : '작사가능',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 6,
      name : '사업자등록증',
      chosen : false,
      chosenPossible : true,
    },
    {
      key : 7,
      name : '해당없음',
      chosen : false,
      chosenPossible : true,
    }
  ])

  const [oneTagList, setOneTagList] = React.useState([
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
      name : '도서',
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
      chosenPossible : true,
    },
    {
      key : 16,
      name : '제한없음',
      chosen : false,
      chosenPossible : true,
    }
  ]);

  const [twoTagList, setTwoTagList] = React.useState([
    {
      key : 1,
      name : '국악',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 2,
      name : '뉴에이지',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 3,
      name : '락',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 4,
      name : '라틴',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 5,
      name : '레게',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 6,
      name : '메탈',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 7,
      name : '발라드',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 8,
      name : '블루스',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 9,
      name : '알앤비',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 10,
      name : '어쿠스틱',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 11,
      name : '오케스트리',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 12,
      name : '인디',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 13,
      name : '일렉트로닉',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 14,
      name : '앰비언트',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 15,
      name : '에픽',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 16,
      name : '재즈',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 17,
      name : '팝',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 18,
      name : '펑크',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 19,
      name : '포크',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 20,
      name : '하우스',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 21,
      name : '힙합',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 22,
      name : '컨츄리',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 23,
      name : '클래식',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 24,
      name : '키즈',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 25,
      name : '트로트',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 26,
      name : '테크노',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 27,
      name : 'CCM',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 28,
      name : '선택안함',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 29,
      name : '제한없음',
      chosen : false,
      chosenPossible : true
    }
  ]);

  const [threeTagList, setThreeTagList] = React.useState([
    {
      key : 1,
      name : '긴장',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 2,
      name : '감동',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 3,
      name : '공포',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 4,
      name : '공상',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 5,
      name : '깜찍',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 6,
      name : '모험',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 7,
      name : '몽환',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 8,
      name : '발랄',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 9,
      name : '잔잔',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 10,
      name : '사랑',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 11,
      name : '서사',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 12,
      name : '섹시',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 13,
      name : '슬픔',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 14,
      name : '신남',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 15,
      name : '심각',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 16,
      name : '어둠',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 17,
      name : '코믹',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 18,
      name : '희망',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 19,
      name : '행복',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 20,
      name : '선택안함',
      chosen : false,
      chosenPossible : true
    },
    {
      key : 21,
      name : '제한없음',
      chosen : false,
      chosenPossible : true
    }
  ]);

  const [fourTagList, setFourTagList] = React.useState([
    {
      key : 1,
      name : '드럼',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 2,
      name : '일렉기타',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 3,
      name : '어쿠스틱기타',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 4,
      name : '벨',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 5,
      name : '보컬',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 6,
      name : '신디사이저',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 7,
      name : '색소폰',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 8,
      name : '스트링',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 9,
      name : '오르골',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 10,
      name : '오케스트라',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 11,
      name : '전통악기',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 12,
      name : '트럼펫',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 13,
      name : '플룻',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 14,
      name : '피아노',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 15,
      name : '퍼거션',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 16,
      name : '하프',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 17,
      name : '효과음',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 18,
      name : '선택안함',
      chosen: false,
      chosenPossible : true
    },
    {
      key : 19,
      name : '제한없음',
      chosen: false,
      chosenPossible : true
    }
  ]);

  const [stepTwoObj, setStepTwo] = React.useState({
    spclNoteKindNm : [],
    themeKindNm : [],
    genreKindNm : [],
    atmoKindNm : [],
    instruKindNm : [],
    workStage01 : "",
    workStage02 : "",
    workStage03 : "",
    qstnAns01 : "",
    qstnAns02 : "",
    qstnAns03 : "",
    qstnAns04 : ""
  });

  const [selectTag, setSelectTag] = React.useState<boolean>(false);
  const [selectOneTag, setSelectOneTag] = React.useState<boolean>(false);
  const [selectTwoTag, setSelectTwoTag] = React.useState<boolean>(false);
  const [selectThreeTag, setSelectThreeTag] = React.useState<boolean>(false);
  const [selectFourTag, setSelectFourTag] = React.useState<boolean>(false);

  const chosenTag = (key, idx) => {
    if(idx === 0){
      if(key == 7){
        let newTagList = [...tagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setTagList(newTagList);
        setSelectTag(true);
        setStepTwo({...stepTwoObj, spclNoteKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...tagList];
        newTagList[key-1].chosen = true; 
        setTagList(newTagList);
        setSelectTag(true);
  
        setStepTwo({...stepTwoObj, spclNoteKindNm : stepTwoObj.spclNoteKindNm.concat(newTagList[key-1].name)});
  
      }
    }
    // One
    else if(idx === 1){
      if(key === 15 || key === 16){
        let newTagList = [...oneTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setOneTagList(newTagList);
        setSelectOneTag(true);
        setStepTwo({...stepTwoObj, themeKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...oneTagList];
        newTagList[key-1].chosen = true; 
        setOneTagList(newTagList);
        setSelectOneTag(true);
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.concat(newTagList[key-1].name)});
      }
    }

    // Two
    else if(idx === 2){
      if(key === 28 || key === 29){
        let newTagList = [...twoTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setTwoTagList(newTagList);
        setSelectTwoTag(true);
        setStepTwo({...stepTwoObj, genreKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...twoTagList];
        newTagList[key-1].chosen = true; 
        setTwoTagList(newTagList);
        setSelectTwoTag(true);
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.concat(newTagList[key-1].name)});
      }
    }

    // Three
    else if(idx === 3){
      if(key === 20 || key === 21){
        let newTagList = [...threeTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setThreeTagList(newTagList);
        setSelectThreeTag(true);
        setStepTwo({...stepTwoObj, atmoKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...threeTagList];
        newTagList[key-1].chosen = true; 
        setThreeTagList(newTagList);
        setSelectThreeTag(true);
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.concat(newTagList[key-1].name)});
      }
    }

    // Four
    else if(idx === 4){
      if(key === 18 || key === 19){
        let newTagList = [...fourTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setFourTagList(newTagList);
        setSelectFourTag(true);
        setStepTwo({...stepTwoObj, instruKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...fourTagList];
        newTagList[key-1].chosen = true; 
        setFourTagList(newTagList);
        setSelectFourTag(true);
        setStepTwo({...stepTwoObj, instruKindNm : stepTwoObj.instruKindNm.concat(newTagList[key-1].name)});
      }
    }

  }

  const releaseTag = (key, idx) => {
    if(idx === 0){
      if(key == 7){
        let newTagList = [...tagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setTagList(newTagList);
        setSelectTag(false);
        setStepTwo({...stepTwoObj, spclNoteKindNm : stepTwoObj.spclNoteKindNm.filter(e => e !== newTagList[key-1].name)});
  
      }
      else{
        let newTagList = [...tagList];
        newTagList[key-1].chosen = false;
        setTagList(newTagList);
        
        if(tagList.find(e => e.chosen == true) == undefined){
          setSelectTag(false);
        }
        setStepTwo({...stepTwoObj, spclNoteKindNm : stepTwoObj.spclNoteKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 1){
      if(key === 15 || key === 16){
        let newTagList = [...oneTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setOneTagList(newTagList);
        setSelectOneTag(false);
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.filter(e => e !== newTagList[key-1].name)});
      }
      else{
        let newTagList = [...oneTagList];
        newTagList[key-1].chosen = false;
        setOneTagList(newTagList);
        
        if(oneTagList.find(e => e.chosen == true) == undefined){
          setSelectOneTag(false);
        }
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 2){
      if(key === 28 || key === 29){
        let newTagList = [...twoTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setTwoTagList(newTagList);
        setSelectTwoTag(false);
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.filter(e => e !== newTagList[key-1].name)});
  
      }
      else{
        let newTagList = [...twoTagList];
        newTagList[key-1].chosen = false;
        setTwoTagList(newTagList);
        
        if(twoTagList.find(e => e.chosen == true) == undefined){
          setSelectTwoTag(false);
        }
    
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 3){
      if(key === 20 || key === 21){
        let newTagList = [...threeTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setThreeTagList(newTagList);
        setSelectThreeTag(false);
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
  
      }
      else{
        let newTagList = [...threeTagList];
        newTagList[key-1].chosen = false;
        setThreeTagList(newTagList);
        
        if(threeTagList.find(e => e.chosen == true) == undefined){
          setSelectThreeTag(false);
        }
    
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 4){
      if(key === 18 || key === 19){
        let newTagList = [...fourTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setFourTagList(newTagList);
        setSelectFourTag(false);
        setStepTwo({...stepTwoObj, instruKindNm : stepTwoObj.instruKindNm.filter(e => e !== newTagList[key-1].name)});
      }
      else{
        let newTagList = [...fourTagList];
        newTagList[key-1].chosen = false;
        setFourTagList(newTagList);
        
        if(fourTagList.find(e => e.chosen == true) == undefined){
          setSelectFourTag(false);
        }
        setStepTwo({...stepTwoObj, instruKindNm : stepTwoObj.instruKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    
    
  }

  console.log("0 : ", stepTwoObj.spclNoteKindNm);
  console.log("1 : ", stepTwoObj.themeKindNm);
  console.log("2 : ", stepTwoObj.genreKindNm);
  console.log("3 : ", stepTwoObj.atmoKindNm);
  console.log("4 : ", stepTwoObj.instruKindNm);
  // console.log(stepTwoObj);
  return (
  <>
    <StepOneContainer>
      <StepOneTitle><span style={{fontWeight : "bold"}}>STEP2</span> 작업 방식</StepOneTitle>
      <OneThird/>
      <StepOneNeeds><span style={{color : "#6865FC"}}>*</span>는 필수입니다.</StepOneNeeds>
      
      <FormContainer>
        <FormContainerTitle>특이사항<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerRight>
          <FormContainerSubDesc style={{margin : "0"}}>다른 사람들과 차별화된 자신의 직업스타일 태그를 선택해주세요.</FormContainerSubDesc> 
          <FormContainerDesc>가능한 특성태그를 모두 선택해주세요. 해당없음 선택 시 기존 선택이 해제되고, 기본 문구가 노출됩니다.</FormContainerDesc>
          {tagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 0)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 0)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}
        </FormContainerRight>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>뮤지션 스타일 태그<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerRight>
          <FormContainerMainDesc>각 주제별로 작업 가능한 스타일의 태그를 선택해주세요.</FormContainerMainDesc> 
          <FormContainerDesc>첫번째 선택한 태그가 대표 태그로 지정됩니다.</FormContainerDesc>

          <FormContainerSubDesc>1. 작업 가능한 테마를 선택해주세요.</FormContainerSubDesc>
          {oneTagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 1)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 1)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}

          <FormContainerSubDesc>2. 작업 가능한 장르를 선택해주세요.</FormContainerSubDesc>
          {twoTagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 2)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 2)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}
          
          <FormContainerSubDesc>3. 작업 가능한 표현 분위기를 선택해주세요.</FormContainerSubDesc>
          {threeTagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 3)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 3)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}

          <FormContainerSubDesc>4. 작업에 사용 가능한 악기를 선택해주세요.</FormContainerSubDesc>
          {fourTagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 4)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 4)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}
        </FormContainerRight>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>작업단계<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerRight>
          <FormContainerMainDesc style={{margin : "0"}}>구체적인 작업 단계를 설명해주세요.</FormContainerMainDesc> 
          <FormContainerDesc>최소 1step 이상 입력해주세요.</FormContainerDesc>
          <FormContainerSubDesc>step1</FormContainerSubDesc>


          <FormContainerSubDesc>step2</FormContainerSubDesc>

          <FormContainerSubDesc>step3</FormContainerSubDesc>
          
        </FormContainerRight>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>FAQ</FormContainerTitle>
        <FormContainerRight>
          <FormContainerSubDesc style={{margin : "0"}}>다른 사람들과 차별화된 자신의 직업스타일 태그를 선택해주세요.</FormContainerSubDesc> 
          <FormContainerDesc>가능한 특성태그를 모두 선택해주세요. 해당없음 선택 시 기존 선택이 해제되고, 기본 문구가 노출됩니다.</FormContainerDesc>
          {tagList.map((list, key) => {
                if(list.chosen == true){
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 0)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 0)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
                
          })}
        </FormContainerRight>
      </FormContainer>

      <FlowButtonLayout>

          <BeforeButton onClick={()=>{history.back()}}>이전으로</BeforeButton>
          {selectTag === true &&
          selectOneTag === true &&
          selectTwoTag === true &&
          selectThreeTag === true &&
          selectFourTag === true ?
          <AfterButton onClick={nextButton} style={{cursor : "pointer", background : "#6865FC"}}>저장하고 다음으로</AfterButton>
          :
          <AfterButton>저장하고 다음으로</AfterButton>
          }
          

      </FlowButtonLayout>


    </StepOneContainer>
  </>
  );
};

export default StepTwo;