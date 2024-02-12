import axios from "axios";
import { useEffect, useState } from "react";

import { MovieId, MovieInfos } from "./data/@types";
import { api } from "./data/api";

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";

import { Dna } from "react-loader-spinner";
import shuffleIcon from "./assets/shuffle.svg";

export const App = () => {
  const [movieIdState, setMovieIdState] = useState<MovieId | null>(null);
  const [movieInfos, setMovieInfos] = useState<MovieInfos | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRandomMovie = async () => {
    try {
      setIsLoading(true);

      const response = await api.get(
        'movie/popular?api_key=fc229917830e1f3d059007efb9649b95&page=1'
        // "account/20503458/favorite/movies?api_key=fc229917830e1f3d059007efb9649b95&page=1&sort_by=created_at.asc"
      );

      const randomIndex = Math.floor(
        Math.random() * response.data.results.length
      );
      const randomMovie: MovieId = response.data.results[randomIndex];

      setMovieIdState(randomMovie);
      setInterval(() => setIsLoading(false), 2000);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  useEffect(() => {
    const fetchMovieInfos = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieIdState?.id}?api_key=fc229917830e1f3d059007efb9649b95&language=pt-BR&page=1`
        );
        const infos: MovieInfos = response.data;
        setMovieInfos(infos);
      } catch (error) {
        console.error("Erro ao buscar filme:", error);
      }
    };

    if (movieIdState) {
      fetchMovieInfos();
    }
  }, [movieIdState]);

  return (
    <div className="container">
      <Header />
      {isLoading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{
            marginTop: "32px",
          }}
          wrapperClass="dna-wrapper"
        />
      ) : (
        movieInfos && <MovieList movie={movieInfos} />
      )}
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
