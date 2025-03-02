import { InputField, InputIcon, InputRoot } from '@/components/input'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input Components', () => {
  it('InputRoot renderiza corretamente e aplica classes base', () => {
    render(<InputRoot data-testid="input-root" />)

    const inputRoot = screen.getByTestId('input-root')

    expect(inputRoot).toBeInTheDocument()
    expect(inputRoot).toHaveClass(
      'group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger'
    )
  })

  it('InputRoot aplica classe de erro quando `error=true`', () => {
    render(<InputRoot error data-testid="input-root" />)

    const inputRoot = screen.getByTestId('input-root')
    expect(inputRoot).toHaveAttribute('data-error', 'true')
    expect(inputRoot).toHaveClass('data-[error=true]:border-danger')
  })

  it('InputIcon renderiza corretamente', () => {
    render(<InputIcon data-testid="input-icon">🔍</InputIcon>)

    const inputIcon = screen.getByTestId('input-icon')
    expect(inputIcon).toBeInTheDocument()
    expect(inputIcon).toHaveTextContent('🔍')
    expect(inputIcon).toHaveClass(
      'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger'
    )
  })

  it('InputField aceita input do usuário', async () => {
    render(<InputField placeholder="Digite algo..." />)

    const input = screen.getByPlaceholderText('Digite algo...')
    expect(input).toBeInTheDocument()

    await userEvent.type(input, 'Teste')

    expect(input).toHaveValue('Teste')
  })
})
