import { IconButton } from '@/components/icon-button'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('IconButton', () => {
  it('renderiza corretamente', () => {
    render(<IconButton aria-label="Botão de ícone" />)

    expect(
      screen.getByRole('button', { name: /botão de ícone/i })
    ).toBeInTheDocument()
  })

  it('chama onClick quando clicado', async () => {
    const onClick = jest.fn()
    const user = userEvent.setup()

    render(<IconButton onClick={onClick} aria-label="Botão de ícone" />)

    await user.click(screen.getByRole('button', { name: /botão de ícone/i }))

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('permite a personalização de classes via className', () => {
    render(<IconButton className="custom-class" aria-label="Botão de ícone" />)

    const button = screen.getByRole('button', { name: /botão de ícone/i })
    expect(button).toHaveClass('custom-class')
  })
})
