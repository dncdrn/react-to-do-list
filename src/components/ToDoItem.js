import React from 'react'

export default function ToDoItem(props) {
    return (
        <li className="task-item list-group-item ">
            {
                props.taskItem.isCompleted ?
                    <i className="fa fa-check-square-o fa-2x task-item__done" onClick={props.markTaskCompleted} />
                    : <input
                        className="toggle"
                        type="checkbox"
                        checked={props.taskItem.isCompleted}
                        onChange={props.markTaskCompleted} />
            }
            <span className={props.taskItem.isCompleted ? "task-name-completed" : "task-name"}>{props.taskItem.taskName}</span>
            <i className="task-item__delete fa fa-trash fa-2x" onClick={props.deleteTask} />
        </li>
    )
}
