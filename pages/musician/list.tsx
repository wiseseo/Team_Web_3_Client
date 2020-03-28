import * as React from "react";
import styled from 'styled-components';

const ListTitle = styled.h1`
  color : black
`;

const List: React.FC = () => {
  return (
    <div>
      <ListTitle>List</ListTitle>
    </div>
  );
};

export default List;