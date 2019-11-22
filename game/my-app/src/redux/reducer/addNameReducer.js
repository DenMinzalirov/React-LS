import {ADD} from '../actions/actionTypes'

const initialState = {
    name: 'new',
}

export default function addNameReducer (state = initialState, action) {

    switch (action.type) {
        case ADD:
            return {
                name: state.name + 'OLD'
            }
    
        default:
            return state;
    }
    // return state
}