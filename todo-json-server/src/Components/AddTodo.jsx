import axios from 'axios'
import React,{useState} from 'react'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const AddTodo = ({addingTodo,edit}) => {
  const [todo,setTodo] = useState(edit.title)

  return (
    <div>
      <input type="text" placeholder='Enter Todo'
      value={todo}
      className="input-box"
      onChange={(e)=>setTodo(e.target.value)}
      />
      <button onClick={()=>addingTodo(todo,edit)} className="add-btn"><AddCircleOutlinedIcon/></button>
    </div>
  )
}

export default AddTodo
