import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta name="description" content="We are a world-class web development agency and we build amazing digital products. Seamless collaboration, total transparency, secure delivery." />
                    <link rel="canonical" href="https://www.pixelstocode.com/" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta property="og:title" content="Pixelstocode | Web Development Agency | Seamless collaboration" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://www.pixelstocode.com/" />
                    <meta property="og:image" content="https://www.pixelstocode.com/_next/static/images/pixelstocode_without_slogan-84c5a1fe5df4a4933983ada56b1623a1.png" />
                    <meta property="og:description" content="We are a world-class web development agency and we build amazing digital products. Seamless collaboration, total transparency, secure delivery." />
                    <meta property="og:site_name" content="Pixelstocode" />
                    <meta property="og:locale" content="en_US" />
                    <link rel="icon" type="image/png" href={require("../images/favicon.png")}></link>
                    <script src="https://cmp.osano.com/Azyw0MRqrhfqmam6/6d2016f3-1287-476c-874e-45b09e6d2a06/osano.js"></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument