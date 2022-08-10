import { shallowMount, VueWrapper } from '@vue/test-utils'
import DrawCard from '@/components/DrawCard.vue'

describe('DrawCard.vue Tests', () => {
  const wrapper = shallowMount(DrawCard, {
    props: {
      date: 'a date',
      title: 'a title',
      additionalNumbers: ['1', '2'],
      numbers: ['1', '2'],
      jackpot: 'a jackpot',
      gameAmount: 'a game amount',
    },
  })
  it('renders DrawCard with props', () => {
    expect(wrapper.findComponent(DrawCard).exists()).toBe(true)
    expect(wrapper.props('date')).toBe('a date')
    expect(wrapper.props('title')).toBe('a title')
    expect(wrapper.props('additionalNumbers')).toEqual(['1', '2'])
    expect(wrapper.props('numbers')).toEqual(['1', '2'])
    expect(wrapper.props('jackpot')).toBe('a jackpot')
    expect(wrapper.props('gameAmount')).toBe('a game amount')
  })

  //-------------------------------------------------------------
})
