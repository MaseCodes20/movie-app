export type WatchProvider = {
  logo_path: string
  provider_id: number
  provider_name: string
  display_priority: number
}

export type CountryWatchData = {
  link: string
  buy?: WatchProvider[]
  rent?: WatchProvider[]
  flatrate?: WatchProvider[]
  ads?: WatchProvider[]
}

export type WatchProvidersResponse = Record<string, CountryWatchData>

export type MovieDetails = {
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

export type MovieCredits = {
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
}

export type MovieSimilarMovies = {
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
}

export type MovieVideos = {
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
}

export type MovieT = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number [
    ],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
