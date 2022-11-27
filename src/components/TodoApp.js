import React from 'react'
import { useState, useEffect } from 'react'
function TodoApp() {

    const [title, setTitle] = useState('hola');

    const handleClick = (e) => {
        e.preventDefault
        setTitle(e.target.value);
    }

    return (
        <div className="todoContainer">
            <form className='todoCreateForm'>
                <input className='todoInput' value={title} />
                <input onClick={handleClick} type="submit" value="Create task" className='buttonCreate' />

                {title}
            </form>
        </div>
    )
}

export default TodoApp