import { mount, VueWrapper } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import PlayerWelcome from '@/components/PlayerWelcome.vue'

describe('Home.vue Tests', () => {
  const wrapper = mount(Home)

  it('welcomes player with a PlayerWelcome card component', async () => {
    expect(wrapper.findComponent(PlayerWelcome).exists()).toBe(true)
  })

  //-------------------------------------------------------------
})
