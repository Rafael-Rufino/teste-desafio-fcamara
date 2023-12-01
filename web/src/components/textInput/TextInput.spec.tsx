import { render, screen } from '@testing-library/react'

import { TextInput } from './TextInput'

describe('TextInput Component', () => {
  it('renders correctly with label', () => {
    render(<TextInput label="Username" />)

    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  it('renders correctly without label', () => {
    render(<TextInput />)
  })
})
