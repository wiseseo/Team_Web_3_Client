import * as React from "react";
import styled from "styled-components";

interface Props {}

const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropDownSection = styled.div`
  position: relative;

  &:hover .dropdown-content {
    display: block;
    box-shadow: -2px 0px 10px rgba(88, 90, 107, 0.4);
  }
  &:focus {
    outline: none;
  }
`;
const DropBtn = styled.button`
  /*background-color: red;*/
  background-color: #040104;
  color: white;
  border: 1px solid #e2e1e2;
  cursor: pointer;
  border-radius: 6px;
  width: 184px;
  height: 48px;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  &:focus {
    outline: none;
  }
`;

const DropContents = styled.div`
  display: none;
  width: 184px;
  background-color: #121212;
  position: absolute;
  top: 48px;
  border-radius: 8px;
  color: #ffffff;
  overflow: hidden;
`;

const DropFilters = styled.li`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    /*background : red;*/
    background: #181818;
  }
`;

const FilterTag = styled.span`
  border-radius: 20px;
  border: 1px solid #b3b4be;
  color: #b3b4be;
  margin-right: 16px;

  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 22px;
  margin-top: 8px;
  padding: 3px 15px;
  display: inline-block;
  margin-bottom: 8px;
  cursor: pointer;
`;

const TagSection = styled.div`
  margin-top: 16px;
`;

const SortingSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  padding-top: 20px;
  padding-bottom: 24px;
`;

const Sort = styled.div`
  color: #${(props: { isSelected: boolean }) => (props.isSelected ? "6865FC" : "B3B4BE")};
  margin-left: 8px;
  font-size: 1rem;
  font-weight: bold;
`;

const SearchFilter = (props: Props) => {
  const [tagList, setTagList] = React.useState([
    [
      {
        key: 1,
        name: "긴장",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 2,
        name: "감동",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 3,
        name: "공포",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 4,
        name: "공상",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 5,
        name: "깜찍",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 6,
        name: "모험",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 7,
        name: "몽환",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 8,
        name: "발랄",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 9,
        name: "잔잔",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 10,
        name: "사랑",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 11,
        name: "서사",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 12,
        name: "섹시",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 13,
        name: "슬픔",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 14,
        name: "신남",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 15,
        name: "심각",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 16,
        name: "어둠",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 17,
        name: "코믹",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 18,
        name: "희망",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 19,
        name: "행복",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 20,
        name: "선택안함",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 21,
        name: "제한없음",
        chosen: false,
        chosenPossible: true,
      },
    ],
    [
      {
        key: 1,
        name: "비즈니스",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 2,
        name: "교육",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 3,
        name: "스포츠",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 4,
        name: "기술",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 5,
        name: "게임",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 6,
        name: "시즌",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 7,
        name: "키즈",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 8,
        name: "도시",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 9,
        name: "힐링",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 10,
        name: "일상",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 11,
        name: "여행",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 12,
        name: "파티",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 13,
        name: "웨딩",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 14,
        name: "패션",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 15,
        name: "선택안함",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 16,
        name: "제한없음",
        chosen: false,
        chosenPossible: true,
      },
    ],
    [
      {
        key: 1,
        name: "국악",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 2,
        name: "뉴에이지",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 3,
        name: "락",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 4,
        name: "라틴",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 5,
        name: "레게",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 6,
        name: "메탈",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 7,
        name: "발라드",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 8,
        name: "블루스",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 9,
        name: "알앤비",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 10,
        name: "어쿠스틱",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 11,
        name: "오케스트리",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 12,
        name: "인디",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 13,
        name: "일렉트로닉",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 14,
        name: "앰비언트",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 15,
        name: "에픽",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 16,
        name: "재즈",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 17,
        name: "팝",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 18,
        name: "펑크",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 19,
        name: "포크",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 20,
        name: "하우스",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 21,
        name: "힙합",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 22,
        name: "컨츄리",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 23,
        name: "클래식",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 24,
        name: "키즈",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 25,
        name: "트로트",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 26,
        name: "테크노",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 27,
        name: "CCM",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 28,
        name: "선택안함",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 29,
        name: "제한없음",
        chosen: false,
        chosenPossible: true,
      },
    ],
    [
      {
        key: 1,
        name: "드럼",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 2,
        name: "일렉기타",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 3,
        name: "어쿠스틱기타",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 4,
        name: "벨",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 5,
        name: "보컬",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 6,
        name: "신디사이저",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 7,
        name: "색소폰",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 8,
        name: "스트링",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 9,
        name: "오르골",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 10,
        name: "오케스트라",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 11,
        name: "전통악기",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 12,
        name: "트럼펫",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 13,
        name: "플룻",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 14,
        name: "피아노",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 15,
        name: "퍼거션",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 16,
        name: "하프",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 17,
        name: "효과음",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 18,
        name: "선택안함",
        chosen: false,
        chosenPossible: true,
      },
      {
        key: 19,
        name: "제한없음",
        chosen: false,
        chosenPossible: true,
      },
    ],
  ]);

  const filterType = [
    { id: 0, type: "선택해주세요" },
    { id: 1, type: "분위기" },
    { id: 2, type: "테마" },
    { id: 3, type: "장르" },
    { id: 4, type: "악기" },
  ];
  const [dropdownName, setDropDownName] = React.useState(0);

  const [sort, setSort] = React.useState<boolean>(true);

  const [selectTag, setSelectTag] = React.useState<boolean>(false);
  const [TagList, appendTagList] = React.useState([]);

  const chosenTag = (filterNo, key) => {
    if (
      key == tagList[filterNo].length - 1 ||
      key == tagList[filterNo].length
    ) {
      let newTagList = [...tagList[filterNo]];

      for (let i = 0; i < newTagList.length; i++) {
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = false;
      }

      newTagList[key - 1].chosen = true;
      newTagList[key - 1].chosenPossible = true;
      tagList[filterNo] = newTagList;
      setTagList(tagList);
      setSelectTag(true);
      appendTagList([newTagList[key - 1].name]);
    } else {
      let newTagList = [...tagList[filterNo]];
      newTagList[key - 1].chosen = true;
      tagList[filterNo] = newTagList;
      setTagList(tagList);
      setSelectTag(true);

      appendTagList([...TagList, newTagList[key - 1].name]);
    }
  };

  const releaseTag = (filterNo, key) => {
    if (
      key == tagList[filterNo].length - 1 ||
      key == tagList[filterNo].length
    ) {
      let newTagList = [...tagList[filterNo]];

      for (let i = 0; i < newTagList.length; i++) {
        newTagList[i].chosen = false;
        newTagList[i].chosenPossible = true;
      }

      tagList[filterNo] = newTagList;
      setTagList(tagList);
      setSelectTag(false);
      appendTagList(TagList.filter((e) => e !== newTagList[key - 1].name));
    } else {
      let newTagList = [...tagList[filterNo]];
      newTagList[key - 1].chosen = false;
      tagList[filterNo] = newTagList;
      setTagList(tagList);

      if (tagList[filterNo].find((e) => e.chosen == true) == undefined) {
        setSelectTag(false);
      }

      appendTagList(TagList.filter((e) => e !== newTagList[key - 1].name));
    }
  };

  console.log("TagList : ", TagList);

  React.useEffect(() => {
    if (dropdownName != 0) {
      appendTagList([]);
      for (let i = 0; i < tagList.length; i++) {
        for (let j = 0; j < tagList[i].length; j++) {
          tagList[i][j].chosen = false;
          tagList[i][j].chosenPossible = true;
        }
      }
      document.getElementById("pathIcon").style.transform = "scaleY(-1)";
    }
    console.log(`${dropdownName} : ${TagList}`);
  }, [dropdownName]);

  return (
    <FilterSection>
      <DropDownSection
        onMouseOver={() => {
          document.getElementById("dropdown-content").style.display = "block";
          document.getElementById("pathIcon").style.transform = "scaleY(1)";
        }}
        onMouseOut={() => {
          document.getElementById("dropdown-content").style.display = "none";
          if (!dropdownName)
            document.getElementById("pathIcon").style.transform = "scaleY(1)";
          else
            document.getElementById("pathIcon").style.transform = "scaleY(-1)";
        }}
      >
        <DropBtn>
          <span style={{ paddingLeft: "11px" }}>
            {filterType[dropdownName].type}
          </span>
          <img
            src="/static/path.png"
            alt="path"
            className="pathIcon"
            id="pathIcon"
            style={{ transform: "scaleY(1)", paddingRight: "16px" }}
          />
        </DropBtn>
        <DropContents className="dropdown-content" id="dropdown-content">
          {filterType.splice(1).map(({ id, type }) => {
            return (
              <DropFilters
                key={id}
                onClick={() => {
                  setDropDownName(id);
                  document.getElementById("dropdown-content").style.display =
                    "none";
                }}
              >
                {type}
              </DropFilters>
            );
          })}
        </DropContents>
      </DropDownSection>
      <TagSection>
        {dropdownName != 0 ? (
          tagList[dropdownName - 1].map((list, key) => {
            if (list.chosen == true) {
              return (
                <FilterTag
                  key={key}
                  onClick={() => {
                    releaseTag(dropdownName - 1, list.key);
                  }}
                  style={{
                    color: "white",
                    background: "#6865FC",
                    border: "1px solid #6865FC",
                  }}
                >
                  {list.name}
                </FilterTag>
              );
            } else if (list.chosenPossible == true) {
              return (
                <FilterTag
                  key={key}
                  onClick={() => {
                    chosenTag(dropdownName - 1, list.key);
                  }}
                >
                  {list.name}
                </FilterTag>
              );
            } else {
              return (
                <FilterTag
                  key={key}
                  style={{
                    color: "#3E3E41",
                    border: "1px solid #3E3E41",
                    cursor: "auto",
                    marginRight: "16px",
                    padding: "3px 15px",
                  }}
                >
                  {list.name}
                </FilterTag>
              );
            }
          })
        ) : (
          <span></span>
        )}
      </TagSection>
      <SortingSection>
        <Sort isSelected={sort} onClick={() => setSort(true)}>
          <span>인기순</span>
        </Sort>
        <Sort
          isSelected={!sort}
          onClick={() => setSort(false)}
          style={{ marginLeft: "12px" }}
        >
          <span>신규순</span>
        </Sort>
      </SortingSection>
    </FilterSection>
  );
};

export default SearchFilter;
