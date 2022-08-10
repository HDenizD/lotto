import { useApp } from './../stores/app'
import { mount, flushPromises, VueWrapper } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import EuroJackpot from '@/pages/EuroJackpot.vue'
import DrawCard from '@/components/DrawCard.vue'

describe('EuroJackpot.vue Tests', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(EuroJackpot, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
  })

  it('renders DrawCard component if draws exist', async () => {
    const appStore = useApp()

    const mockedDraw = {
      additionalNumbers: ['1', '2'],
      date: 'a date',
      gameAmount: 'string',
      jackpot: 'string',
      numbers: ['1', '2'],
      seo: {
        title: 'string',
      },
    }
    appStore.draws.push(mockedDraw)

    await flushPromises()

    expect(wrapper.findComponent(DrawCard).exists()).toBe(true)
  })

  it('doesnt renders DrawCard component if no draws exist', () => {
    expect(wrapper.findComponent(DrawCard).exists()).toBe(false)
  })

  //-------------------------------------------------------------
})
