import * as React from "react";
import styled from 'styled-components';
import MusicianItem from './MusicianItem';
import { FindContext } from '../../../stores/FindStore';
import { SongContext } from '../../../stores/SongStore';

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
    font-weight:bold;
    font-size : 1rem;
`;

const MusicianList = (props: Props) => { 
    const { musicianList, dispatch } = React.useContext(FindContext);
    const song = React.useContext(SongContext);

    const toggleLike = (id: string) => {
        dispatch({ type: "TOGGLE_LIKE", payload: id });
    };

    const selectSong = (id: string, status: boolean, musician: Musician) => {
        dispatch({ type: "SELECT_SONG", payload: { id, status } });
    
        const selectedSong = {
          ...musician.song,
          name: musician.name,
          isPlaying: status,
        };
        song.dispatch({ type: "CHANGE_SONG", payload: selectedSong });
    };
    
    return(
        <>
            {musicianList.display.map((musician)=>{
                return <MusicianItem
                key={musician.id}
                musician={musician}
                toggleLike={toggleLike}
                selectSong={selectSong}
                currentSong={song.song}
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
