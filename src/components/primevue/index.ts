import Button from 'primevue/button'
import Card from 'primevue/card'
import Menubar from 'primevue/menubar'
import TabMenu from 'primevue/tabmenu'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Password from 'primevue/password'
import Steps from 'primevue/steps'
import PanelMenu from 'primevue/panelmenu'
import CascadeSelect from 'primevue/cascadeselect'
import Dropdown from 'primevue/dropdown'

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
installPrimeVueComponent('p-tab-menu', TabMenu)
installPrimeVueComponent('p-input-text', InputText)
installPrimeVueComponent('p-checkbox', Checkbox)
installPrimeVueComponent('p-password', Password)
installPrimeVueComponent('p-steps', Steps)
installPrimeVueComponent('p-panel-menu', PanelMenu)
installPrimeVueComponent('p-cascade-select', CascadeSelect)
installPrimeVueComponent('p-dropdown', Dropdown)
