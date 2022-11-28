import React from 'react'
import { useState } from 'react'
function TodoApp() {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodos = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        setTodos([...todos, newTodos]);
    }

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    return (
        <div className="todoContainer">
            <form className='todoCreateForm' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='todoInput' value={title} />
                <input onClick={handleSubmit} type="submit" value="Create task" className='buttonCreate' />


            </form>

            <div className='todosContainer'>
                {
                    todos.map((item) => (
                        <div key={item.id}>{item.title}</div>
                    ))
                }
            </div>

        </div>
    )
}

export default TodoApp