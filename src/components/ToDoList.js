import React from 'react'
import ToDoItem from './ToDoItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../App.scss';

export default function List(props) {
    return (
        <TransitionGroup>
            {
                props.taskList.map((taskItem, index) => {
                    return (
                        <CSSTransition key={index} timeout={500} classNames="move">
                            <ToDoItem
                                taskItem={taskItem}
                                markTaskCompleted={() => props.markTaskCompleted(index)}
                                taskDelete={() => props.taskDelete(index)} />
                        </CSSTransition>
                    )
                })
            }
        </TransitionGroup>
    )
}
