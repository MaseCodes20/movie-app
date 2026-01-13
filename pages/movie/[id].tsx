import Head from "next/head"
import { useRecoilState } from "recoil"
import { searchState } from "../../atoms/searchAtom"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Cast from "../../components/moviePage/Cast"
import Details from "../../components/moviePage/Details"
import Poster from "../../components/moviePage/Poster"
import Providers from "../../components/moviePage/Providers"
import SimilarMovies from "../../components/moviePage/SimilarMovies"
import Videos from "../../components/moviePage/Videos"
import SearchMovies from "../../components/searchMovies/SearchMovies"
import { MovieCredits, MovieDetails, MovieSimilarMovies, MovieVideos, WatchProvidersResponse } from "../../types"


type MoviePageProps = {
  id: string
  details: MovieDetails
  credits: MovieCredits[]
  similarMovies: MovieSimilarMovies[]
  videos: MovieVideos[]
  imageUrl: string
  providers: WatchProvidersResponse
}

function MoviePage({ details, credits, providers, videos, similarMovies, imageUrl, id }: MoviePageProps) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState)

  const { title, poster_path } = details

  return (
    <div className="pageContainer">
      <div className="contentContainer">
        <Head>
          <title>{title}</title>
          <meta name="description" content={title} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header setSearchTerm={setSearchTerm} />
        {searchTerm ? (
          <SearchMovies image={imageUrl} />
        ) : (
          <div className="mx-auto ">
            <div className="md:flex justify-center bg-black text-white">
              <Poster imageUrl={imageUrl} poster_path={poster_path} title={title} />

              <div className="mx-8">
                <div className="md:flex justify-center">
                  <Details details={details} imageUrl={imageUrl} />
                  {providers.US && <Providers providers={providers} />}
                </div>

                <div className="text-sm">
                  <div className="flex justify-center">
                    <Cast id={id} credits={credits} />
                    <Videos videos={videos} id={id} />
                  </div>
                </div>
              </div>
            </div>

            <SimilarMovies similarMovies={similarMovies} image={imageUrl} />
          </div>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default MoviePage

export async function getServerSideProps(context) {
  const api = process.env.TMDB_KEY
  const { id } = context.query
  const imageUrl = process.env.IMG_URL

  const [fetchVideos, fetchDetails, fetchCredits, fetchProviders, fetchSimilarMovies] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api}&language=en-US`),
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api}&language=en-US`),
    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api}&language=en-US`),
    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${api}`),
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${api}&language=en-US&page=1`),
  ])

  const [videos, details, credits, providers, similarMovies] = await Promise.all([
    fetchVideos.json().then(videos => videos.results),
    fetchDetails.json(),
    fetchCredits.json().then(casts => casts.cast),
    fetchProviders.json().then(providers => providers.results),
    fetchSimilarMovies.json().then(similarMovies => similarMovies.results),
  ])
  return {
    props: {
      videos,
      details,
      credits,
      providers,
      similarMovies,
      id,
      imageUrl,
    },
  }
}
