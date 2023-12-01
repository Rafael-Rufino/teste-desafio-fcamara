import { fireEvent, render, screen } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'
import theme from '../../assets/styles/themes/default'

import { Button } from './Button'

const ThemeProviderGeneric = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

describe('Button Component', () => {
  it('renders with primary variant', () => {
    render(ThemeProviderGeneric(<Button variant="primary">Entrar</Button>))

    expect(screen.getByText('Entrar')).toBeInTheDocument()

    expect(screen.getByText('Entrar')).toHaveStyleRule(
      'background',
      theme.colors.primary.main
    )
  })

  it('calls onClick handler', () => {
    const onClickMock = jest.fn()

    render(
      ThemeProviderGeneric(<Button onClick={onClickMock}>Click me</Button>)
    )

    expect(screen.getByText('Click me')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Click me'))
    expect(onClickMock).toHaveBeenCalled()
  })
})
