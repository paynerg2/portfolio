import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head />
                <title>Rodney Payne</title>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
