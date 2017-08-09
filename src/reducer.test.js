import reducer from './reducer'
import { createTodo, filterTodos, toggleTodo } from './actions'

describe('CREATE_TODO', function () {
  test('creates a new todo', function () {
    const initialState = {todos: [], nextId: 1, done: false}
    const state = reducer(initialState, createTodo('Test'))
    expect(state.todos).toHaveLength(1)
    expect(state.todos[0]).toEqual({id: 1, done: false, text: 'Test'})
  })
})

describe('FILTER_TODOS', function () {
  test('filters a todo item', function () {
    const initialState = {todos: [], nextId: 1, done: false, filter: 'all'}
    const state = reducer(initialState, filterTodos('completed'))
    expect(state.filter).toEqual('completed')
  })
})

describe('TOGGLE_TODO', function () {
  test('toggles whether a todo item is completed', function () {
    const initialState = {todos: [], nextId: 1, done: false, filter: 'all'}
    const todo = reducer(initialState, createTodo('Test'))
    const state = reducer(todo, toggleTodo(1))
    expect(state.todos[0].done).toEqual(true)
  })
})
