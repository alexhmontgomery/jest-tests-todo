import { createTodo, filterTodos, toggleTodo } from './actions'
import { CREATE_TODO, FILTER_TODOS, TOGGLE_TODO } from './actions'

describe('actions', () => {
  it('creates action to add todo', () => {
    const expectedAction = {
      type: CREATE_TODO
    }
    expect(createTodo()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('creates action to toggles the status of done between true and false', () => {
    const expectedAction = {
      type: TOGGLE_TODO
    }
    expect(toggleTodo()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('creates an action to filter between completed and incomplete todos', () => {
    const expectedAction = {
      type: FILTER_TODOS
    }
    expect(filterTodos()).toEqual(expectedAction)
  })
})
