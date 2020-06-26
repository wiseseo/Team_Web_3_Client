import * as React from "react";
import styled from "styled-components";
import { AnyNaptrRecord, AnyPtrRecord } from "dns";

interface Props {
  context: any;
}
interface Context {
  context: any;
}

const ReqListContainer = styled.div<Context>`
  width: 352px;
  height: 384px;
  background: #121212;
  border-radius: 8px;
  flex: 1;
  margin-right: ${(props) => (props.context === 3 ? "0" : "3%")};
`;

const ReqListTitle = styled.div`
  height: 64px;
  box-shadow: 0px 16.6034px 33.2068px rgba(0, 0, 0, 0.25);
  padding: 5%;
  display: flex;
  justify-content: space-between;
`;

const ReqListTitleName = styled.div`
  font-size: 0.75rem;
  display: table-cell;
  vertical-align: middle;
  color: #fdfdff;
  font-weight: bold;
`;

const ReqListDesc = styled.div`
  width: 80px;
  height: 100%;
  padding: 5%;
  font-size: 0.625rem;
  display: table-cell;
  vertical-align: middle;
  color: #b3b4be;
`;

const ReqListContent = styled.div`
  height: 248px;
  padding: 5%;
  font-size: 0.875rem;
  color: #b3b4be;
  line-height: 30px;
`;

const ReqListContentTag = styled.span`
  font-size: 1rem;
  font-weight: bold;
  text-decoration-line: underline;
  color: #e2e1e2;
`;

const ReqListContentSub = styled.span``;
const ReqListContentSitua = styled.div`
  font-size: 0.625rem;
  text-align: center;
  width: 100%;
  color: #6865fc;
  margin-top: 9%;
`;

const ReqList = ({ context }: Props) => {
  return (
    <>
      <ReqListContainer context={context.id}>
        <ReqListTitle>
          <div style={{ display: "table", height: "100%" }}>
            <div
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                width: 25,
              }}
            >
              <img
                src={`${context.profile}`}
                alt="vector"
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                }}
              />
            </div>
            <ReqListTitleName>{context.name}</ReqListTitleName>
          </div>

          <div style={{ display: "table", height: "100%" }}>
            <ReqListDesc>{context.reqdate}</ReqListDesc>
          </div>
        </ReqListTitle>

        <ReqListContent>
          <div>
            <ReqListContentTag>{context.context1}</ReqListContentTag>
            <ReqListContentSub>{context.context2}</ReqListContentSub>
          </div>

          <div>
            <ReqListContentTag>{context.context3}</ReqListContentTag>
            <ReqListContentSub>{context.context4}</ReqListContentSub>
            <ReqListContentTag>{context.context5}</ReqListContentTag>
            <ReqListContentSub>{context.context6}</ReqListContentSub>
          </div>

          <div>
            <ReqListContentTag>{context.context7}</ReqListContentTag>
            <ReqListContentSub>{context.context8}</ReqListContentSub>
          </div>

          <div>
            <ReqListContentTag>{context.context9}</ReqListContentTag>
            <ReqListContentSub>{context.context10}</ReqListContentSub>
          </div>

          <div>
            <ReqListContentTag>{context.context11}</ReqListContentTag>
          </div>

          <div>
            <ReqListContentSub>{context.context12}</ReqListContentSub>
          </div>

          {context.status === "wait" ? (
            <div>
              <ReqListContentSitua>
                뮤지션의 응답을 기다리고 있어요.
              </ReqListContentSitua>
              <div
                style={{
                  color: "#4C4C50",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                의뢰 취소하기
              </div>
            </div>
          ) : (
            <ReqListContentSitua>
              뮤지션에게 곧 연락이 올 거에요!
            </ReqListContentSitua>
          )}
        </ReqListContent>
      </ReqListContainer>
    </>
  );
};

export default ReqList;
