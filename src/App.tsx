import { useEffect, useState } from "react";

import axios from "axios";
import shuffleIcon from "./assets/shuffle.svg";
import { MovieId, MovieInfos } from "./data/@types";

import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { Button } from "./components/Button";

export const App = () => {
  const key = "fc229917830e1f3d059007efb9649b95";
  const [movieIdState, setMovieIdState] = useState<MovieId | null>(null);
  const [movieInfos, setMovieInfos] = useState<MovieInfos | null>(null);

  const fetchRandomMovie = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&language=pt-BR&page=1`
      );

      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      const randomMovie: MovieId = response.data.results[randomIndex];

      setMovieIdState(randomMovie);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  useEffect(() => {
    if (movieIdState) {
      fetchMovieInfos();
    }
  }, [movieIdState]);

  const fetchMovieInfos = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieIdState?.id}?api_key=${key}&language=pt-BR&page=1`
      );
      const infos: MovieInfos = response.data;
      setMovieInfos(infos);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      {movieInfos && <MovieList movie={movieInfos} />}
      <Button
        children="Encontrar filme"
        title="Clique para encontrar um filme"
        icon={<img src={shuffleIcon} alt="shuffle icon" />}
        onClick={fetchRandomMovie}
      />
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </div>
  );
};
