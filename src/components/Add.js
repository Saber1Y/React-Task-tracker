import { useState } from 'react'

import React from 'react'

const Add = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')

  const onsubmit = (e) => {
    e.preventDefault(); 
    
    if (!text) {
        alert('please enter Task Name')
        return
    }
    
    onAdd({ text, setDay})

    setText('')
    setDay('')
  }

  return (
    <form className='add-form' onSubmit={onsubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="text" placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
      </div>

      <input type="submit" value="Save Task" className='btn btn-block' />
    </form>
  )
}

export default Add
