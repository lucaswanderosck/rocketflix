import React from 'react'
import { Container, Lines, Square } from './styles'

export const Skeleton: React.FC = () => {
  return (
    <Container>
      <Square>
        <div />
      </Square>
      <Lines>
        <div className="line mb14 w50" />
        <div className="line h14" />
        <div className="line h14" />
        <div className="line h14" />
        <div className="line h14" />
        <div className="line h14 w40" />
        <div className="line mt12 w75" />
      </Lines>
    </Container>
  )
}
