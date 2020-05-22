import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import GAnalytics from '../components/Layouts/Analytics'
import MessengerChat from "../utils/MessengerChat";

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
                    <title>Pixelstocode | Web Development Agency | Seamless collaboration</title>
                </Head>
                <GAnalytics>
                     <MessengerChat
            pageId="102395918024674"
            htmlRef="fb-msgr"
            themeColor="#41b2ae"
            loggedInGreeting="Hi! How can we help you?"
            loggedOutGreeting="Hi! How can we help you?"
          />
                    <Component {...pageProps} />
                </GAnalytics>
            </Container>
        )
    }
}