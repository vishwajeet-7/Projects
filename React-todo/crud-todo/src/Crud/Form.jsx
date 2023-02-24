import React from 'react'

const Form = ({handleSubmit,name,setName}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <input type="text" name="" id="" placeholder='Enter task'
        value={name}/>
        <button>Submit</button>
        <button onClick={()=>setName("")}>cancel</button>
      </div>
    </form>
  )
}

export default Form
