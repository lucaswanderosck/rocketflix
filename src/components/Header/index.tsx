import { Container } from "./styles";

import shuffleIcon from "../../assets/shuffle.svg";

export const Header = () => {
  return (
    <Container>
      <img src={shuffleIcon} alt="shuffle Logo" />
      <h1>Não sabe o que assistir?</h1>
    </Container>
  );
};
