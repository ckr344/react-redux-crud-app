import { combineReducers } from 'redux'
import events from './events'

export default combineReducers({ events })

// 複数のreducerを統合する場合は下記のような書き方となる
// export default combineReducers({foo, bar, baz})