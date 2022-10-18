import React, {useState, useRef, useCallback} from "react";
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp_MSY1126 = () => {
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'TDD 배우기',
            done: false,
        },
        {
            id: 2,
            text: 'react-testing-library',
            done: true,
        }
    ]);
    const nextId = useRef(3);
    const onInsert = useCallback(text => {
        setTodos(
            todos.concat({
                id : nextId.current,
                text,
                done: false,
            })
        );
        nextId.current += 1;
    });

    return <div>
        <TodoForm onInsert={onInsert}/>
        <TodoList todos = {todos} />
        {/* <TodoList todos = {[]} /> */}

        </div>;
};

export default TodoApp_MSY1126;