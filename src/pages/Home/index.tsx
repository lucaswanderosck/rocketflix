import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Loader } from '../../components/Loader'
import { Movie } from '../../components/Movie'
import { MovieContext } from '../../contexts/MovieContext'
import { MainContainer } from './styles'

export const Home: React.FC = () => {
  const { movies, fetchMovies, isLoading } = React.useContext(MovieContext)

  const handleFindMovieClick = () => {
    fetchMovies()
  }

  return (
    <MainContainer>
      <Header />
      {isLoading ? <Loader /> : <Movie movie={movies} />}
      <Button onClick={handleFindMovieClick} />
    </MainContainer>
  )
}
