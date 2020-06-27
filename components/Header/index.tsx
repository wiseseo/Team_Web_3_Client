import * as React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import MatchButton from "./MatchButton";
import LinkButton from "./LinkButton";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

interface Props {}

const HeaderContainer = styled.header`
  background: #040104;
  align-items: center;
  padding: 2em 40px;
  width: 100%;
  min-width: 1000px;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
`;
// 각 URL에 따른 헤더 max, min Width 처리 필요
const Button = styled.div`
  color: #b3b4be;
  font-size: 0.875rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0.4em 0;
  margin-left: 2rem;
  min-width: fit-content;
`;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/user/mypage">마이페이지</Link>
    </Menu.Item>
    <Menu.Item key="1">로그아웃</Menu.Item>
    {/* accesstoken Delete */}
  </Menu>
);

const Musicianmenu = (
  <Menu>
    <Menu.Item key="0">
      <Link href="/musician/mypage">마이페이지</Link>
    </Menu.Item>

    <Menu.Item key="1">로그아웃</Menu.Item>
    {/* accesstoken Delete */}
  </Menu>
);
const Header = ({ isLogin, isMusician }): React.ReactElement => {
  console.log("isLogin", isLogin, isMusician);
  return (
    <HeaderContainer>
      <img
        src="/static/tuna-logotype2.png"
        alt="logo"
        width="127px"
        height="40px"
        style={{ cursor: "pointer", marginRight: "auto" }}
        onClick={() => {
          location.href = "/";
        }}
      />

      {isLogin === false ? (
        <>
          <MatchButton />

          <LinkButton text="뮤지션 등록" type="enroll" isLogin={isLogin} />
          <LinkButton text="로그인/가입" type="sign" isLogin={isLogin} />
        </>
      ) : isMusician === false ? (
        <>
          <MatchButton />
          <LinkButton text="뮤지션 등록" type="enroll" isLogin={isLogin} />
          <Dropdown
            overlay={menu}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{ width: 180 }}
          >
            <a
              className="ant-dropdown-link"
              style={{ marginLeft: "2rem" }}
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="/static/girl.png"
                alt="vector"
                width={32}
                height={32}
                style={{ marginRight: 8, borderRadius: "50%" }}
              />
              <DownOutlined style={{ color: "#B3B4BE" }} />
            </a>
          </Dropdown>
        </>
      ) : (
        <>
          <MatchButton />
          <Button
            onClick={() => {
              location.assign("/detail");
            }}
          >
            나의 프로필
          </Button>
          <Dropdown
            overlay={Musicianmenu}
            trigger={["click"]}
            placement="bottomRight"
            overlayStyle={{ width: 180 }}
          >
            <a
              className="ant-dropdown-link"
              style={{ marginLeft: "2rem" }}
              onClick={(e) => e.preventDefault()}
            >
              <img
                src="/static/musician.png"
                alt="vector"
                width={32}
                height={32}
                style={{ marginRight: 8, borderRadius: "50%" }}
              />
              <DownOutlined style={{ color: "#B3B4BE" }} />
            </a>
          </Dropdown>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
