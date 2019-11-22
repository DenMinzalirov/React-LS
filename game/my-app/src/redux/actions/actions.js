import{ADD, ADD_ORDER} from './actionTypes'

export function add () {
    return {
        type: ADD
    }
}

export function addOrder (order) {
    return {
        type: ADD_ORDER,
        payload: {...order}
    }
}