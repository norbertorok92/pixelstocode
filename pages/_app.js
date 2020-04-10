import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import GAnalytics from '../components/Layouts/Analytics'

export default class MyApp extends App {
    static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return { pageProps }
    }

    render () {
        const { Component, pageProps } = this.props

        return (
            <Container>
                <Head>
                    <title>PixelsToCode</title>
                </Head>
                <GAnalytics>
                    <Component {...pageProps} />
                </GAnalytics>
            </Container>
        )
    }
}