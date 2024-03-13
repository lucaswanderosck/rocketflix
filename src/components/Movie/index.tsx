// import { MovieInfos } from '../../data/@types'
// import * as Fx from '../../functions'
// import * as S from './styles'

// import { BiSolidMovie, BiSolidStar, BiSolidTimeFive } from 'react-icons/bi'

// type Props = {
//   movie: MovieInfos
// }

// export const Movie = ({ movie }: Props) => {
//   return (
//     <S.Container>
//       <S.MovieLogo>
//         <img
//           src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
//           alt={movie.title}
//           title={movie.title}
//         />
//         <span>
//           {(movie.vote_average * 10).toFixed(0)} <span>%</span>
//         </span>
//       </S.MovieLogo>

//       <S.MovieDetails>
//         {movie.homepage ? (
//           <S.MovieTitle as="a" href={movie.homepage} target="_blank">
//             {movie.title}
//           </S.MovieTitle>
//         ) : (
//           <S.MovieTitle>{movie.title}</S.MovieTitle>
//         )}

//         <S.MovieDescription>
//           {Fx.lowerOverview(movie.overview)}
//         </S.MovieDescription>
//         <S.MovieInfos>
//           <li>
//             <BiSolidStar size={20} color="#FFC107" />
//             {Fx.getMovieYear(movie.release_date)}
//           </li>
//           <li>
//             <BiSolidMovie size={20} color="#3F51B5" />
//             {Fx.getMovieGenres(movie.genres)}
//           </li>
//           <li>
//             <BiSolidTimeFive size={20} color="#aaa" />
//             {Fx.convertMinToHrs(movie.runtime)}
//           </li>
//         </S.MovieInfos>
//       </S.MovieDetails>
//     </S.Container>
//   )
// }

import React from 'react'
import { BiSolidMovie, BiSolidStar, BiSolidTimeFive } from 'react-icons/bi'
import { getMovieYear } from '../../functions'
import {
  Container,
  MovieDescription,
  MovieInfos,
  MovieName,
  Poster,
  Rating,
} from './styles'

export const Movie: React.FC = () => {
  return (
    <Container>
      <Poster>
        <img src="https://fakeimg.pl/171x243" alt="" />
        <Rating>
          78 <span>%</span>
        </Rating>
      </Poster>
      <div>
        <MovieName>Vingadores</MovieName>
        <MovieDescription>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          modi dolores necessitatibus rem accusamus deserunt expedita est, nemo
          vero hic iure sequi, qui omnis quo ab recusandae, excepturi
          consequatur? Asperiores.
        </MovieDescription>
        <MovieInfos>
          <li>
            <BiSolidStar size={20} color="#FFC107" />
            {getMovieYear('2021-09-01')}
          </li>
          <li>
            <BiSolidMovie size={20} color="#3F51B5" />
            Action, Adventure, Comedy
          </li>
          <li>
            <BiSolidTimeFive size={20} color="#aaa" />
            2h 30min
          </li>
        </MovieInfos>
      </div>
    </Container>
  )
}
