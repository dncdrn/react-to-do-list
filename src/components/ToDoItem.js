import React from 'react'

export default function ToDoItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {
                props.taskItem.completed ?
                    <i className="fa fa-check-square-o text-success fa-2x" />
                    : <input
                        className="toggle"
                        type="checkbox"
                        checked={props.taskItem.completed}
                        onChange={props.markTaskCompleted} />
            }
            <span className={props.taskItem.completed ? "item-name-completed" : "item-name"}>{props.taskItem.taskName}</span>
            <i className="fa fa-trash fa-2x text-danger" onClick={props.taskDelete} />
        </li>
    )
}
