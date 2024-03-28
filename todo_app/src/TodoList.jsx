import { useState } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import { v4 as uuid } from 'uuid'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const removeTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const createTodo = ({ task }) => {
        const id = uuid();
        const newTodo = {
                id,
                task, };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    }

    return (
        <>
            <NewTodoForm createTodo={createTodo}/>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    task={todo.task}
                    removeTodo={() => removeTodo(todo.id)}
                    id={todo.id}
                />
            ))}
        </>
    )
}

export default TodoList;