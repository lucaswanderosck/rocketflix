import React from 'react'
import shuffleIcon from '../../assets/shuffle.svg'
import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLElement> {}

export const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <img src={shuffleIcon} alt="shuffle Logo" />
      <h1>Não sabe o que assistir?</h1>
    </Container>
  )
}
