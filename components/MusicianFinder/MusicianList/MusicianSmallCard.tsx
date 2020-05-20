import * as React from "react";
import styled from 'styled-components';
import PlayerSection from './PlayerSection';
import MusicianSection from './MusicianSection';
import LinkSection from './LinkSection';
//import Footer from '../Footer';

interface Props {}

const Card = styled.div`
  display: flex;
  flex-direction: row;
  /*background: #121212;*/
  background: white;
  border-radius: 0.5rem;
  height : 7.5rem;
  margin-bottom : 1rem;
`;
/*
const PlayerSection = styled.div`
    flex:9;
    background: blue;
`;
const MusicianSection = styled.div`
    flex:50;
    background: yellow;
`;
const LinkSection = styled.div`
    flex:11;
    background: green;
`;*/

const MusicianSmallCard = (props: Props) => { 
    return (
        <Card>
            <PlayerSection></PlayerSection>
            <MusicianSection></MusicianSection>
            <LinkSection></LinkSection>
        </Card>
    )
  
};

export default MusicianSmallCard;
