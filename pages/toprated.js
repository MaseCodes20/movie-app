import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { loadingState } from "../atoms/loading";
import { searchState } from "../atoms/searchAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Movies from "../components/Movies";
import PageNavButtons from "../components/PageNavButtons";
import SearchMovies from "../components/searchMovies/SearchMovies";
import Head from "next/head";

function Toprated({ imageUrl }) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useRecoilState(loadingState);

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(`/api/toprated?page=${page}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((movies) => {
          setTopRatedMovies(movies.data);
          setLoading(false);
        });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getTopRatedMovies();
    setSearchTerm("");
  }, [page]);

  return (
    <div className="pageContainer">
      <Head>
        <title>Toprated</title>
        <meta name="description" content="Generated by Masecodes" />
        <link rel="icon" href="/cinema_popcorn_icon-icons.com_66128.ico" />
      </Head>
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        {searchTerm ? (
          <SearchMovies image={imageUrl} />
        ) : (
          <>
            {loading ? (
              <Loading loadingMovies={loading} />
            ) : (
              <>
                {topRatedMovies.length > 0 && (
                  <>
                    <Movies movies={topRatedMovies} image={imageUrl} />
                    <PageNavButtons setPage={setPage} page={page} />
                  </>
                )}
              </>
            )}
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Toprated;

export async function getServerSideProps() {
  const imageUrl = process.env.IMG_URL;
  return {
    props: { imageUrl },
  };
}
