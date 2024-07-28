import {useState} from "react";


export function Todo ({todo, deleteTodo, changeStatus, updateTitle}) {
    const [newTitle, setNewTitle] = useState(todo.title);

    function onInput(event) {
        console.log(event.target.checked)
        const {checked} = event.target;
        changeStatus(checked, todo.id);
    }

    function handleInputChange(event) {
        updateTitle(todo.id, newTitle);
        setNewTitle(event.target.value);
    }

    return (
        <div className="todo">
            <input type="checkbox" onInput={onInput} defaultChecked={todo.status}/>
            <span className={todo.status ? "checked" : ""}>{
                todo.title
            }</span>
            <button onClick={handleInputChange}>Обновить</button>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
        </div>
    )
}
