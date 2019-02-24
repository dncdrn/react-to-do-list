import React from 'react'

const Input = (props) => {
    return (
        <form onSubmit={props.addTask}>
            <div className="col-lg-5 mx-auto">
                <input
                    type="text"
                    name="task"
                    className="form-control"
                    placeholder="Enter new task"
                    autoComplete="email"
                    spellCheck="false"
                    autoCapitalize="off"
                    autoCorrect="off"
                    value={props.task}
                    onChange={props.handleTaskChange}
                />
                <button className="mt-3 btn btn-outline-light">Add</button>
            </div>
        </form>
    )
}
export default Input;