import { flushPromises, mount } from '@vue/test-utils'
import PlayerWelcome from '@/components/PlayerWelcome.vue'
import PrimeVue from "primevue/config";

describe('PlayerWelcome.vue Tests', () => {
  const wrapper = mount(PlayerWelcome, {
    plugins: [PrimeVue],
  })

  it('renders welcome card', () => {
    expect(wrapper.find('p-card').exists()).toBe(true)
  })

  //-------------------------------------------------------------
})
