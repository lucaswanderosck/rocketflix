import { Container } from "./styles";

type Props = {
  icon?: JSX.Element;
  title?: string;
  children: string;
  onClick?: () => void;
};

export const Button = ({ children, icon, title, onClick }: Props) => {
  return (
    <Container type="button" role="button" title={title} onClick={onClick}>
      <span>
        {icon}
        {children}
      </span>
    </Container>
  );
};
