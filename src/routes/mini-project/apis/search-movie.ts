import { api } from '@/utils/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Movie } from './types'

export interface SearchMoviePayload {
  query: string
  /**
   * @default false
   */
  include_adult?: boolean
  /**
   * @default en-US
   */
  language?: string
  /**
   * @default 1
   */
  page?: number
  region?: string
  year?: number
  primary_release_year?: number
}

export interface SearchMovieResponse {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export const useSearchMovie = (payload: SearchMoviePayload) => {
  return useSuspenseQuery({
    queryKey: ['movie', payload.query],
    queryFn: () => api.get(`/movie/search`, { params: payload }),
  })
}
