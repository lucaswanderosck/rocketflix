import React from 'react'
import shuffleIcon from '../../assets/shuffle.svg'
import { Container } from './styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<Props> = ({ ...props }) => {
  return (
    <React.Fragment>
      <Container {...props}>
        <span>
          <img src={shuffleIcon} alt="shuffle icon" />
          <p>Encontrar Filme</p>
        </span>
      </Container>
      <p>
        Clique em &quot;Encontrar filme&quot; que traremos informações de algum
        filme para você assistir hoje.
      </p>
    </React.Fragment>
  )
}
