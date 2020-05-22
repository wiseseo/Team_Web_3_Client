import * as React from "react";
import styled from "styled-components";

interface Props {
    context : number;
}
interface Context {
    context : number;
}

const ReqListContainer =  styled.div<Context>`
    width : 352px;
    height : 344px;
    background : #121212;
    border-radius : 8px;
    flex : 1;
    margin-right : ${props => props.context === 3? "0" : "3%"}
`;

const ReqListTitle = styled.div`
    height : 32px;
    box-shadow: 0px 16.6034px 33.2068px rgba(0, 0, 0, 0.25);
    padding : 5%;
    display : flex;
    justify-content : space-between;
`;

const ReqListTitleName = styled.div`
    font-size : 0.75rem;
    display : table-cell;
    vertical-align : middle;
    color : #FDFDFF;
    font-weight : bold;
`;  

const ReqListDesc = styled.div`
    width : 80px;
    height : 100%;
    padding : 5%;
    font-size: 0.625rem;
    display : table-cell;
    vertical-align : middle;
    color : #B3B4BE;
`;

const ReqListContent = styled.div`
    height : 248px;
    padding : 5%;
    font-size : 0.875rem;
    color : #B3B4BE;
    line-height : 30px;
`;

const ReqListContentTag = styled.span`
    font-size : 1rem;
    font-weight : bold;
    text-decoration-line: underline;
    color : #E2E1E2;
`;

const ReqListContentSub = styled.span``;
const ReqListContentSitua = styled.div`
    font-size : 0.625rem;
    text-align:center;
    width : 100%;
    color : #6865FC;
    margin-top : 5%;
`;
const ReqList = ({context}: Props) => {

    return(
        <>
            <ReqListContainer context={context}>
                <ReqListTitle>

                <div style={{display:"table", height : "100%"}}>
                <div style={{display:"table-cell", verticalAlign:"middle", width : 25}}>
                        <img
                            src="/static/vector.png"
                            alt="vector"
                            style={{
                                width : 20,
                                height : 20,
                                borderRadius : "50%",
                                
                            }}
                        />
                </div>
                <ReqListTitleName>김튜나</ReqListTitleName>
                </div>

                <div style={{display:"table", height : "100%"}}>
                    <ReqListDesc>2028년12월28일</ReqListDesc>
                </div>

                </ReqListTitle>

                <ReqListContent>
                    <div>
                        <ReqListContentTag>선물</ReqListContentTag>
                        <ReqListContentSub>을/를 위한</ReqListContentSub>
                    </div>
                    
                    <div>
                        <ReqListContentTag>뉴에이지</ReqListContentTag>
                        <ReqListContentSub>장르의</ReqListContentSub>
                        <ReqListContentTag>사랑</ReqListContentTag>
                        <ReqListContentSub>분위기인</ReqListContentSub>
                    </div>

                    <div>
                        <ReqListContentTag>10초~미정</ReqListContentTag>
                        <ReqListContentSub>분 길이의 곡을</ReqListContentSub>
                    </div>

                    <div>
                        <ReqListContentTag>2018년 12월 30일</ReqListContentTag>
                        <ReqListContentSub>까지</ReqListContentSub>
                    </div>

                    <div>
                        <ReqListContentTag>3만원 ~ 가격제시</ReqListContentTag>
                    </div>

                    <div>
                        <ReqListContentSub>의 견적으로 의뢰하였습니다.</ReqListContentSub>
                    </div>

                    <ReqListContentSitua>
                        의뢰인이 응답을 기다리고 있습니다.
                    </ReqListContentSitua>
                </ReqListContent>
            </ReqListContainer>
        </>
    );
};

export default ReqList;
