import * as React from "react";
import styled from 'styled-components';
import PlayButton from '../../AudioPlayer/PlayButton';
//import Footer from '../Footer';

interface Props {}

const Container = styled.div`
    flex:9;
    background: blue;
    display: flex;
    justify-content : center;
    align-items : center;
`;

const AlbumCover = styled.div`
    width : 5rem;
    height : 5rem;
    background : black;
`;
const PlayerSection = (props: Props) => { 
    return (
        <Container>
            <AlbumCover>
                {/*<PlayButton/>*/}
            </AlbumCover>
        </Container>
    )
  
};

export default PlayerSection;
