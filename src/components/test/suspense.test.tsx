import { render, screen } from '@testing-library/react'
import { LoadingIndicator } from '../suspense'

describe('LoadingIndicator', () => {
  it('renderiza corretamente o componente', () => {
    render(<LoadingIndicator />)

    const loader = screen.getByRole('status', { hidden: true })
    expect(loader).toBeInTheDocument()
  })
})
