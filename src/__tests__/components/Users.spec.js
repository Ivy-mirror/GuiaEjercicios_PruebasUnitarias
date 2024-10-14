import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import UserComponent from '@/components/UserComponent.vue'

describe('UserComponent', () => {
  const wrapper = mount(UserComponent)

  it('El HTML  se mantiene en las pruebas', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Tiene una lista de usuaruis, con el texto "user.name"', async () => {
    const wrapper = mount(UserComponent, {})
    wrapper.vm.users = [
      { id: 1, name: 'Pollo Mario' },
      { id: 2, name: 'Gato Ramón' },
      { id: 3, name: 'Ratón Carlos' },
    ]

    await wrapper.vm.$nextTick()

    const li = wrapper.findAll('li')

    expect(li[0].text()).toBe('Pollo Mario')
    expect(li).toHaveLength(3)
  })
})
