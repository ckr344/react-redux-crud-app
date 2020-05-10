// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'
import { 
  READ_EVENTS,
  DELETE_EVENT
} from '../actions'

// const initialState = { value: 0 }

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // 下記の2行＋上記のDELETE_EVENTで更新後のevents一覧を返してくれるようになる。逆に下記の記述がないとdeleteを行っても一度リロードしないとデータが消えない
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}