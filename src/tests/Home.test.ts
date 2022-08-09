import { mount, VueWrapper } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import PlayerWelcome from '@/components/PlayerWelcome.vue'

describe('Home.vue Tests', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(Home)
  })

  it('welcomes player with a welcome card', async () => {
    expect(wrapper.findComponent(PlayerWelcome).exists()).toBe(true)
  })

  //-------------------------------------------------------------
})
