import App from "next/app";
import React from "react";
import "antd/dist/antd.less";
import Head from "next/head";
import SongStore from "../stores/SongStore";
import CurationStore from "../stores/CurationStore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AudioPlayer from "../components/AudioPlayer";
import styled from "styled-components";
import Cookies from 'js-cookie';
import axios from "axios";
class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="layout">{children}</div>;
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #040104;
  margin: 0 auto;
`;

export default class RootApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // const accessToken = Cookies.get('accessToken');
    const accessToken = "ya29.a0AfH6SMDUbBh0tQPcB6MBhsz8LWoPOL-nLY-0b3yOio1gO2OZPvwFtL7MKlOIi2zGKFJBL1a2WDVb__OHDL1A4LHzqcK9JMt0duEwldwyAkEDI0emNowSbB7OUNaBZDmR5zLH7n-cXai2xVFSfp5wkgcLAnusxwp73OsH";
    // const accessToken = undefined
    const isMusician = ""
    console.log('token :',accessToken);
    const header = { 'Content-Type' : 'application/json', 'Accept' : 'application/json' };
    axios.post("http://ec2-13-209-105-111.ap-northeast-2.compute.amazonaws.com:8080/authToken", accessToken, {headers : header, withCredentials : true})
    .then((musicians) =>{
        console.log("musicians : ", musicians.data)
    })
    .catch((e) => {
        console.log("musicians Catch : ", e);
    })
    return (
      <>
        <Head>
          <title>Tuna!!</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <style>{`@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
          body {
            margin:0;
            background-color : #040104 !important;
          }html {
            scroll-behavior: smooth;
          }
          * { font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif'; }`}</style>
        </Head>

        <SongStore>
          <CurationStore>
            <MainContainer>
            
            {accessToken === undefined ? 
                <Header isLogin={false} isMusician={""}/> 
            : 
                isMusician? 
                    <Header isLogin={true} isMusician={true}/> 
                : 
                    <Header isLogin={true} isMusician={false}/> 
                
            }
              
            

            <Component {...pageProps} />
            <Footer />
            <AudioPlayer />
          </MainContainer>
          </CurationStore>
        </SongStore>
        <Layout />

      </>
    );
  }
}
