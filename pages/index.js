import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="pageContainer h-screen">
      <div className="contentContainer">
        <Head>
          <title>Movie App</title>
          <meta name="description" content="movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />

        <div className="centered text-center">
          <h1 className="font-bold text-3xl">Welcome to the movie app</h1>
          <p>Need a movie for movie night?</p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
