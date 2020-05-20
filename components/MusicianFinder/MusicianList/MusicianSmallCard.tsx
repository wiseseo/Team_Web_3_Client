import * as React from "react";
import styled from 'styled-components';
//import Footer from '../Footer';

interface Props {}

const Card = styled.div`
  display: flex;
  flex-direction: row;
  /*background: #121212;*/
  background: red;
  border-radius: 0.5rem;
  height : 7.5rem;
`;
const PlayerSection = styled.div`
    flex:1;
    background: blue;
`;
const MusicianSection = styled.div`
    flex:4;
    background: yellow;
`;
const LinkSection = styled.div`
    flex:1;
    background: green;
`;
const MusicianSmallCard = (props: Props) => { 
    return (
        <Card>
            <PlayerSection>player</PlayerSection>
            <MusicianSection>musician</MusicianSection>
            <LinkSection>link</LinkSection>
        </Card>
    )
  
};

export default MusicianSmallCard;
