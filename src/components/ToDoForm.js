import React from 'react'

const Input = (props) => {
    return (
        <form onSubmit={props.addTask} className="app-form col-lg-5">
            <input
                type="text"
                className="form-control"
                placeholder="Enter new task"
                value={props.task}
                onChange={props.handleTaskChange}
            />
            <button disabled={!props.task} className="app-form__button mt-3 btn btn-outline-light">Add</button>
        </form>
    )
}
export default Input;