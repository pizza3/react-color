import React from 'react'
import renderer from 'react-test-renderer'
import color, { red } from '../../helpers/color'
import { mount } from 'enzyme'

import Google from './Google'
import GoogleFields from './GoogleFields'
import GooglePointer from './GooglePointer'
import GooglePointerCircle from './GooglePointerCircle'


test('Google renders correctly', () => {
  const tree = renderer.create(<Google { ...red } />).toJSON()
  expect(tree).toMatchSnapshot()
})
test('Google onChange events correctly', () => {
  const changeSpy = jest.fn((data) => {
    expect(color.simpleCheckForValidColor(data)).toBeTruthy()
  })
  const tree = mount(
    <Google { ...red } onChange={ changeSpy } />,
  )
  expect(changeSpy).toHaveBeenCalledTimes(0)

  // TODO: check the Hue component
  // TODO: check the ChromeFields
  // TODO: check Saturation
})


test('GoogleFields renders correctly', () => {
  const tree = renderer.create(
    <GoogleFields { ...red } />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GoogleFields renders correctly', () => {
  const tree = mount(
    <GoogleFields { ...red } />,
  )

  instance = tree.instance();
  console.log(instance.validColorString('123 31 33', 'rgb'))

})

test('GooglePointer renders correctly', () => {
  const tree = renderer.create(
    <GooglePointer />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('GooglePointerCircle renders correctly', () => {
  const tree = renderer.create(
    <GooglePointerCircle />,
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Google renders custom styles correctly', () => {
  const tree = renderer.create(
    <Google styles={{ default: { picker: { width: '200px' } } }} />,
  ).toJSON()
  expect(tree.props.style.width).toBe('200px')
})

test('Google renders correctly with width', () => {
  const tree = renderer.create(
    <Google width={ 200 } />,
  ).toJSON()
  expect(tree.props.style.width).toBe(200)
})
