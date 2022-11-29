import React from 'react'
import { useState } from 'react'
import Todo from './todo'
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

    const handleUpdate = (id, value) => {
        const temp = [...todos]
        const item = temp.find(item => item.id === id);
        item.title = value;
        setTodos(temp);
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
                        <Todo key={item.id}item={item} onUpdate={handleUpdate}/>
                    ))
                }
            </div>

        </div>
    )
}

export default TodoApp