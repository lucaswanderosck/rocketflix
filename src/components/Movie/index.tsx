import React from 'react'
import { BiSolidMovie, BiSolidStar, BiSolidTimeFive } from 'react-icons/bi'
import { MovieI } from '../../contexts/MovieContext'
import { convertMinToHrs, getMovieGenres, getMovieYear } from '../../functions'
import {
  Container,
  MovieInfos,
  MovieName,
  MovieOverview,
  Poster,
  Rating,
} from './styles'

interface Props {
  movie: MovieI
}

export const Movie: React.FC<Props> = ({ movie }) => {
  if (!movie.id) {
    return null
  }

  return (
    <Container>
      <Poster>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
          title={movie.tagline}
        />
        <Rating>
          {(movie.vote_average * 10).toFixed(0)} <span>%</span>
        </Rating>
      </Poster>
      <div>
        <MovieName
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noreferrer"
        >
          {movie.title}
        </MovieName>

        <MovieOverview>{movie.overview}</MovieOverview>
        <MovieInfos>
          <li>
            <BiSolidStar size={20} color="#FFC107" />
            {getMovieYear(movie.release_date)}
          </li>
          <li>
            <BiSolidMovie size={20} color="#3F51B5" />
            {getMovieGenres(movie.genres)}
          </li>
          <li>
            <BiSolidTimeFive size={20} color="#aaa" />
            {convertMinToHrs(movie.runtime)}
          </li>
        </MovieInfos>
      </div>
    </Container>
  )
}
