import { useState } from 'react'
import NewBoxForm from './NewBoxForm'
import Box from './Box'
import { v4 as uuid } from 'uuid'

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);

    const removeBox = (id) => {
        setBoxes(prevBoxes => prevBoxes.filter(box => box.id !== id));
    }

    const createBox = ({ backgroundColor, width, height }) => {
        const id = uuid();
        const newBox = {
                id,
                backgroundColor,
                width,
                height, };
        setBoxes(prevBoxes => [...prevBoxes, newBox]);
    }

    return (
        <>
            <NewBoxForm createBox={createBox}/>
            {boxes.map(box => (
                <Box
                    key={box.id}
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.height}
                    removeBox={() => removeBox(box.id)}
                    id={box.id}
                />
            ))}
        </>
    )
}

export default BoxList;