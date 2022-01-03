import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class DocumentComponent extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Meiso</title>
          <meta name="description" content="Meditate like a witcher" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
