import * as S from "./styles";
import * as Fx from "../../data/functions";
import { MovieInfos } from "../../data/@types";

import { BiSolidTimeFive, BiSolidStar, BiSolidMovie } from "react-icons/bi";

type Props = {
  movie: MovieInfos;
};

export const MovieList = ({ movie }: Props) => {
  return (
    <S.Container>
      <S.MovieLogo>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
          alt={movie.title}
          title={movie.title}
        />
        <span>
          {(movie.vote_average * 10).toFixed(0)} <span>%</span>
        </span>
      </S.MovieLogo>

      <S.MovieDetails>
        <S.MovieTitle>{movie.title}</S.MovieTitle>
        <S.MovieDescription>
          {Fx.lowerOverview(movie.overview)}
        </S.MovieDescription>
        <S.MovieInfos>
          <li>
            <BiSolidStar size={20} color="#FFC107" />
            {Fx.getMovieYear(movie.release_date)}
          </li>
          <li>
            <BiSolidMovie size={20} color="#3F51B5" />
            {Fx.getMovieGenres(movie.genres)}
          </li>
          <li>
            <BiSolidTimeFive size={20} color="#aaa" />
            {Fx.convertMinToHrs(movie.runtime)}
          </li>
        </S.MovieInfos>
        {movie.homepage && <a href={movie.homepage} target="blank">homepage</a>}
      </S.MovieDetails>
    </S.Container>
  );
};
