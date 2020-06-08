import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/four";
import {Tooltip} from "antd";

const EstimateUserInfoData = styled.div`
    flex: 0.2;
    color : #E2E1E2;
    padding-right : 7%;
`;


const EstimateMainDesc = styled.div`
    font-size : 1.25rem;
    font-weight : bold;
    color : #6865FC;
    margin-bottom : 24px;
`;

const EstimateSubTitle = styled.div`
    font-size : 1rem;
    color : #B3B4BE;
    font-weight :bold;
    border-bottom: 1px solid  #3E3E41;
    padding-bottom: 5px;
    margin-bottom : 8px;
`;

const EstimateSubDesc = styled.div`
    font-size: 0.875rem;
    line-height : 23px;
    color : #B3B4BE;
`;

const EstimateContentMain = styled.div`
    flex: 0.8;
    background : #121212;
    border-radius : 8px;
    width : 800px;
    height : 693px;

`;

const EstimateContentMainTitle = styled.div`
    width : 100%;
    height : 56px;
    position : relative;
`;

const EstimateContentMainSub = styled.div`
    width : 90%;
    height : 425px;
    margin : 7% 5%;
`;

const EstimateContentMainSubTitle = styled.div`
    font-size : 1.25rem;
    color : #FFFFFF;
    font-weight : bold;
    clear : both;
    margin-top : 56px;
`;
const EstimateContentMainSubTitleBack = styled.div`
    font-size : 0.75rem;
    color : #B3B4BE;
    margin-top : 8px;
`;

const CurationTagLayout = styled.div`
  margin-top : 16px;
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

const Input = styled.input`
    margin-top : 15px;
    float : left;
    width : 685px;
    color : #B3B4BE;
    background: #3E3E41;
    border-radius: 8px;
    border : none;
    height: 32px;
    padding : 0 1.5%;
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

const EstimateContentMainButton = styled.div`
    width : 100%;
    height : 96px;
    text-align : center;
    display: table;
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
    background : #121212;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    width : 344px;
    height : 48px;
    border: 0.6px solid #B3B4BE;
    font-size : 1rem;
    font-weight : bold;
    margin-right : 32px;
`;

const AfterButton = styled.button`
    width : 344px;
    height : 48px;
    background : #B3B4BE;
    border-radius : 8px;
    color : #E2E1E2;
    padding : 1.5% 4%;
    border: none;
    font-size : 1rem;
`;
const index = ({nextButton, beforeButton, object}): React.ReactElement => {

  const [stepFour, setStepFour] = React.useState<any>({
    genreKindNm : [],
    genreKindNmStr : ""
  }) 

  let [tagList, setTagList] = React.useState([
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
    }
  ])

  const [selectTag, setSelectTag] = React.useState<boolean>(false);
  const chosenTag = (key) => {

    if(key == 28){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = false;
      }

      newTagList[key-1].chosen = true;
      newTagList[key-1].chosenPossible = true;
      setTagList(newTagList);
      setSelectTag(true);
      setStepFour({...stepFour, genreKindNm : [newTagList[key-1].name]});

    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = true; 
      setTagList(newTagList);
      setSelectTag(true);

      setStepFour({...stepFour, genreKindNm : stepFour.genreKindNm.concat(newTagList[key-1].name)});

    }
  }

  const releaseTag = (key) => {

    if(key == 28){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      setTagList(newTagList);
      setSelectTag(false);
      setStepFour({...stepFour, genreKindNm : stepFour.genreKindNm.filter(e => e !== newTagList[key-1].name)});

    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = false;
      setTagList(newTagList);
      
      if(tagList.find(e => e.chosen == true) == undefined){
        setSelectTag(false);
      }
  
      setStepFour({...stepFour, genreKindNm : stepFour.genreKindNm.filter(e => e !== newTagList[key-1].name)});
    }
  }

  const refresh = () => {
    
    let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      setTagList(newTagList);
      setSelectTag(false);
      setStepFour({...stepFour, genreKindNm : []})

  }
    return (
        <>
        <EstimateUserInfoData>

            <img
                src={"/static/Frame.png"}
                alt="vector"
                style={{
                    width : 23,
                    height : 23,
                    borderRadius : "50%",
                    float : "left",
                    marginRight : "3%"
                }}
            />       
            <EstimateMainDesc>튜나 팁</EstimateMainDesc>
            <EstimateSubTitle>장르란?</EstimateSubTitle>
            <EstimateSubDesc>
            {   
                "음악 계통의 갈래를 말합니다.\n정확한 장르가 짐작되지 않을 경우 '선택안함'을 누르고 '기타'칸에 원하는 스타일을 입력해주세요.".split("\n").map(function(item, idx) {
                    return (
                        <span key={idx}>
                            {item}
                            <br/>
                        </span>
                        )
                })
            }
            </EstimateSubDesc>
            
        </EstimateUserInfoData>
        
        <EstimateContentMain>
            
            <EstimateContentMainTitle>
                <Progress/>
            </EstimateContentMainTitle>
            
            <EstimateContentMainSub>

                <EstimateContentMainSubTitle>어떤 장르의 음악을 원하시나요?</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>최소 1개 이상의 태그를 선택해주세요. 첫번째 선택한 태그가 <span style={{fontWeight : "bold"}}>대표 태그</span>로 지정됩니다.</EstimateContentMainSubTitleBack>
                
                
                <CurationTagLayout>

                {tagList.map((list, key) => {
                    if(stepFour.genreKindNm.length === 0) {
                      return (
                        <TooltipOver placement="top" title="대표태그" key={key}>
                          <CurationTag key={key} onClick={() => {chosenTag(list.key)}}>{list.name}</CurationTag>
                        </TooltipOver>          
                      )
                    }
                    else{
                      if(list.chosen == true){

                        if(stepFour.genreKindNm[0] === list.name){
                          return (
                          <TooltipOver placement="top" title="대표태그" key={key}>
                            <CurationTag key={key} onClick={() => {releaseTag(list.key)}} style={{color : "white", background: "#6865FC", border : "1px solid rgb(4, 1, 4)"}}>{list.name}</CurationTag>
                          </TooltipOver> 
                          )
                        }
                        else{
                          return  <CurationTag key={key} onClick={() => {releaseTag(list.key)}} style={{color : "white", background: "#9997FD", border : "1px solid rgb(4, 1, 4)"}}>{list.name}</CurationTag>
                        }
                        
                      }
                      else if(list.chosenPossible == true){
                        return <CurationTag key={key} onClick={() => {chosenTag(list.key)}}>{list.name}</CurationTag>
                      }
                      else{
                        return <CurationTag key={key} style={{color : "#3E3E41", cursor : "auto", border : "1px solid #3E3E41"}}>{list.name}</CurationTag>
                      }
                    }
                    
                    
                  })}
                  
                  <RefreshLayout style={{display : "flex", flexDirection : "row", marginTop : 5}}>
                    <RefreshImg
                      onClick={() => {refresh()}}
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

                  
                </CurationTagLayout>
                  
                <EstimateContentMainSubTitleBack style={{fontSize : "0.875rem", marginTop : 32}}>기타 (직접입력)</EstimateContentMainSubTitleBack>
                <Input onChange={(e) => {setStepFour({...stepFour, genreKindNmStr : e.target.value})}}/>
            
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(4, stepFour)}}>이전으로</BeforeButton>
                {
                // nickNmFlag === 1 &&
                // introductionFlag === 1 &&
                // (stepOneObj.profileUrl !== {}) &&
                // careerFlag === 1 &&
                // celPhoneFlag === 1 &&
                // (stepOneObj.songEsntlUrl !== {}) &&
                // (stepOneObj.portFolioMainMusic.size !== 0)
                1
                ? 
                <AfterButton onClick={()=>{nextButton(4, stepFour)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
                :
                <AfterButton>다음으로</AfterButton>
                }
                </div>
            </EstimateContentMainButton>

        </EstimateContentMain>

        </>
    );
};

export default index;
