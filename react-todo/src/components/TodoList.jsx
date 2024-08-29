import React from "react";


 function TodoList() {
    const todos = useTodo(state => state.todo);
    const remove = useTodo(state => state.removeTodo);
    const check = useTodo(state => state.checkedTodo);
    function removeTodo(id) {
        remove(id);
    }

    function handleChange(id) {
        check(id);
    }

    return (
        <div>
            {todos.map((item) => (
                <li key={item.id}>
                    <input type="checkbox"
                        checked={item.isHeld}
                        onChange={() => handleChange(item.id)}
                    />
                    <span>{item.text}</span>
                    <button onClick={() => removeTodo(item.id)}>Remove</button>
                </li>
            ))}
        </div>
    );
}


 function AddTodoForm() {
    const [Text, setText] = useState("");
    const addText = useTodo(state => state.addTodo);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        addText(Text);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                name="Text"
                value={Text}
                onChange={handleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}
export default TodoList;