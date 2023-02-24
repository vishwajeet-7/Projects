import { ADD, ADD_TODO, ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, REDUCE, TODO_FAILURE, TODO_REQUEST, TODO_SUCCESS } from "./actionTypes"

const initialState = {
    count: 0,
    todos:[],
    isLoading:false,
    isError:false,
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD:
            return {
                ...state,
                count: state.count + action.payload,
            }
        case REDUCE:
            return {
                ...state,
                count: state.count - action.payload
            }
        case TODO_REQUEST:
            return{
                ...state,
                isLoading: true,
            }
        case TODO_SUCCESS:
            return{
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TODO_FAILURE:
            return{
                ...state,
                isLoading:false,
                isError: true
            }
        case ADD_TODO_REQUEST:
                return{
                    ...state,
                    isLoading: true,
                }
        case ADD_TODO_SUCCESS:
                return{
                    ...state,
                    isLoading: false,
                    todos: [...state.todos,action.payload]
                }
        case ADD_TODO_FAILURE:
                return{
                    ...state,
                    isLoading:false,
                    isError: true
                }
        

        default: return state
    }
}