import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="favicon.svg" />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:site_name" content="Roundest Pokemon" />
        <meta name="author" content="Bruno Santos" />
        <meta name="keywords" content="pokemon, random, vode, roundest" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
