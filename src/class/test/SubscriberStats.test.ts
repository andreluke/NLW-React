import { SubscriberStats } from '../SubscriberStats'

test('Deve retornar os status formatados corretamente', async () => {
  const mockFetchStats = async () => ({
    accessCount: 10,
    inviteCount: 5,
    rankingPosition: 2,
  })

  const stats = new SubscriberStats('123', mockFetchStats)
  const result = await stats.getSubscriberStatusData()

  expect(result).toEqual([
    { label: 'Acessos ao link', stats: 10, icon: expect.any(Object) },
    { label: 'Inscrições feitas', stats: 5, icon: expect.any(Object) },
    {
      label: 'Posição no ranking',
      stats: 2,
      icon: expect.any(Object),
      position: true,
    },
  ])
})
