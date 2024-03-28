import { useState } from 'react'

const NewTodoForm = ({ createTodo }) => {
    const INITIAL_VALUES = {
        task: '',
    };

    const [formData, setFormData ] = useState(INITIAL_VALUES);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        createTodo(formData);
        setFormData(INITIAL_VALUES);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                name="task" 
                value={ formData.task } 
                onChange={handleChange} 
                placeholder="Task">
            </input>
            <button type="submit">Submit</button>
        </form>
    )
    }
    
    export default NewTodoForm;