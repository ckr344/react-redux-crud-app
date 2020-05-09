import { combineReducers } from 'redux'
import count from './count'

export default combineReducers({count)

// 複数のreducerを統合する場合は下記のような書き方となる
// export default combineReducers({foo, bar, baz)