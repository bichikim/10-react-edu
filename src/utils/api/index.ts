import axios from 'axios'
console.log(import.meta.env.VITE_TMDB_CREDENTIALS)
export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_CREDENTIALS}`,
  },
})

