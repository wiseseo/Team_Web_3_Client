import * as React from "react";
import styled from 'styled-components';
import MusicianItem from './MusicianItem';
//import Footer from '../Footer';

interface Props {}

const MusicianList = (props: Props) => { 
    const musicianList = [1,2,3,4,5];
    
    return(
        <>
        {musicianList.map((m)=>{
            return <MusicianItem></MusicianItem>
        })}
        </>
    
    );
};

export default MusicianList;
