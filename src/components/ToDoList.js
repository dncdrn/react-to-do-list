import React from 'react'
import ToDoItem from './ToDoItem';

export default function List(props) {
    return (
        <div className="card col-lg-5 mx-auto">
            <ul className="list-group list-group-flush">
                {
                    props.taskList && props.taskList.map((taskItem, index) => {
                        return (
                            <ToDoItem taskItem={taskItem}
                                markTaskCompleted={() => props.markTaskCompleted(index)}
                                taskDelete={() => props.taskDelete(index)} />
                        )
                    })
                }
            </ul>
        </div>
    )
}
