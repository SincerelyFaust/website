import Document, { Head, Html, Main, NextScript } from "next/document";
import { siteConfig } from "../config";

export default class PortfolioDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content={siteConfig.description} />
          <meta name="og:description" content={siteConfig.description} />
          <meta name="keywords" content={siteConfig.keywords} />
          <meta property="og:image" content={siteConfig.embedImageLink} />
          <meta property="og:site_name" content={siteConfig.title} />
          <link
            rel="icon"
            type="image/png"
            href="/images/favicon/favicon.ico"
          />
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="canonical" href={siteConfig.canonicalLink} />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
