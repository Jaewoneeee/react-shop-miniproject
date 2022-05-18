import { combineReducers } from 'redux'
import loginCheckReducer from './loginCheckReducer'
import productReducer from './productReducer'

export default combineReducers({
    login : loginCheckReducer,
    product : productReducer
})