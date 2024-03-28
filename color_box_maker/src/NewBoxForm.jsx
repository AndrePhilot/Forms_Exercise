import { useState } from 'react'
import ColorOptions from './ColorOptions'

const NewBoxForm = ({ createBox }) => {
    const INITIAL_VALUES = {
        backgroundColor: '#F0F8FF',
        width: 50,
        height: 50,
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
        createBox(formData);
        setFormData(INITIAL_VALUES);
    }

    return (
        <form onSubmit={handleSubmit}>
            <select 
                name='backgroundColor' 
                value={ formData.backgroundColor } 
                onChange={handleChange}>
                <ColorOptions />
            </select>
            <input 
                type="number"
                name="width" 
                value={ formData.width } 
                onChange={handleChange} 
                placeholder="Width">
            </input>
            <input 
                type="number" 
                name="height" 
                value={ formData.height } 
                onChange={handleChange} 
                placeholder="Height">
            </input>
            <button type="submit">Submit</button>
        </form>
    )
    }
    
    export default NewBoxForm;