import { Avaliacao, Container } from "./styles";

// type Props = {};

export const Movie = () => {
  return (
    <Container>
      <img
        src="https://www.themoviedb.org/t/p/w220_and_h330_face/4CwKj1fw33BXYzxvrpM3GlAhK4L.jpg"
        alt=""
      />
      <Avaliacao>83 <span>%</span></Avaliacao>
      <div>
        <h2>Homem-Aranha: Através do Aranhaverso</h2>
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
