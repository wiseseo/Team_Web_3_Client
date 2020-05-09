import * as React from "react";
import styled from 'styled-components';
//import Footer from '../Footer';
interface Props {}

/*
const Innerontainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
  color : #ffffff;
`;
*/
const DropDown = styled.div`

`;
const DropBtn = styled.button`
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
    display: block;
    position: absolute;
    border-radius: 8px;
    color: #ffffff;
    background-color: #121212;
`;
const DropFilters = styled.li`
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
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

const SearchFilter= (props: Props) => { 
    
    const [tagList, setTagList] = React.useState([
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
    }],
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
    ],[],[]]);
    const filterStatus = [{key:0, value:"분위기"}, {key:1, value:"테마"}, {key:2, value:"장르"}, {key:3, value:"악기"}];
    const [dropdownName, setDropDownName] = React.useState("선택해주세요");
    const [filter, setFilter] = React.useState(-1);
    return (
        <div>

        <DropDown>
            <DropBtn>{dropdownName}</DropBtn>
            <DropContents>
                {filterStatus.map((list, key)=>{
                    return <DropFilters key={key} onClick={()=>{
                        setDropDownName(list.value);
                        setFilter(list.key);
                    }}>{list.value}</DropFilters>
                })}
            </DropContents>
        </DropDown>
        <div>
            {filter != -1 ? 
                (tagList[filter].map((list, key)=>{
                return (<FilterTag key={key}>{list.name}</FilterTag>)
                }))
                :
                <span></span>
            }
        </div>
        </div>
    )
  
};

export default SearchFilter;
