import axios from 'axios'

export const getTodos = async ()=>{
    return await axios.get(`${process.env.REACT_APP_API}`);
}