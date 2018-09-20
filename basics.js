const redux = require('redux')
const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer using default value ES6
const rootReducer = (state=initialState, action) => {
  switch( action.type ) {
    case 'INC_COUNTER':
      return {
        ...state,
        counter: state.counter+1
      }
      case 'ADD_COUNTER':
      return {
        ...state,
        counter: state.counter+action.value
      }
  }
  return state
}

// Store
const store = createStore(rootReducer)
console.log(store.getState()) 

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'})
store.dispatch({type: 'ADD_COUNTER', value: 10})
console.log(store.getState())