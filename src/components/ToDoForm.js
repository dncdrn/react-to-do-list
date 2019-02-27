import React from 'react'

const Input = (props) => {
    return (
        <form onSubmit={props.addTask} className="app-form col-lg-7">
            <input
                type="text"
                className="form-control"
                placeholder="Enter new task"
                value={props.task}
                onChange={props.handleTaskChange}
            />
            <button disabled={!props.task} className="app-form__button btn btn-outline-light">ADD TASK</button>
        </form>
    )
}
export default Input;