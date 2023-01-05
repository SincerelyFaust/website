import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";

const Error404: NextPage = () => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Marin Heđeš | 404 Error</title>
        <meta property="og:title" content={"Marin Heđeš | 404 Error"} />
      </Head>
      <div className="overflow-hidden">
        <div className="w-screen h-screen flex justify-center items-left px-80 flex-col gap-5 lg:px-20">
          <p className="text-6xl font-bold sm:text-4xl">😴 I was lazy.</p>
          <p className="text-4xl font-normal text-slate-600 sm:text-2xl">
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
