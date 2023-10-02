import { Button } from "./components/Button";
import shuffleIcon from "./assets/shuffle.svg";

export const App = () => {
  return (
    <Button
      children="Encontrar Filme"
      icon={<img src={shuffleIcon} alt="shuffle icon" />}
    />
  );
};
