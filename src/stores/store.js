import {
  createStore,
  //   combineReducers,
  applyMiddleware
} from 'redux'
import {
  DELETE,
  INCRE,
  DECRE,
  RESET,
  ADD
} from './actionName'
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise'
import { composeWithDevTools } from 'redux-devtools-extension'
// redux part

// initialize the state
const initialState = {
  counters: [{
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 2
  },
  {
    id: 3,
    value: 1
  },
  {
    id: 4,
    value: 3
  }
  ]
}

// Action creators
export const actionDelete = propCounterId => {
  return {
    type: DELETE,
    id: propCounterId
  }
}
export const actionIncrement = propCounter => {
  return {
    type: INCRE,
    props: propCounter
  }
}
export const actionDecrement = propCounter => {
  return {
    type: DECRE,
    props: propCounter
  }
}
export const actionReset = () => {
  return {
    type: RESET
  }
}

export const actionAddAsyn = (ID) => {
  return {
    type: ADD,
    payload: { id: ID, value: 1 }
  }
}

export const actionAdd = () => {
  return dispatch => {
    console.log('thunk')
    const ID = initialState.counters.length + 2
    dispatch(actionAddAsyn(ID))
  }
}

// Reducers
const reducer = (state = initialState, action) => {
  var counters
  var idx
  switch (action.type) {
    case INCRE:
      counters = state.counters.slice()
      idx = counters.indexOf(action.props)
      counters[idx].value += 1
      return {
        ...state,
        counters: counters
      }

    case DECRE:
      counters = state.counters.slice()
      idx = counters.indexOf(action.props)
      if (counters[idx].value) {
        counters[idx].value -= 1
      }

      return {
        ...state,
        counters: counters
      }

    case DELETE:
      counters = state.counters.filter(
        counter => counter.id !== action.id
      )
      return {
        ...state,
        counters: counters
      }
    case RESET:
      counters = state.counters.map(ct => {
        ct.value = 0
        return ct
      })
      return {
        ...state,
        counters: counters
      }
    case ADD:
      counters = state.counters.concat(action.payload)
      return {
        ...state,
        counters: counters
      }
    default:
      return state
  }
}
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk, ReduxPromise)
  // other store enhancers if any
))

export default store
