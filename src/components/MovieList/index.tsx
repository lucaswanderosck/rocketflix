import { useEffect, useState } from "react";

import { Avaliacao, Container, Generos } from "./styles";
import { AiFillStar } from "react-icons/ai";
import { FcFilm } from "react-icons/fc";

type Props = {
  title: string;
  id: number;
  vote_average: number;
  release_date: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
};

export const MovieList = ({
  id,
  overview,
  poster_path,
  release_date,
  title,
  vote_average,
  genre_ids,
}: Props) => {
  const [genres, setGenres] = useState([]);
  const [homepage, setHomepage] = useState("");

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=fc229917830e1f3d059007efb9649b95&language=pt-BR"
    )
      .then((response) => response.json())
      .then((data) => {
        setGenres(data.genres);
      });
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fc229917830e1f3d059007efb9649b95&language=pt-BR&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setHomepage(data.homepage);
      });
  }, [id]);

  const getGenre = (genre_ids: number[]) => {
    const genresList = genres.filter((genre: any) =>
      genre_ids.includes(genre.id)
    );
    const genresNames = genresList.map((genre: any) => genre.name);
    return genresNames.join(", ");
  };

  const getOverview = (overview: string) => {
    if (overview.length > 200) {
      return `${overview.substring(0, 300)}...}`;
    }
    return overview;
  };

  const formatDate = (date: string) => {
    const dateArray = date.split("-");
    const year = dateArray[0];
    const month = dateArray[1];
    const day = dateArray[2];

    return `${day}/${month}/${year}`;
  };

  return (
    <Container>
      <img
        src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`}
        alt={title}
        title={title}
      />

      <Avaliacao>
        {vote_average * 10} <span>%</span>
      </Avaliacao>
      <div>
        <h2>{title}</h2>
        <p>{getOverview(overview)}</p>
        <div>
          <p>
            <AiFillStar size={20} color="#FFC107" />
            {formatDate(release_date)}
          </p>
          <Generos>
            <FcFilm size={20} />
            {getGenre(genre_ids)}
          </Generos>
        </div>
        {homepage && <a href={homepage}>visitar a pagina</a>}
      </div>
    </Container>
  );
};
