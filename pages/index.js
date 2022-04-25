import Head from "next/head";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SearchMovies from "../components/searchMovies/SearchMovies";

export default function Home({ imageUrl }) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Head>
          <title>Movie App</title>
          <meta name="description" content="movie app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header setSearchTerm={setSearchTerm} />

        {searchTerm !== "" ? (
          <div className="lg:h-[600px]  lg:mt-8 top-0 bottom-0 overflow-y-scroll scrollbar-hide">
            <SearchMovies image={imageUrl} />
          </div>
        ) : (
          <div className="centered text-center">
            <h1 className="font-bold text-3xl">Welcome to the movie app</h1>
            <p>Need a movie for movie night?</p>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const imageUrl = process.env.IMG_URL;
  return {
    props: { imageUrl },
  };
}
