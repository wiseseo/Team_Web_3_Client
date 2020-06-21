import * as React from "react";
import styled from "styled-components";
import TwoThird from "../ProgressBar/twoThird";
import {Tooltip} from "antd";
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
  padding-top : 3%;
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

const FormContainerTextarea = styled.textarea`

  color : #B3B4BE;
  background: #121212;
  border-radius: 8px;
  padding : 1.5%;
  border : none;
  line-height : 20px;
  width : 97%;
  height : 120px;
  &&{
    ::placeholder {
      color : rgba(179, 180, 190, 0.5);
      font-size : 0.75rem;
    }
  }
  &:focus {
    outline : none;
  }
`;

const FormContainerInput = styled.input`

  color : #B3B4BE;
  background: #121212;
  border-radius: 8px;
  padding : 1.5%;
  border : none;
  line-height : 20px;
  width : 97%;
  height : 32px;
  &&{
    ::placeholder {
      color : rgba(179, 180, 190, 0.5);
      font-size : 0.75rem;
    }
  }
  &:focus {
    outline : none;
  }
`;

const FlowButtonLayout = styled.div`
  padding-top : 10%;
  clear: both;

`;

const RefreshLayout = styled.div`
  display : flex;
  flex-direction : row;
  margin-top : 5px;
`;
const RefreshImg = styled.img`
  width : 24;
  height : 24;
  cursor : pointer;
`;
const RefreshLabel = styled.span`
  font-size : 0.875rem;
  font-weight : bold;
  color : #4C4C50;
  display : table-cell;
  vertical-align : middle;
  height : 28px;
`;
const TooltipOver = styled(Tooltip)``;

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
const StepTwo = ({ nextButton, beforeButton, object }) => {

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

  const [twoTagList, setTwoTagList] = React.useState([
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

  const [threeTagList, setThreeTagList] = React.useState([
    
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
      if(key === 20 || key === 21){
        let newTagList = [...oneTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setOneTagList(newTagList);
        setSelectOneTag(true);
        setStepTwo({...stepTwoObj, atmoKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...oneTagList];
        newTagList[key-1].chosen = true; 
        setOneTagList(newTagList);
        setSelectOneTag(true);
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.concat(newTagList[key-1].name)});
      }
    }

    // Two
    else if(idx === 2){
      if(key === 15 || key === 16){
        let newTagList = [...twoTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setTwoTagList(newTagList);
        setSelectTwoTag(true);
        setStepTwo({...stepTwoObj, themeKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...twoTagList];
        newTagList[key-1].chosen = true; 
        setTwoTagList(newTagList);
        setSelectTwoTag(true);
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.concat(newTagList[key-1].name)});
      }
    }

    // Three
    else if(idx === 3){
      if(key === 28 || key === 29){
        let newTagList = [...threeTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        setThreeTagList(newTagList);
        setSelectThreeTag(true);
        setStepTwo({...stepTwoObj, genreKindNm : [newTagList[key-1].name]});
      }
      else{
        let newTagList = [...threeTagList];
        newTagList[key-1].chosen = true; 
        setThreeTagList(newTagList);
        setSelectThreeTag(true);
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.concat(newTagList[key-1].name)});
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
      if(key === 20 || key === 21){
        let newTagList = [...oneTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setOneTagList(newTagList);
        setSelectOneTag(false);
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
      }
      else{
        let newTagList = [...oneTagList];
        newTagList[key-1].chosen = false;
        setOneTagList(newTagList);
        
        if(oneTagList.find(e => e.chosen == true) == undefined){
          setSelectOneTag(false);
        }
        setStepTwo({...stepTwoObj, atmoKindNm : stepTwoObj.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 2){
      if(key === 15 || key === 16){
        let newTagList = [...twoTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setTwoTagList(newTagList);
        setSelectTwoTag(false);
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.filter(e => e !== newTagList[key-1].name)});
  
      }
      else{
        let newTagList = [...twoTagList];
        newTagList[key-1].chosen = false;
        setTwoTagList(newTagList);
        
        if(twoTagList.find(e => e.chosen == true) == undefined){
          setSelectTwoTag(false);
        }
    
        setStepTwo({...stepTwoObj, themeKindNm : stepTwoObj.themeKindNm.filter(e => e !== newTagList[key-1].name)});
      }
    }
    else if(idx === 3){
      if(key === 28 || key === 29){
        let newTagList = [...threeTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setThreeTagList(newTagList);
        setSelectThreeTag(false);
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.filter(e => e !== newTagList[key-1].name)});
  
      }
      else{
        let newTagList = [...threeTagList];
        newTagList[key-1].chosen = false;
        setThreeTagList(newTagList);
        
        if(threeTagList.find(e => e.chosen == true) == undefined){
          setSelectThreeTag(false);
        }
    
        setStepTwo({...stepTwoObj, genreKindNm : stepTwoObj.genreKindNm.filter(e => e !== newTagList[key-1].name)});
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

  const refresh = (idx) => {
    if(idx === 1){
      let newTagList = [...oneTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setOneTagList(newTagList);
        setSelectOneTag(false);
        setStepTwo({...stepTwoObj, atmoKindNm : []});
  
    }
    else if(idx === 2){
      let newTagList = [...twoTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setTwoTagList(newTagList);
        setSelectTwoTag(false);
        setStepTwo({...stepTwoObj, themeKindNm : []});
    }
    else if(idx === 3){
      let newTagList = [...threeTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setThreeTagList(newTagList);
        setSelectThreeTag(false);
        setStepTwo({...stepTwoObj, genreKindNm : []});
    }
    else if(idx === 4){
      let newTagList = [...fourTagList];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        setFourTagList(newTagList);
        setSelectFourTag(false);
        setStepTwo({...stepTwoObj, instruKindNm : []});
    }
  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setStepTwo(object);

    let tagFlag = true;
    let oneTagFlag = true;
    let oneTagIdx = 0
    let twoTagFlag = true;
    let twoTagIdx = 0
    let threeTagFlag = true;
    let threeTagIdx = 0
    let fourTagFlag = true;
    let fourTagIdx = 0

    for(let i = 0 ; i < tagList.length ; i++){
      for(let j = 0 ; j < object.spclNoteKindNm.length ; j++){
        setSelectTag(true);
        if(tagList[i].key === 7 && tagList[i].name === object.spclNoteKindNm[j]){
          tagFlag = false; 
        }
      }
    }

    if(tagFlag){
      for(let i = 0 ; i < tagList.length ; i++){
        for(let j = 0 ; j < object.spclNoteKindNm.length ; j++){
          if(tagList[i].name === object.spclNoteKindNm[j]){
              tagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < tagList.length ; i++){
        for(let j = 0 ; j < object.spclNoteKindNm.length ; j++){
          if(tagList[i].key === 7){
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

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    for(let i = 0 ; i < oneTagList.length ; i++){
      for(let j = 0 ; j < object.themeKindNm.length ; j++){
        setSelectOneTag(true);
        if((oneTagList[i].key === 15 || oneTagList[i].key === 16) && oneTagList[i].name === object.themeKindNm[j]){
          oneTagFlag = false; 
          oneTagIdx = oneTagList[i].key
        }
      }
    }

    if(oneTagFlag){
      for(let i = 0 ; i < oneTagList.length ; i++){
        for(let j = 0 ; j < object.themeKindNm.length ; j++){
          if(oneTagList[i].name === object.themeKindNm[j]){
            oneTagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < oneTagList.length ; i++){
        for(let j = 0 ; j < object.themeKindNm.length ; j++){
          if(oneTagList[i].key === oneTagIdx){
            oneTagList[i].chosen = true;
            oneTagList[i].chosenPossible = true; 
          }
          else{
            oneTagList[i].chosen = false;
            oneTagList[i].chosenPossible = false; 
          }
        }
      }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0 ; i < twoTagList.length ; i++){
      for(let j = 0 ; j < object.genreKindNm.length ; j++){
        setSelectTwoTag(true);
        if((twoTagList[i].key === 28 || twoTagList[i].key === 29) && twoTagList[i].name === object.genreKindNm[j]){
          twoTagFlag = false; 
          twoTagIdx = twoTagList[i].key
        }
      }
    }

    if(twoTagFlag){
      for(let i = 0 ; i < twoTagList.length ; i++){
        for(let j = 0 ; j < object.genreKindNm.length ; j++){
          if(twoTagList[i].name === object.genreKindNm[j]){
            twoTagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < twoTagList.length ; i++){
        for(let j = 0 ; j < object.genreKindNm.length ; j++){
          if(twoTagList[i].key === twoTagIdx){
            twoTagList[i].chosen = true;
            twoTagList[i].chosenPossible = true; 
          }
          else{
            twoTagList[i].chosen = false;
            twoTagList[i].chosenPossible = false; 
          }
        }
      }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0 ; i < threeTagList.length ; i++){
      for(let j = 0 ; j < object.atmoKindNm.length ; j++){
        setSelectThreeTag(true);
        if((threeTagList[i].key === 20 || threeTagList[i].key === 21) && threeTagList[i].name === object.atmoKindNm[j]){
          threeTagFlag = false; 
          threeTagIdx = threeTagList[i].key
        }
      }
    }

    if(threeTagFlag){
      for(let i = 0 ; i < threeTagList.length ; i++){
        for(let j = 0 ; j < object.atmoKindNm.length ; j++){
          if(threeTagList[i].name === object.atmoKindNm[j]){
            threeTagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < threeTagList.length ; i++){
        for(let j = 0 ; j < object.atmoKindNm.length ; j++){
          if(threeTagList[i].key === threeTagIdx){
            threeTagList[i].chosen = true;
            threeTagList[i].chosenPossible = true; 
          }
          else{
            threeTagList[i].chosen = false;
            threeTagList[i].chosenPossible = false; 
          }
        }
      }
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    for(let i = 0 ; i < fourTagList.length ; i++){
      for(let j = 0 ; j < object.instruKindNm.length ; j++){
        setSelectFourTag(true);
        if((fourTagList[i].key === 18 || fourTagList[i].key === 19) && fourTagList[i].name === object.instruKindNm[j]){
          fourTagFlag = false; 
          fourTagIdx = fourTagList[i].key
        }
      }
    }

    if(fourTagFlag){
      for(let i = 0 ; i < fourTagList.length ; i++){
        for(let j = 0 ; j < object.instruKindNm.length ; j++){
          if(fourTagList[i].name === object.instruKindNm[j]){
            fourTagList[i].chosen = true; 
          }
        }
      }
    }
    else{
      for(let i = 0 ; i < fourTagList.length ; i++){
        for(let j = 0 ; j < object.instruKindNm.length ; j++){
          if(fourTagList[i].key === fourTagIdx){
            fourTagList[i].chosen = true;
            fourTagList[i].chosenPossible = true; 
          }
          else{
            fourTagList[i].chosen = false;
            fourTagList[i].chosenPossible = false; 
          }
        }
      }
    }
  }, [object]) 
  // console.log("0 : ", stepTwoObj.spclNoteKindNm, tagList);
  console.log("1 : ", stepTwoObj.atmoKindNm, oneTagList);
  console.log("2 : ", stepTwoObj.genreKindNm, twoTagList);
  console.log("3 : ", stepTwoObj.atmoKindNm, threeTagList);
  console.log("4 : ", stepTwoObj.instruKindNm, fourTagList);
  console.log(stepTwoObj);
  return (
  <>
    <StepOneContainer>
      <StepOneTitle><span style={{fontWeight : "bold"}}>STEP2</span> 작업 방식</StepOneTitle>
      <TwoThird/>
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

          <FormContainerSubDesc>1. 작업 가능한 표현 분위기를 선택해주세요.</FormContainerSubDesc>
          {oneTagList.map((list, key) => {
                if(stepTwoObj.atmoKindNm.length === 0){
                  return (
                  <TooltipOver placement="top" title="대표태그" key={key}>
                    <CurationTag key={key} onClick={() => {chosenTag(list.key, 1)}}>{list.name}</CurationTag>
                  </TooltipOver>
                  )
                }
                else{
                  if(list.chosen == true){
                  
                    if(stepTwoObj.atmoKindNm[0] === list.name){
                      return  (
                        <TooltipOver placement="top" title="대표태그" key={key}>
                          <CurationTag key={key} onClick={() => {releaseTag(list.key, 1)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                        </TooltipOver>
                      ) 
                    }
                    else{
                      return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 1)}} style={{color : "white", background: "#9997FD", border: "1px solid #040104"}}>{list.name}</CurationTag>
                    }
                    
                  }
                  else if(list.chosenPossible == true){
                    return <CurationTag key={key} onClick={() => {chosenTag(list.key, 1)}}>{list.name}</CurationTag>
                  }
                  else{
                    return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                  }
                }
                
                
          })}
          <RefreshLayout style={{display : "flex", flexDirection : "row", marginTop : 5}}>
            <RefreshImg
              onClick={() => {refresh(1)}}
              src="/static/refresh.png"
              alt="refresh"
              style={{
                  width : 24,
                  height : 24,
                  cursor : "pointer",
              }}
            />
            <div style={{display : "table", marginLeft : 10}}>
              <RefreshLabel style={{fontSize : "0.875rem", fontWeight : "bold", color : "#4C4C50", display : "table-cell", verticalAlign:"middle", height: "28px"}}>
                다시선택
              </RefreshLabel>
            </div>
          </RefreshLayout>
          

          <FormContainerSubDesc>2. 작업 가능한 테마를 선택해주세요.</FormContainerSubDesc>
          {twoTagList.map((list, key) => {
                if(stepTwoObj.themeKindNm.length === 0){
                  return (
                  <TooltipOver placement="top" title="대표태그" key={key}>
                    <CurationTag key={key} onClick={() => {chosenTag(list.key, 2)}}>{list.name}</CurationTag>
                  </TooltipOver>
                  )
                }
                else{
                  if(list.chosen == true){
                    if(stepTwoObj.themeKindNm[0] === list.name){
                      return  (
                        <TooltipOver placement="top" title="대표태그" key={key}>
                          <CurationTag key={key} onClick={() => {releaseTag(list.key, 2)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                        </TooltipOver>
                      ) 
                    }
                    else{
                      return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 2)}} style={{color : "white", background: "#9997FD", border: "1px solid #040104"}}>{list.name}</CurationTag>
                    }
                  }
                  else if(list.chosenPossible == true){
                    return <CurationTag key={key} onClick={() => {chosenTag(list.key, 2)}}>{list.name}</CurationTag>
                  }
                  else{
                    return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                  }
                }
                
                
          })}
          <RefreshLayout style={{display : "flex", flexDirection : "row", marginTop : 5}}>
            <RefreshImg
              onClick={() => {refresh(2)}}
              src="/static/refresh.png"
              alt="refresh"
              style={{
                  width : 24,
                  height : 24,
                  cursor : "pointer",
              }}
            />
            <div style={{display : "table", marginLeft : 10}}>
              <RefreshLabel style={{fontSize : "0.875rem", fontWeight : "bold", color : "#4C4C50", display : "table-cell", verticalAlign:"middle", height: "28px"}}>
                다시선택
              </RefreshLabel>
            </div>
          </RefreshLayout>

          <FormContainerSubDesc>3. 작업 가능한 장르를 선택해주세요.</FormContainerSubDesc>
          {threeTagList.map((list, key) => {
              if(stepTwoObj.genreKindNm.length === 0){
                return (
                <TooltipOver placement="top" title="대표태그" key={key}>
                  <CurationTag key={key} onClick={() => {chosenTag(list.key, 3)}}>{list.name}</CurationTag>
                </TooltipOver>
                )
              }
              else{
                if(list.chosen == true){
                  if(stepTwoObj.genreKindNm[0] === list.name){
                    return (
                    <TooltipOver placement="top" title="대표태그" key={key}>
                      <CurationTag key={key} onClick={() => {releaseTag(list.key, 3)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                    </TooltipOver>)
                  }
                  else{
                    return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 3)}} style={{color : "white", background: "#9997FD", border: "1px solid #040104"}}>{list.name}</CurationTag>
                  }
                }
                else if(list.chosenPossible == true){
                  return <CurationTag key={key} onClick={() => {chosenTag(list.key, 3)}}>{list.name}</CurationTag>
                }
                else{
                  return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                }
              }
                
                
          })}

          <RefreshLayout style={{display : "flex", flexDirection : "row", marginTop : 5}}>
            <RefreshImg
              onClick={() => {refresh(3)}}
              src="/static/refresh.png"
              alt="refresh"
              style={{
                  width : 24,
                  height : 24,
                  cursor : "pointer",
              }}
            />
            <div style={{display : "table", marginLeft : 10}}>
              <RefreshLabel style={{fontSize : "0.875rem", fontWeight : "bold", color : "#4C4C50", display : "table-cell", verticalAlign:"middle", height: "28px"}}>
                다시선택
              </RefreshLabel>
            </div>
          </RefreshLayout>

          <FormContainerSubDesc>4. 작업에 사용 가능한 악기를 선택해주세요.</FormContainerSubDesc>
          {fourTagList.map((list, key) => {
            if(stepTwoObj.instruKindNm.length === 0){
              return (
              <TooltipOver placement="top" title="대표태그" key={key}>
                <CurationTag key={key} onClick={() => {chosenTag(list.key, 4)}}>{list.name}</CurationTag>
              </TooltipOver>
              )
            }
            else{
              if(list.chosen == true){
                if(stepTwoObj.instruKindNm[0] === list.name){
                  return (
                    <TooltipOver placement="top" title="대표태그" key={key}>
                      <CurationTag key={key} onClick={() => {releaseTag(list.key, 4)}} style={{color : "white", background: "#6865FC", border: "1px solid #040104"}}>{list.name}</CurationTag>
                    </TooltipOver>
                  )
                }
                else{
                  return  <CurationTag key={key} onClick={() => {releaseTag(list.key, 4)}} style={{color : "white", background: "#9997FD", border: "1px solid #040104"}}>{list.name}</CurationTag>
                }
              }
              else if(list.chosenPossible == true){
                return <CurationTag key={key} onClick={() => {chosenTag(list.key, 4)}}>{list.name}</CurationTag>
              }
              else{
                return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
              }
              
            }
                
          })}
          <RefreshLayout style={{display : "flex", flexDirection : "row", marginTop : 5}}>
            <RefreshImg
              onClick={() => {refresh(4)}}
              src="/static/refresh.png"
              alt="refresh"
              style={{
                  width : 24,
                  height : 24,
                  cursor : "pointer",
              }}
            />
            <div style={{display : "table", marginLeft : 10}}>
              <RefreshLabel style={{fontSize : "0.875rem", fontWeight : "bold", color : "#4C4C50", display : "table-cell", verticalAlign:"middle", height: "28px"}}>
                다시선택
              </RefreshLabel>
            </div>
          </RefreshLayout>
        </FormContainerRight>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>작업단계<span style={{color : "#6865FC"}}>*</span></FormContainerTitle>
        <FormContainerRight>
          <FormContainerMainDesc style={{margin : "0"}}>구체적인 작업 단계를 설명해주세요.</FormContainerMainDesc> 
          <FormContainerDesc>최소 1step 이상 입력해주세요.</FormContainerDesc>
          
          <FormContainerSubDesc style={{borderBottom : "none"}}>step1</FormContainerSubDesc>
          <FormContainerTextarea defaultValue={stepTwoObj.workStage01} placeholder="작업 단계에 대해 설명해주세요." onChange={e => {
            setStepTwo({...stepTwoObj, workStage01 : e.target.value})
          }}/>

          <FormContainerSubDesc style={{borderBottom : "none"}}>step2</FormContainerSubDesc>
          <FormContainerTextarea defaultValue={stepTwoObj.workStage02} placeholder="작업 단계에 대해 설명해주세요." onChange={e => {
            setStepTwo({...stepTwoObj, workStage02 : e.target.value})
          }}/>

          <FormContainerSubDesc style={{borderBottom : "none"}}>step3</FormContainerSubDesc>  
          <FormContainerTextarea defaultValue={stepTwoObj.workStage03} placeholder="작업 단계에 대해 설명해주세요." onChange={e => {
            setStepTwo({...stepTwoObj, workStage03 : e.target.value})
          }}/>
        
        </FormContainerRight>
      </FormContainer>

      <FormContainer>
        <FormContainerTitle>FAQ</FormContainerTitle>
        <FormContainerRight>
          
          <FormContainerSubDesc style={{borderBottom : "none"}}>1. 자신의 음악 스타일에 어떤 강점이 있나요?</FormContainerSubDesc> 
          <FormContainerInput defaultValue={stepTwoObj.qstnAns01} onChange={e => {
            setStepTwo({...stepTwoObj, qstnAns01 : e.target.value})
          }}/>
          
          <FormContainerSubDesc style={{borderBottom : "none"}}>2. 수정 요청 또는 환불 규정이 어떻게 되나요?</FormContainerSubDesc> 
          <FormContainerInput defaultValue={stepTwoObj.qstnAns02} onChange={e => {
            setStepTwo({...stepTwoObj, qstnAns02 : e.target.value})
          }}/>
          
          <FormContainerSubDesc style={{borderBottom : "none"}}>3. 제작한 음원 중 가장 대표적인 음원의 작업 기간은 얼마나 되나요?</FormContainerSubDesc> 
          <FormContainerInput defaultValue={stepTwoObj.qstnAns03} onChange={e => {
            setStepTwo({...stepTwoObj, qstnAns03 : e.target.value})
          }}/>
          
          <FormContainerSubDesc style={{borderBottom : "none"}}>4. 커스터마이징 작곡 서비스의 견적은 어떤 기준으로 산정했나요?</FormContainerSubDesc>  
          <FormContainerInput defaultValue={stepTwoObj.qstnAns04} onChange={e => {
            setStepTwo({...stepTwoObj, qstnAns04 : e.target.value})
          }}/>

        </FormContainerRight>
      </FormContainer>

      <FlowButtonLayout>

          <BeforeButton onClick={() => {beforeButton(2, stepTwoObj)}}>이전으로</BeforeButton>
          {
          // (stepTwoObj.workStage01 !== "" || stepTwoObj.workStage02 !== "" || stepTwoObj.workStage03 !== "")
          1
          ?
          <AfterButton onClick={() => {nextButton(2, stepTwoObj)}} style={{cursor : "pointer", background : "#6865FC"}}>저장하고 다음으로</AfterButton>
          :
          <AfterButton>저장하고 다음으로</AfterButton>
          }
          

      </FlowButtonLayout>


    </StepOneContainer>
  </>
  );
};

export default StepTwo;