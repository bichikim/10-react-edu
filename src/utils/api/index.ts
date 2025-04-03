import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_CREDENTIALS}`,
  },
})
