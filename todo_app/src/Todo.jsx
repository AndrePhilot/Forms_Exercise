const Todo = ({ task, removeTodo }) => {    
    return (
        <>
            <div>{ task }</div>
            <button onClick={removeTodo}>X</button>
        </>
    );
};

export default Todo;