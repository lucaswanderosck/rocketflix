import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Home } from './pages/Home'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}
