import React from 'react'
import { api } from '../lib/axios'

interface Props {
  children: React.ReactNode
}

export interface Genre {
  name: string
}

export interface MovieI {
  title: string
  overview: string
  poster_path: string
  backdrop_path: string
  id: number
  vote_average: number
  release_date: string
  runtime: number
  tagline: string
  homepage: string
  genres: Genre[]
}

interface MovieContextData {
  movies: MovieI
  fetchMovies: () => Promise<void>
  isLoading: boolean
}

export const MovieContext = React.createContext<MovieContextData>(
  {} as MovieContextData,
)

// const accountId = import.meta.env.VITE_ACCOUNT_ID

export const MovieProvider: React.FC<Props> = ({ children }) => {
  const [movies, setMovies] = React.useState<MovieI>({} as MovieI)
  const [isLoading, setIsLoading] = React.useState(false)

  const fetchMovies = React.useCallback(async () => {
    try {
      setIsLoading(true)

      await new Promise((resolve) => setTimeout(resolve, 1000))
      // const response = await api.get(`account/${accountId}/favorite/movies`)
      const response = await api.get('movie/popular')
      const data = response.data.results

      const randomIndex = Math.floor(Math.random() * data.length)
      const randomMovie = data[randomIndex]

      const movieDetailsResponse = await api.get(`movie/${randomMovie.id}`)
      setMovies(movieDetailsResponse.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return (
    <MovieContext.Provider value={{ movies, fetchMovies, isLoading }}>
      {children}
    </MovieContext.Provider>
  )
}
