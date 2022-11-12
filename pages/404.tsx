import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { siteConfig } from "../config";

const Error404: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>{siteConfig.title} | 404 Error</title>
        <meta
          property="og:title"
          content={`${siteConfig.title} | 404 Error`}
          key="title"
        />
      </Head>
      <div className="overflow-hidden">
        <div className="w-screen h-screen flex justify-center items-left px-80 flex-col gap-5">
          <p className="text-6xl font-bold">😴 The developer was lazy.</p>
          <p className="text-4xl font-normal text-slate-600">
            Or maybe this page was never even planned.
          </p>
          <button
            className="bg-blue-600 w-fit h-fit px-4 py-2 rounded-full text-white"
            onClick={e => handleClick(e)}
          >
            🏠 Either way, click here.
          </button>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Error404;
