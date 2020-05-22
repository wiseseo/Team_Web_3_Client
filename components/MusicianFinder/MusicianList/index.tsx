import * as React from "react";
import styled from 'styled-components';
import MusicianItem from './MusicianItem';
import { MusicianContext } from '../../../stores/MusicianStore';
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

const MusicianList = (props: Props) => { 
    const { musicianList, dispatch } = React.useContext(MusicianContext);
    const song = React.useContext(SongContext);
    
    return(
        <>
        {musicianList.display.map((musician)=>{
            return <MusicianItem
            key={musician.id}
            musician={musician}
            />
        })}
        </>
    
    );
};

export default MusicianList;
