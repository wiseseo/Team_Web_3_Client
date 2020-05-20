import * as React from "react";
import styled from 'styled-components';
import SearchFilter from './SearchFilter';
import MusicianList from './MusicianList';
import Footer from '../Footer';

interface Props {}

const Contents = styled.div `
  display: flex;
  flex-direction: column;
  /*padding-right : 25rem;
  padding-left : 25rem;*/
  width : 70rem;
`;
const Title = styled.h1`
  margin : 0;
  font-size : 1.5rem;
  background: #040104;
  /*background : grey;*/
  color: #ffffff;
  padding : 5rem 25rem 3rem 0rem;
`;
/*
const Innerontainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
  color : #ffffff;
`;
*/

const MusicianFinder = (props: Props) => {
  return (
    <Contents>
      <Title>뮤지션 찾기</Title>
      <SearchFilter/>
      <MusicianList/>
      <Footer></Footer>
    </Contents>
  )
  
};

export default MusicianFinder;
