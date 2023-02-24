import { ADD, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, REDUCE, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"


export const handleAdd = (payload)=>{
    return {
        type: ADD,
        payload,
    }
}

export const handleRemove = (payload)=>{
    return {
        type: REDUCE,
        payload,
    }
}
export const todoRequest = ()=>{
    return{
        type: TODO_REQUEST
    }
}
export const todoSuccess = (payload)=>{
    return {
        type: TODO_SUCCESS,
        payload,
    }
}
export const todoError = ()=>{
    return {
        type: TODO_FAILURE
    }
}
export const addtodoRequest = ()=>{
    return{
        type: ADD_TODO_REQUEST
    }
}
export const addtodoSuccess = (payload)=>{
    return {
        type: ADD_TODO_SUCCESS,
        payload,
    }
}
export const addtodoError = ()=>{
    return {
        type: ADD_TODO_FAILURE
    }
}