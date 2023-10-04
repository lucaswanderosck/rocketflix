import { Container } from "./styles";

type Props = {
  icon?: JSX.Element;
  children: string;
  onClick?: () => void;
};

export const Button = ({ children, icon, onClick }: Props) => {
  return (
    <Container type="button" role="button" onClick={onClick}>
      <span>
        {icon}
        {children}
      </span>
    </Container>
  );
};
