export const ADD = 'ADD'
export const REDUCE ='REDUCE'

export const TODO_REQUEST = 'TODO_REQUEST'
export const TODO_SUCCESS = 'TODO_SUCCESS'
export const TODO_FAILURE = 'TODO_FAILURE'

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST'
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS'
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE'

// we use this because if we simply use a string as a type then it won't throw any errors if it's mistyped and our function will not work as it is meant to be. So this helps us in reducing the chances of error;