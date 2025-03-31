import { api } from '@/utils/api'
import { useQuery } from '@tanstack/react-query'

export const useTrendingMovie = (timeWindow: 'day' | 'week') => {
  return useQuery({
    queryKey: ['trending-movie', timeWindow],
    queryFn: () => api.get(`3/trending/movie/${timeWindow}`),
  })
}

