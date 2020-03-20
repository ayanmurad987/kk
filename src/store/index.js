import { createStore , compose, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from './reducers'

const enhancer = compose(applyMiddleware(thunk, logger))
const store = createStore(rootReducer, enhancer)
export default store