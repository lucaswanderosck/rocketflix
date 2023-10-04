import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { Button } from "./components/Button";

import shuffleIcon from "./assets/shuffle.svg";

type Movie = {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
};

export const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showMovieList, setShowMovieList] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randomIndex, setRandomIndex] = useState(-1);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=fc229917830e1f3d059007efb9649b95&language=pt-BR&page=1"
      // 'https://api.themoviedb.org/3/genre/movie/list?api_key=fc229917830e1f3d059007efb9649b95&language=en-US'
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  const handleFindMovie = () => {
    setLoading(true);
    const random = Math.floor(Math.random() * movies.length);
    setRandomIndex(random);
    setShowMovieList(true);
    setLoading(false);
  };

  return (
    <div className="container">
      <Header />
      {showMovieList && <MovieList {...movies[randomIndex]} />}

      <Button
        children="Encontrar filme"
        icon={<img src={shuffleIcon} alt="shuffle icon" />}
        onClick={handleFindMovie}
      />
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </div>
  );
};
