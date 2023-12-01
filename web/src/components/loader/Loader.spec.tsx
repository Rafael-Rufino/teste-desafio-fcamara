import { render } from '@testing-library/react'
import { Loader } from './Loader'

describe('Loader Component', () => {
  it('renders correctly when isLoading is true', () => {
    render(<Loader isLoading={true} />)
  })

  it('renders correctly when isLoading is false', () => {
    render(<Loader isLoading={false} />)
  })
})
