import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import PageNavButtons from "../components/PageNavButtons";
import SearchMovies from "../components/searchMovies/SearchMovies";
import Loading from "../components/Loading";

function Latest({ imageUrl }) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [latestMovies, setLatestMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getLatestMovies = async () => {
    try {
      const response = await fetch(`/api/latest?page=${page}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setLatestMovies(response.data);
          setLoading(false);
        });

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getLatestMovies();
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
              <>
                <Loading loadingMovies={loading} />
              </>
            ) : (
              <>
                <Movies movies={latestMovies} image={imageUrl} />
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

export default Latest;

export async function getServerSideProps(context) {
  const imageUrl = process.env.IMG_URL;

  return {
    props: { imageUrl },
  };
}
