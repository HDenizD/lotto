import { mount } from '@vue/test-utils'
import PlayerWelcome from '@/components/PlayerWelcome.vue'

describe('PlayerWelcome.vue Tests', () => {
  const wrapper = mount(PlayerWelcome)

  it('renders welcome card', () => {
    expect(wrapper.find('p-card').exists()).toBe(true)
  })

  //-------------------------------------------------------------
})
