import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
          <Html>
            <Head>
              <link rel="apple-touch-icon" sizes="180x180" href="/images/logo/favicon.png" />
              <link rel="icon" type="image/png" sizes="32x32" href="/images/logo/favicon.png" />
              <link rel="icon" type="image/png" sizes="16x16" href="/images/logo/favicon.png" />
              <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
    }
}

export default MyDocument;
