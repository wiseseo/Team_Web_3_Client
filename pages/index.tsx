import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
import Head from "next/head";
import Audio from "./../components/Audio";

const Title = styled.h1`
  color: black;
`;
const NavLi = styled.li`
  float: left;
  margin-left: 5%;
`;

const Index: React.FC = () => {
  return (
    <div>
      <Audio src="http://media.w3.org/2010/07/bunny/04-Death_Becomes_Fur.oga" />
      <Head>
        <title>Tuna!!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Title>Tuna</Title>
      <ul>
        <NavLi style={{ marginLeft: 0 }}>
          <Link href="/musician/find">
            <a>Musician Find</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="musician/enroll">
            <a>Musician Enroll</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/sign/signin">
            <a>signin Mypage</a>
          </Link>
        </NavLi>

        <NavLi>
          <Link href="/sign/signup">
            <a>signup Mypage</a>
          </Link>
        </NavLi>
      </ul>

      <ul style={{ clear: "both" }}>
        <li style={{ marginLeft: 0 }}>
          <Link href="/musician/find">
            <a>Musician Find</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/match/index">
            <a>match Index</a>
          </Link>
        </li>

        <li>
          <Link href="/musician/searchCtg">
            <a>Musician searchCtg</a>
          </Link>
        </li>

        <li>
          <Link href="/musician/rank">
            <a>Musician Rank</a>
          </Link>
        </li>

        <li>
          <div>새로운 뮤지션</div>
        </li>
        <li>
          <Link href="/musician/portfolio">
            <a>Musician portfolio</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;
