import * as React from "react";
import styled from "styled-components";

interface Props {
}

const BeforeContainer = styled.div`
    background : #121212;
    border-radius : 8px;
    height : 60px;
    margin-bottom :16px;
    display : flex;
    flex-direction : row;
    padding : 14px 3%;
`;

const BeforeListContent = styled.div`
    flex : 0.35;
`;

const BeforeListContentInfo = styled.div`
    height:100%;
`;

const BeforeListContentInfoImg = styled.div`
    width : 50px;
    display : table-cell;
    height : 100%;
    vertical-align : middle;
`;

const BeforeListContentInfoName = styled.div`
    font-size : 0.875rem;
    font-weight : bold;
    color : #FDFDFF;
    display : table-cell;
    height : 100%;
    vertical-align : middle;
`;


const BeforeListChar = styled.div`
    flex : 0.2;
    font-size : 1rem;
    color : #6865FC;
    margin-right : 3%;
    font-weight : bold;
`;

const BeforeListInfo = styled.div`
    flex: 0.5;
    display : table;
    height : 100%;
    font-size : 0.825rem;
    color : #B3B4BE;
    margin-right : 3%;
`;
const BeforeListDetail = styled.div`
    flex : 0.1;
    display : table;
    height : 100%;
`;

const BeforeListDetailButton = styled.button`

    background : #6865FC;
    width : 112px;
    height : 32px;
    border-radius : 8px;
    color : #E2E1E2;
    border: none;
    font-size : 1rem;
    cursor : pointer;
    
`;
const beforeList = (prop: Props) => {

    return(
        <>
            <BeforeContainer>

                <BeforeListContent>
                    <BeforeListContentInfo>
                        <div style={{display : "table", height : "100%"}}>
                        <BeforeListContentInfoImg>
                                <img
                                    src="/static/vector.png"
                                    alt="vector"
                                    style={{
                                        width : 40,
                                        height : 40,
                                        borderRadius : "50%",
                                    
                                    }}
                                />
                        </BeforeListContentInfoImg>

                        <BeforeListContentInfoName>
                            <div>김튜나</div>
                            <div style={{fontSize : "0.625rem", color : "#B3B4BE", marginTop : "10%"}}>2028년 12월 28일</div>
                        </BeforeListContentInfoName>
                        </div>
                    </BeforeListContentInfo>

                </BeforeListContent>
                
                <div style={{flex : 0.1}}></div>
                
                <BeforeListChar>
                    <div style={{display : "table", height : "100%"}}>
                        <div style={{display : "table-cell", verticalAlign : "middle"}}>
                            수락한 의뢰
                        </div>
                    </div>
                </BeforeListChar>

                <BeforeListInfo>
                    <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        선물/뉴에이지/사랑/10초~미정/2018년12월30일/3만원 ~ 가격제시
                    </div>

                </BeforeListInfo>

                <BeforeListDetail>

                    <div style={{display : "table-cell", verticalAlign : "middle"}}>
                        <BeforeListDetailButton>뮤지션 보기</BeforeListDetailButton>
                    </div>
                </BeforeListDetail>

            </BeforeContainer>
        </>
    );
};

export default beforeList;
