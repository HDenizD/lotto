import { shallowMount, flushPromises } from '@vue/test-utils'
import MenuBar from '@/components/MenuBar.vue'
import PrimeVue from 'primevue/config'

describe('MenuBar.vue Tests', () => {
  const wrapper = shallowMount(MenuBar, {
    plugins: [PrimeVue],
  })

  it('renders MenuBar component', () => {
    expect(wrapper.findComponent('p-menubar').exists()).toBe(true)
  })

  it('checks for MenuBar has two NavItems', () => {
    expect(wrapper.vm.items).toHaveLength(2)
  })

  //-------------------------------------------------------------
})
