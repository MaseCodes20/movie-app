import Head from "next/head";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/searchAtom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Welcome from "../components/homePage/Welcome";
import SearchMovies from "../components/searchMovies/SearchMovies";

type HomeProps = {
  imageUrl: string
}

export default function Home({ imageUrl }: HomeProps) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState);

  useEffect(() => {
    setSearchTerm("");
  }, []);

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Head>
          <title>Movie App</title>
          <meta name="description" content="Movie App" />
          <link rel="icon" href="/cinema_popcorn_icon-icons.com_66128.ico" />
        </Head>
        <Header setSearchTerm={setSearchTerm} />

        {searchTerm ? (
          <div className="centered w-full">
            <div className="lg:h-[600px] top-0 bottom-0 overflow-y-scroll scrollbar-hide">
              <SearchMovies image={imageUrl} />
            </div>
          </div>
        ) : (
          <Welcome />
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
