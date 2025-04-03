import { useState } from 'react'
import { useTrendingMovie } from './apis/trending-movie'

export const Trending = () => {
  const [timeWindow, setTimeWindow] = useState<'day' | 'week'>('day')
  const trendingMovie = useTrendingMovie(timeWindow)

  return (
    <div>
      <h1>Main Trending Movie {timeWindow}</h1>
      <div className="flex gap-2">
        <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={() => setTimeWindow('day')}>
          Day
        </button>
        <button className="bg-blue-500 text-white p-2 rounded-md cursor-pointer" onClick={() => setTimeWindow('week')}>
          Week
        </button>
      </div>
      <div>{trendingMovie.data?.data.results.map((movie) => <div key={movie.id}>{movie.title}</div>)}</div>
    </div>
  )
}
