import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import Image from 'primevue/image'
import Dialog from 'primevue/dialog'

type PrimeVueComponents = {
  name: string
  component: any
}[]

function installPrimeVueComponent(componentName: string, component: any) {
  primeVueComponents.push({
    name: componentName,
    component: component,
  })
}

export const primeVueComponents: PrimeVueComponents = []

installPrimeVueComponent('p-button', Button)
installPrimeVueComponent('p-card', Card)
installPrimeVueComponent('p-menubar', Menubar)
installPrimeVueComponent('p-image', Image)
installPrimeVueComponent('p-dialog', Dialog)
