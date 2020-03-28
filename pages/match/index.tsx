import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

const IndexTitle = styled.h1`
  color : black
`;

const Index: React.FC = () => {
  return (
    <div>
      <IndexTitle>Index</IndexTitle>
      <ul>
        <li>
          <Link href="/match/list">
            <a>match List</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Index;