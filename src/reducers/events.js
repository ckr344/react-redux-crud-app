// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'
import { READ_EVENTS } from '../actions'

// const initialState = { value: 0 }

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}