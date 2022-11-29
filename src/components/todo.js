import { useState } from 'react';

export default function Todo({ item, onUpdate }) {

    const [isEdit, setIsEdit] = useState(false);
    const [newValue, setNewValue] = useState(item.title);

    const handleSubmit = (e) => {
        

        e.preventDefault(e);

    }

    const handleChange = (e) => {
        setNewValue(e.target.value);
    }

    const handleClickUpdate = () => {
        onUpdate(item.id, newValue);
        setIsEdit(false)

    }


    const FormEdit = () => {
        return (
            <form className='todoUpdateForm' onSubmit={handleSubmit}>
                <input type="text" className='todoInput' onChange={handleChange} value={newValue}>
                </input>
                <button className='button' onClick={handleClickUpdate}>Update</button>
            </form>
        )
    }

    const TodoElement = () => {
        return (
            <div className='todoInfo'>
                {item.title}
                <button onClick={() => {
                    setIsEdit(true);
                }}>Edit</button>
                <button>Delete</button>
            </div>
        )
    }

    return (

        <div className='todo'>
            {isEdit ? <FormEdit /> : <TodoElement />}
        </div>


    )
}

