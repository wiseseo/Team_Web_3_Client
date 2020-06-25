import * as React from "react";
import styled from "styled-components";
import Progress from "../ProgressBar/TenProgress/two";
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
    border-radius: 8px;
    background: #181818;
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
    cursor : pointer;
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

  const [stepTwo, setStepTwo] = React.useState<any>({
    atmoKindNm : [],
    atmoKindNmStr : ""
  }) 
  const [tagList, setTagList] = React.useState([
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
    }
  ])
  
  const chosenTag = (key) => {

    if(key == 20){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = false;
      }

      newTagList[key-1].chosen = true;
      newTagList[key-1].chosenPossible = true;
      setTagList(newTagList);
      setStepTwo({...stepTwo, atmoKindNm : [newTagList[key-1].name]});
    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = true; 
      setTagList(newTagList);

      setStepTwo({...stepTwo, atmoKindNm : stepTwo.atmoKindNm.concat(newTagList[key-1].name)});
    }
  }

  const releaseTag = (key) => {

    if(key == 20){
      let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      setTagList(newTagList);
      setStepTwo({...stepTwo, atmoKindNm : stepTwo.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
    }
    else{
      let newTagList = [...tagList];
      newTagList[key-1].chosen = false;
      setTagList(newTagList);
      
      if(tagList.find(e => e.chosen == true) == undefined){
      }
  
      setStepTwo({...stepTwo, atmoKindNm : stepTwo.atmoKindNm.filter(e => e !== newTagList[key-1].name)});
    }
  }

  const refresh = () => {
    
    let newTagList = [...tagList];
      
      for(let i = 0 ; i<newTagList.length ; i++){
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      setTagList(newTagList);
      setStepTwo({...stepTwo, atmoKindNm : []})
  };

  React.useEffect(() => {
    setStepTwo(object);
    window.scrollTo(0, 0);

    if(object.atmoKindNm.find(x => x === "선택안함")){
      for(let i = 0 ; i < tagList.length ; i++){
        if(object.atmoKindNm.find(x => x === tagList[i].name)){
          if(tagList[i].name === "선택안함"){
            tagList[i].chosen = true;
          }
        }
        else{
          tagList[i].chosen = false;
          tagList[i].chosenPossible = false;
        }
      }
    }
    else{
      for(let i = 0 ; i < tagList.length ; i++){
        if(object.atmoKindNm.find(x => x === tagList[i].name)){
          tagList[i].chosen = true;          
        }
      }
    }
    
  }, [object]);

  // console.log('stepTwo : ',stepTwo);

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
            <EstimateSubTitle>분위기란?</EstimateSubTitle>
            <EstimateSubDesc>
            {   
                "의뢰하는 곡의 전반적인 느낌을 말합니다. 공포스러운 곡, 감동적인 곡 등 단어 앞에 분위기 키워드를 붙여보세요.".split("\n").map(function(item, idx) {
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

                <EstimateContentMainSubTitle>곡의 분위기를 알려주세요.</EstimateContentMainSubTitle>
                <EstimateContentMainSubTitleBack>대표 태그는 가장 처음에 선택해야 해요. 1개 이상의 태그를 선택하면 다음으로 넘어갈 수 있어요.</EstimateContentMainSubTitleBack>
                
                
                <CurationTagLayout>

                {tagList.map((list, key) => {
                    if(stepTwo.atmoKindNm.length === 0) {
                      return (
                        <TooltipOver placement="top" title="대표태그" key={key}>
                          <CurationTag key={key} onClick={() => {chosenTag(list.key)}}>{list.name}</CurationTag>
                        </TooltipOver>          
                      )
                    }
                    else{
                      if(list.chosen == true){

                        if(stepTwo.atmoKindNm[0] === list.name){
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
                  
                <EstimateContentMainSubTitleBack style={{fontSize : "0.875rem"}}>기타 (직접입력)</EstimateContentMainSubTitleBack>
                <Input defaultValue={stepTwo.atmoKindNmStr} placeholder="기타 코멘트가 있다면 적어주세요." onChange={(e) => {setStepTwo({...stepTwo, atmoKindNmStr : e.target.value})}} />
            
            </EstimateContentMainSub>
            
            <EstimateContentMainButton>
                <div style={{display:"table-cell", height : "100%", verticalAlign:"middle"}}>
                <BeforeButton onClick={()=>{beforeButton(2, stepTwo)}}>이전으로</BeforeButton>
                {
                  stepTwo.atmoKindNm.length > 0
                  || stepTwo.atmoKindNmStr !== ""
                
                ? 
                <AfterButton onClick={()=>{nextButton(2, stepTwo)}} style={{cursor : "pointer", background : "#6865FC"}}>다음으로</AfterButton>
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