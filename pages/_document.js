import Document, { Html, Head, Main, NextScript } from 'next/document'

// https://nextjs.org/docs/advanced-features/custom-document

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    { /* favicon */}
                    { /* webfonts */}
                    { /* stylesheet */}
                    { /* scripts */}
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