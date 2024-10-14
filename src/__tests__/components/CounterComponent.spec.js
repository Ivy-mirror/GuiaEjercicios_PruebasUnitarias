import { describe, it, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'

import CounterComponent from '@/components/CounterComponent.vue'

describe('CounterComponent', () => {
  const wrapper = mount(CounterComponent)

  it('El HTML se mantiene en las pruebas', () => {
    /* Se verfica si el marcado html se mantiene estable entre pruebas  */
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('Tiene un botón para aumentar contador con texto "+1"', () => {
    const btnAumentar = wrapper.find('#aumentar')
    expect(btnAumentar.text()).toBe('+1')
  })
  test('Tiene un botón para disminuir contador con texto "-1"', () => {
    const btnDisminuir = wrapper.find('#disminuir')
    expect(btnDisminuir.text()).toBe('-1')
  })

  it('Aumenta el contador en uno al haccer click en el "+1"', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())

    const btnAumentar = wrapper.find('#aumentar')
    await btnAumentar.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#contador').text())
    expect(contadorAntesClick).toBeLessThan(contadorDespuesClick)
  })

  it('Disminuye el contador en uno al haccer click en el "-1"', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())

    const btnDisminuir = wrapper.find('#disminuir')
    await btnDisminuir.trigger('click')

    const contadorDespuesClick = Number(wrapper.find('#contador').text())
    expect(contadorDespuesClick).toBeLessThan(contadorAntesClick)
  })

  it('Disminuye el contador en 2 al hacer click en -2', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())
    const btnDisminuirDos = wrapper.find('#disminuirDos')
    await btnDisminuirDos.trigger('click')
    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorDespuesClick).toEqual(contadorAntesClick - 2)
  })
  it('Aumenta el contador en 2 al hacer click en +2', async () => {
    const contadorAntesClick = Number(wrapper.find('#contador').text())
    const btnAumentarDos = wrapper.find('#aumentarDos')
    await btnAumentarDos.trigger('click')
    const contadorDespuesClick = Number(wrapper.find('#contador').text())

    expect(contadorDespuesClick).toEqual(contadorAntesClick + 2)
  })
})
