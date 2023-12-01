import { render } from '@testing-library/react'

import { FormGroup } from './FormGroup'

describe('FormGroup Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<FormGroup>Form content</FormGroup>)
    expect(getByText('Form content')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    const { getByText } = render(
      <FormGroup error="This is an error">Form content</FormGroup>
    )
    expect(getByText('This is an error')).toBeInTheDocument()
  })
})
