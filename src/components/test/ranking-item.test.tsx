import { positionRanking, rankingMedals, translateMedal } from '@/tools'
import type { IRanking } from '@/types'
import { render, screen } from '@testing-library/react'
import type { JSX } from 'react'
import { RankingItem } from '../ranking-item'

jest.mock('next/image', () => (props: JSX.IntrinsicElements['img']) => {
  // biome-ignore lint/a11y/useAltText: <explanation>
  return <img alt="mocked medal" {...props} />
})

describe('RankingItem', () => {
  const mockRanking: IRanking = {
    medal: 'gold',
    name: 'João Silva',
    score: 1500,
  }

  it('renderiza corretamente o nome e pontuação', () => {
    render(<RankingItem {...mockRanking} />)

    expect(screen.getByText(/João Silva/i)).toBeInTheDocument()
    expect(screen.getByText('1500')).toBeInTheDocument()
  })

  it('exibe corretamente a posição do ranking', () => {
    render(<RankingItem {...mockRanking} />)

    expect(
      screen.getByText(new RegExp(`${positionRanking[mockRanking.medal]}`, 'i'))
    ).toBeInTheDocument()
  })

  it('exibe a imagem da medalha corretamente', () => {
    render(<RankingItem {...mockRanking} />)

    const medalImage = screen.getByAltText(
      `medalha de ${translateMedal[mockRanking.medal]}`
    )

    expect(medalImage).toBeInTheDocument()
    expect(medalImage).toHaveAttribute('src', rankingMedals[mockRanking.medal])
  })
})
