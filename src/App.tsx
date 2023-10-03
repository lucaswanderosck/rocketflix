import { Button } from "./components/Button";
import { Movie } from "./components/Movie";

import shuffleIcon from "./assets/shuffle.svg";
import { Header } from "./components/Header";

export const App = () => {
  const notMovie = true;
  return (
    <div className="container">
      <Header />
      {notMovie && <Movie />}
      <Button
        children="Encontrar filme"
        icon={<img src={shuffleIcon} alt="shuffle icon" />}
      />
      <p>
        Clique em "Encontrar filme" que traremos informações de algum filme para
        você assistir hoje.
      </p>
    </div>
  );
};
