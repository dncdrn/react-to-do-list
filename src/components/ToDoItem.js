import React from 'react'

export default function ToDoItem(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <input
                className="toggle"
                type="checkbox"
                checked={props.taskItem.completed}
                onClick={props.markTaskCompleted} />
            {props.taskItem.taskName}
            <button className="btn btn-danger" onClick={props.taskDelete}>delete</button>
        </li>
    )
}
