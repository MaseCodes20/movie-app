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

export interface WatchProvider {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

// 2. Define the availability types for a specific country
export interface CountryWatchData {
  link: string
  buy?: WatchProvider[]
  rent?: WatchProvider[]
  flatrate?: WatchProvider[] // Added because TMDB often includes this for subscriptions
  ads?: WatchProvider[] // Some movies are available free with ads
}

// 3. Define the main Providers object using a Record for country codes
// This allows for any ISO 3166-1 country code as a key
export type WatchProvidersResponse = Record<string, CountryWatchData>

type MoviePageProps = {
  id: string
  details: {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: {
      id: number
      name?: string
    }[]
    homepage: string
    id: 628847
    imdb_id: string
    origin_country: string[]
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: {
      id: 7355
      logo_path: string
      name: string
      origin_country: string
    }[]
    production_countries: {
      iso_3166_1: string
      name: string
    }[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: {
      english_name: string
      iso_639_1: string
      name: string
    }[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
  credits: {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: number
    credit_id: string
    order: number
  }[]
  similarMovies: {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: Date
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }[]
  videos: {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: Date
    id: string
  }[]
  imageUrl: string
  providers: WatchProvidersResponse
}

function MoviePage({ details, credits, providers, videos, similarMovies, imageUrl, id }: MoviePageProps) {
  const [searchTerm, setSearchTerm] = useRecoilState(searchState)

  const { title, poster_path } = details

  console.log({
    details,
    credits,
    providers,
    videos,
    similarMovies,
    imageUrl,
    id,
  })

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
