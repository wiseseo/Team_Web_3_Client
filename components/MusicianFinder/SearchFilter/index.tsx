import * as React from "react";
import styled from 'styled-components';
//import Footer from '../Footer';

interface Props {}

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropDown = styled.div`
  &:hover .dropdown-content {
    display: block;
    box-shadow: -2px 0px 10px rgba(88, 90, 107, 0.4);
  }
`;
const DropBtn = styled.button`
    /*background-color: red;*/
    background-color: #040104;
    color: white;
    border: 1px solid #E2E1E2;
    cursor: pointer;
    border-radius: 0.375rem;
    width: 11.5rem;
    height: 3rem;
    font-size: 1rem;
`;

const DropContents = styled.div`
    width: 11.5rem;
    background-color: #121212;
    display: none;
    position: absolute;
    border-radius: 8px;
    color: #ffffff;
    overflow : hidden;
    
`;

const DropFilters = styled.li`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor : pointer;
    &:hover {
        /*background : red;*/
        background : #181818;
    } 
`;

const FilterTag = styled.span`
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

const TagSection = styled.div`
    margin-top : 1.5rem;
`;

const SortingSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content : flex-end; 
    cursor : pointer;
    padding-top : 5rem;
    padding-bottom : 1.5rem;
`;

const Sort= styled.div`
    color :  #${(props:{isSelected: boolean}) => props.isSelected ? '6865FC' : 'B3B4BE'};
    margin-left : 0.5rem;

`;


const SearchFilter= (props: Props) => { 
    
    const [tagList, setTagList] = React.useState([
    [ 
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
    ],
    [ 
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
        
    ],
    [
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
    ],
    [
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
          }
    ]]);
    const filterStatus = [{key:0, value:"분위기"}, {key:1, value:"테마"}, {key:2, value:"장르"}, {key:3, value:"악기"}];
    const [dropdownName, setDropDownName] = React.useState("선택해주세요");
    const [filter, setFilter] = React.useState(-1);
    const [sort, setSort] = React.useState(true);
    
    const [selectTag, setSelectTag] = React.useState<boolean>(false);
    const [TagList, appendTagList] = React.useState([]);
  
    const chosenTag = (filterNo,key) => {
  
      if(key == 15){
        let newTagList = [...tagList[filterNo]];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = false;
        }
  
        newTagList[key-1].chosen = true;
        newTagList[key-1].chosenPossible = true;
        tagList[filterNo] = newTagList;
        setTagList(tagList);
        setSelectTag(true);
        appendTagList([newTagList[key-1].name]);
  
      }
      else{
        let newTagList = [...tagList[filterNo]];
        newTagList[key-1].chosen = true; 
        tagList[filterNo] = newTagList;
        setTagList(tagList);
        setSelectTag(true);
  
        appendTagList([...TagList, newTagList[key-1].name]);
  
      }
      
  
    }
  
    const releaseTag = (filterNo,key) => {
  
      if(key == 15){
        let newTagList = [...tagList[filterNo]];
        
        for(let i = 0 ; i<newTagList.length ; i++){
          newTagList[i].chosen = false;
          newTagList[i].chosenPossible = true;
        }
  
        tagList[filterNo] = newTagList;
        setTagList(tagList);
        setSelectTag(false);
        appendTagList(TagList.filter(e => e !== newTagList[key-1].name));
  
      }
      else{
        let newTagList = [...tagList[filterNo]];
        newTagList[key-1].chosen = false;
        tagList[filterNo] = newTagList;
        setTagList(tagList);
        
        if(tagList[filterNo].find(e => e.chosen == true) == undefined){
          setSelectTag(false);
        }
    
        appendTagList(TagList.filter(e => e !== newTagList[key-1].name));
      }
      
    }
  
    console.log('Tag List : ',TagList);

    
    return (
        <FilterSection>
            <DropDown>
                <DropBtn>{dropdownName}</DropBtn>
                <DropContents className="dropdown-content">
                    {filterStatus.map((list, key)=>{
                        return <DropFilters key={key} onClick={()=>{
                            setDropDownName(list.value);
                            setFilter(list.key);
                        }}>{list.value}</DropFilters>
                    })}
                </DropContents>
            </DropDown>
            <TagSection>
                {filter != -1 ? 
                    (tagList[filter].map((list, key)=>{

                        if(list.chosen == true) {
                            return  <FilterTag key={key} onClick={() => {releaseTag(filter,list.key)}} style={{color : "white", background: "#6865FC", border : "none"}}>{list.name}</FilterTag>
                        }
                        else if(list.chosenPossible == true){
                            return <FilterTag key={key} onClick={() => {chosenTag(filter,list.key)}}>{list.name}</FilterTag>
                        }
                        else{
                        return <FilterTag key={key} style={{color : "grey", cursor : "auto"}}>{list.name}</FilterTag>
                        }
                    }))
                    :
                    <span></span>
                }
            </TagSection>
            <SortingSection>
                <Sort isSelected={sort} onClick={()=>setSort(true)}>
                    <span>인기순</span>
                </Sort>
                <Sort isSelected={!sort} onClick={()=>setSort(false)} >
                    <span>신규순</span>
                </Sort>
            </SortingSection>
            
        </FilterSection>
    )
  
};

export default SearchFilter;
