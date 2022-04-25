import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Movies from "../components/Movies";
import PageNavButtons from "../components/PageNavButtons";
import SearchMovies from "../components/searchMovies/SearchMovies";

function Toprated({ imageUrl }) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setPage] = useState(1);

  const getTopRatedMovies = async () => {
    try {
      const response = await fetch(`/api/toprated?page=${page}`, {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => response.json())
        .then((movies) => setTopRatedMovies(movies.data));

      return response;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getTopRatedMovies();
  }, [page]);

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Header setSearchTerm={setSearchTerm} />
        {searchTerm ? (
          <SearchMovies image={imageUrl} />
        ) : (
          <>
            <Movies movies={topRatedMovies} image={imageUrl} />
            <PageNavButtons setPage={setPage} page={page} />
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
