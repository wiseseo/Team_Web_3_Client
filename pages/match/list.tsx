import * as React from "react";
import styled from 'styled-components';
import Link from 'next/link';

const ListTitle = styled.h1`
  color : black
`;

const List: React.FC = () => {
  return (
    <div>
      <ListTitle>List</ListTitle>

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

export default List;