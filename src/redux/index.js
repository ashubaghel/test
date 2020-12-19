import { combineReducers } from 'redux'
import {ConatctReducer} from './ConatctReducer'

export default combineReducers({
    contacts:ConatctReducer,
})