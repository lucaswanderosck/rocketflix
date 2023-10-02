import { Container } from "./styles";

type Props = {
  title: string;
  movieTitle: string;
};

export const Movie = ({ title, movieTitle }: Props) => {
  return (
    <Container>
      <h1>{title}</h1>
      <div>
        <img src="pla" alt="" />
        <h2>{movieTitle}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          minima quia, porro facilis, nostrum labore repellendus laboriosam,
          iusto ipsum dolore magnam temporibus? Obcaecati error voluptatibus,
          repellendus quia qui asperiores. Fugit?
        </p>
      </div>
    </Container>
  );
};
