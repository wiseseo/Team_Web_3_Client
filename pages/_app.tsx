import App from 'next/app';
import React from 'react';
import 'react-responsive-modal/styles.css';
import Head from "next/head";
class Layout extends React.Component {
    render () {
      const { children } = this.props
      return <div className='layout'>{children}</div>
    }
}

export default class RootApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>Tuna!!</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <style>{`body{margin:0;}`}</style>
                </Head>
                <Component {...pageProps} />
                <Layout/>
            </>
        );
    }
}