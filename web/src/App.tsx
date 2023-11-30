import { ThemeProvider } from 'styled-components'

import GlobalStyles from './assets/styles/global'
import theme from './assets/styles/themes/default'

import { BrowserRouter as Router } from 'react-router-dom'

import { Routes } from './Routes'
import { AuthProvider } from './providers/auth'
import ToastProvider from './providers/toast'

function App() {
  return (
    <Router>
      <AuthProvider>
        <ToastProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Routes />
          </ThemeProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
