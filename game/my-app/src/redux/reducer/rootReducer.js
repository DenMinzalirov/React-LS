import  addNameReducer from './addNameReducer'
import  addNewOrder from './addNewOrder'
import {combineReducers} from 'redux'

export default combineReducers({
    addNameReducer, addNewOrder
})

// import {ADD} from '../actions/actionTypes'

// const initialState = {
//     name: 'new',
// }

// export default function rootReducer (state = initialState, action) {

//     switch (action.type) {
//         case ADD:
//             return {
//                 name: state.name + 'OLD'
//             }
    
//         default:
//             return state;
//     }
//     // return state
// }