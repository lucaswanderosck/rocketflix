import { Container } from "./styles";

type Props = {
  icon?: JSX.Element;
  children: string;
};

export const Button = ({ children, icon }: Props) => {
  return (
    <Container type="button">
      {icon} {children}
    </Container>
  );
};
