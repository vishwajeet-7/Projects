import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import UnpublishedOutlinedIcon from '@mui/icons-material/UnpublishedOutlined';


const TodoCard = ({title,status,id,toggleStatus,handleDelete,handleEdit}) => {
  return (
    <div className='todo-card' 
    style={{display:'flex',gap:'2rem',justifyContent:'space-evenly',border:"1px solid grey",borderRadius:"20px",background:'blue',color:'white',width:'25%'}}
    >
      <h3
      style={status ? {textDecoration:"line-through"} : {textDecoration:"none"}}
      >{title}</h3>
    <div className='icons-container'>
      <span 
        style={{marginTop:"19px",cursor:'pointer'}}
        onClick={()=>toggleStatus(id,status,title)}
        className='status-btn'
        >{status ? <TaskAltOutlinedIcon/> : <UnpublishedOutlinedIcon/> }
      </span>
      <span
        onClick={()=>handleEdit(id)}
        style={{marginTop:"17px",cursor:'pointer'}}
        ><BorderColorOutlinedIcon/>
      </span>
      <span style={{marginTop:"19px",cursor:'pointer'}}
        onClick={()=>handleDelete(id)}
        ><DeleteIcon/>
      </span>
    </div>
    </div>
  )
}

export default TodoCard
