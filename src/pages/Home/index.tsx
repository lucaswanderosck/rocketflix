import React from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Movie } from '../../components/Movie'
import { MainContainer } from './styles'

export const Home: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Movie />
      <Button onClick={() => console.log('VAI NEYMAR')} />
    </MainContainer>
  )
}
