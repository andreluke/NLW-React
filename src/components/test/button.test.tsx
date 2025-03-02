import { Button } from '@/components/button'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Button', () => {
  it('renderiza corretamente com o texto passado como children', () => {
    render(<Button>Click Me</Button>)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('chama a função onClick quando clicado', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    fireEvent.click(screen.getByText('Click Me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('aplica corretamente as classes de estilo', () => {
    render(<Button>Click Me</Button>)
    const button = screen.getByText('Click Me')

    expect(button).toHaveClass(
      'flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900'
    )
  })
})
