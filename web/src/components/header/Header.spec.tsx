import { render, screen } from '@testing-library/react'

import { Header } from './Header'

describe('Header Component', () => {
  it('renders correctly with children', () => {
    render(<Header>Content</Header>)
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders correctly without children', () => {
    render(<Header />)
    expect(screen.queryByText('Content')).toBeNull()
  })
})
