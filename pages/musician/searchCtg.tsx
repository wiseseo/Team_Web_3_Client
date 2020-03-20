import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

const SearchCtgTitle = styled.h1`
  color : black
`;

const SearchCtg: React.FC = () => {
  return (
    <div>
      <SearchCtgTitle>SearchCtg</SearchCtgTitle>

      <ul>
        <li>
          <Link href="/musician/portfolio">
            <a>Musician portfolio</a>
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default SearchCtg;