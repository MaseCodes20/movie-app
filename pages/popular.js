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

function Popular({ imageUrl }) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [popularMovies, setPopularMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useRecoilState(loadingState);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(`/api/popular?page=${page}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setPopularMovies(response.data);
          setLoading(false);
        });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPopularMovies();
    setSearchTerm("");
  }, [page]);

  return (
    <div className="pageContainer">
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
                <Movies movies={popularMovies} image={imageUrl} />
                <PageNavButtons setPage={setPage} page={page} />
              </>
            )}
          </>
        )}

        <Footer />
      </div>
    </div>
  );
}

export default Popular;

export async function getServerSideProps() {
  const imageUrl = process.env.IMG_URL;
  return {
    props: { imageUrl },
  };
}
