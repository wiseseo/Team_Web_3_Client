import * as React from "react";
import styled from "styled-components";

interface Props {
}

const PickListContainer = styled.div`
    background : #121212;
    border-radius : 8px;
    height : 120px;
    margin-bottom :16px;
    display : flex;
    flex-direction : row;
    padding : 23px 3%;
`;

const PickListMusic = styled.div`
    flex : 0.1
`;
const PickListContent = styled.div`
    flex : 0.4
`;

const PickListContentInfo = styled.div`
    display : flex;
    flex-direction : row;
`;

const PickListContentInfoImg = styled.div`
    display : table;
    padding-right : 5%;
`;

const PickListContentInfoName = styled.div`
    font-size : 0.875rem;
    font-weight : bold;
    color : #FDFDFF;
`;
const PickListContentTagLayout = styled.div``;

const PickListContentTag = styled.span`
  border-radius : 20px;
  border : 1px solid #B3B4BE;
  color : #B3B4BE;
  margin-right : 16px;
  font-family: SpoqaHanSans;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 22px;
  margin-top : 10px;
  padding : 3px 15px;
  display : inline-block;
  margin-bottom : 8px;

`;

const PickListChar = styled.div`
    flex : 0.3;
    font-size : 1rem;
    color : #6865FC;
    display : table;
    height : 100%;
    margin-right : 3%;
`;
const PickListDetail = styled.div`
    flex : 0.1;
    display : table;
    height : 100%;
`;

const PickListDetailButton = styled.button`

    background : #6865FC;
    width : 112px;
    height : 32px;
    border-radius : 8px;
    color : #E2E1E2;
    border: none;
    font-size : 1rem;
    cursor : pointer;
`;
const PickList = (prop: Props) => {

    return(
        <>
            <PickListContainer>

                <PickListMusic>a</PickListMusic>   
                <PickListContent>
                    <PickListContentInfo>

                        <PickListContentInfoImg>
                                <img
                                    src="/static/vector.png"
                                    alt="vector"
                                    style={{
                                        width : 32,
                                        height : 32,
                                        borderRadius : "50%",
                                    
                                    }}
                                />
                        </PickListContentInfoImg>

                        <PickListContentInfoName>
                            <div>마약왕</div>
                            <div>일이삼사오육칠팔구십일이삼사오육칠팔구십</div>
                        </PickListContentInfoName>

                    </PickListContentInfo>

                    <PickListContentTagLayout>

                        <PickListContentTag>스포츠</PickListContentTag>
                        <PickListContentTag>기술</PickListContentTag>
                        <PickListContentTag>게임</PickListContentTag>
                        <PickListContentTag>시즌</PickListContentTag>

                    </PickListContentTagLayout>
                </PickListContent>
                
                <div style={{flex : 0.1}}></div>
                
                <PickListChar>
                    <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        빠른 작업 / 3분 이상 / 효과음 / 보컬 곡 작곡
                    </div>
                </PickListChar>

                <PickListDetail>

                    <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        <PickListDetailButton>뮤지션 보기</PickListDetailButton>
                    </div>
                </PickListDetail>

            </PickListContainer>
        </>
    );
};

export default PickList;
