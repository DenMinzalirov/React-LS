import {ADD_ORDER} from '../actions/actionTypes'

const initialState = {
    brend: '',
    model: '',
    part: '',
    description: '',
}

export default function addNewOrder (state = initialState, action) {

    switch (action.type) {
        case ADD_ORDER:
            return {
                ...action.payload
            }
    
        default:
            return state;
    }
    // return state
}