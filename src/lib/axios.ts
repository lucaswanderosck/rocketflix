import axios from 'axios'

const apiKey = import.meta.env.VITE_THEMOVIEDB_KEY
const apiToken = import.meta.env.VITE_THEMOVIEDB_TOKEN

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
    page: 1,
    language: 'pt-BR',
  },
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
})
