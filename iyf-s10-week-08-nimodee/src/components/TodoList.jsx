import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false }
    ]);

    const [inputValue, setInputValue] = useState('');

    // Add todo
    const addTodo = () => {
        if (!inputValue.trim()) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text: inputValue,
                completed: false
            }
        ]);

        setInputValue('');
    };

    // Toggle complete
    const toggleTodo = (id) => {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h2>Todo List</h2>

            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add todo"
            />

            <button onClick={addTodo}>
                Add
            </button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span
                            onClick={() => toggleTodo(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {todo.text}
                        </span>

                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;