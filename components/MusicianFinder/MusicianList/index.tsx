import * as React from "react";
import styled from 'styled-components';
import MusicianItem from './MusicianItem';
import { FindContext } from '../../../stores/FindStore';
import { SongContext } from '../../../stores/SongStore';
//import Footer from '../Footer';

interface Props {}

interface Song {
    id: string;
    title: string;
    date: string;
    isPlaying: boolean;
    isLike: boolean;
    cover_url: string;
    song_url: string;
}

interface Musician {
    id: string;
    name: string;
    introduction: string;
    tags: string[];
    likes: number;
    profile_url: string;
    features: string[];
    song: Song;
}

const Next = styled.div`
    background-color: #040104;
    color: #B3B4BE;
    height: 72px;
    border: 1px solid #B3B4BE;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content : center;
    align-items : center;
`;

const MusicianList = (props: Props) => { 
    const { musicianList, dispatch } = React.useContext(FindContext);
    const song = React.useContext(SongContext);
    
    return(
        <>
            {musicianList.display.map((musician)=>{
                return <MusicianItem
                key={musician.id}
                musician={musician}
                />
            })}
            { musicianList.display.length === musicianList.list.length ? 
            <span></span>
            :
            <Next onClick={() => dispatch({ type: "NEXT_MUSICIANS" })}>
                더보기
            </Next>
            }   
        </>
    
    );
};

export default MusicianList;
