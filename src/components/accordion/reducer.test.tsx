import {reducer, StateType, TOGGLE_COLLAPSED} from './Reducer';

test('collapsed true', () => {
  const state: StateType = {
    collapsed: false
  }

  const newState = reducer(state, {type: TOGGLE_COLLAPSED})

  expect(newState.collapsed).toBe(true)
})

test('collapsed true', () => {
  const state: StateType = {
    collapsed: true
  }

  const newState = reducer(state, {type: TOGGLE_COLLAPSED})

  expect(newState.collapsed).toBe(false)
})


test('collapsed Error', () => {
  const state: StateType = {
    collapsed: true
  }
  expect(() => {
    reducer(state, {type: "FAKE"})
  }).toThrowError()
})