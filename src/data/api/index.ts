import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYzIyOTkxNzgzMGUxZjNkMDU5MDA3ZWZiOTY0OWI5NSIsInN1YiI6IjY1MTQ2MTQ0OWI4NjE2MDEzYTIzMmJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.srpoTqFhi4GYf8pB4sySB00tYlMSfBdAE5AlwkhsIfc"'

export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
