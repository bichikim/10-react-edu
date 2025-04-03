export interface Genre {
  id: number
  name: string
}

export interface Movie {
  id: number
  title: string
  overview: string
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  poster_path: string
  original_language: string
  original_title: string
  popularity: number
  release_date: string
  video: boolean
  vote_average: number
  vote_count: number
}
