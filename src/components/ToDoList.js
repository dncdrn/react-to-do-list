import React from 'react'
import ToDoItem from './ToDoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.scss';

export default function List(props) {
    return (
        <TransitionGroup className="task-list">
            {
                props.taskList.map((taskItem, index) => {
                    return (
                        <CSSTransition key={index} timeout={500} classNames="move">
                            <ToDoItem
                                taskItem={taskItem}
                                markTaskCompleted={() => props.markTaskCompleted(index)}
                                deleteTask={() => props.deleteTask(index)} />
                        </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
    )
}
