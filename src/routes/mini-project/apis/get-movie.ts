import { api } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'
import { Genre } from './types'

export interface GetMovieResponse {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: any
  budget: number
  genres: Genre[]
}

export const useGetMovie = (id: string) => {
  return useQuery({
    queryKey: ['movie', id],
    queryFn: () => api.get(`/movie/${id}`),
  })
}