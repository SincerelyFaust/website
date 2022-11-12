import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <ThemeProvider
        enableSystem={true}
        defaultTheme="system"
        attribute="class"
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default Portfolio;
