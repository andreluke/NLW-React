import { StatusItem } from '@/components/status-item'
import { render, screen } from '@testing-library/react'
import { MousePointerClick } from 'lucide-react'

describe('StatusItem', () => {
  it('Renderiza corretamente o label e stats', () => {
    render(
      <StatusItem label="Acessos ao link" stats={10} icon={MousePointerClick} />
    )

    expect(screen.getByText('10')).toBeInTheDocument()
    expect(screen.getByText('Acessos ao link')).toBeInTheDocument()
  })

  it('Exibe o sufixo de posição quando `position` é true', () => {
    render(
      <StatusItem
        label="Posição no ranking"
        stats={2}
        icon={MousePointerClick}
        position
      />
    )

    expect(screen.getByText('2°')).toBeInTheDocument()
  })

  it('Renderiza o ícone com aria-label correto', () => {
    render(
      <StatusItem label="Acessos ao link" stats={10} icon={MousePointerClick} />
    )

    const icon = screen.getByLabelText('Acessos ao link')
    expect(icon).toBeInTheDocument()
  })
})
