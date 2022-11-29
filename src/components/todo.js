import { useState } from 'react';

export default function Todo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() { //This is a component
        const [newValue, setNewValue] = useState(item.title)
        const handleSubmit = (e) => {
            e.preventDefault();

        }

        const handleChange = (e) => {
            const value = e.target.value;
            setNewValue(value);
        }

        const handleClickUpdate = (e) => {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className='todoUpdateForm' onSubmit = {handleSubmit}>
                <input type="text" className='todoInput' onChange = {handleChange} value = {newValue}></input>
                <button className='button' onClick = {handleClickUpdate}>Update</button>
            </form>
        )
    }

    function TodoElement() {
        return (
            <div className='todoInfo'>
                <span className='todoTitle'>{item.title}</span>
                <button className='button' onClick={() => setIsEdit(true)}>Edit</button>
                <button className='button' onClick = {(e) => onDelete(item.id)}>Delete</button>
            </div>
        )
    }


    return (
        <div className='todo'>
            {isEdit ? <FormEdit/> : <TodoElement />}
        </div>


    );
}

