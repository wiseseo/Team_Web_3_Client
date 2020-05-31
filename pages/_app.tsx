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
            
              <Header />
            

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
