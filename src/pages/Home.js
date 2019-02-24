import React, { useState, useEffect } from 'react'
import ToDoForm from '../components/ToDoForm';
import List from '../components/ToDoList';
import uuid from "uuid";

export default function Home() {
    const intialToDos = () => JSON.parse(localStorage.getItem('task')) || [];
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState(intialToDos);
    // const [toggleUpdateTask, setToggleUpdateTask] = useState();

    const handleTaskChange = (e) => { setTask(e.target.value) }

    const addTask = (e) => {
        e.preventDefault();
        const taskItem = { taskId: uuid.v4(), taskName: task, completed: false }
        setTaskList(prevTaskList => ([...prevTaskList, taskItem]))
        setTask('')
        // setToggleUpdateTask(!toggleUpdateTask);
    }

    const markTaskCompleted = (taskIndex) => {
        const updatedTodo = {
            ...taskList[taskIndex],
            completed: !taskList[taskIndex].completed
        };
        const updatedList = Object.assign([...taskList], { [taskIndex]: updatedTodo });
        setTaskList(updatedList);
        // setToggleUpdateTask(!toggleUpdateTask);
    }

    const taskDelete = (taskIndex) => {
        taskList.splice(taskIndex, 1)
        // setToggleUpdateTask(!toggleUpdateTask);
    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(taskList));
        setTaskList(JSON.parse(localStorage.getItem('todo')));
    }, [taskList])

    return (
        <div className="App bg-primary d-flex">
            <div className="container align-self-center">
                <h1 className="text-white font-weight-bold">To-Do App!</h1>
                <p className="h4 text-white mt-3">Add new To-Do</p>
                {taskList}
                <ToDoForm handleTaskChange={handleTaskChange} addTask={addTask} task={task} />
                <br />
                {taskList.length > 0 && <List taskList={taskList}
                    markTaskCompleted={markTaskCompleted}
                    taskDelete={taskDelete} />}
            </div>
        </div>
    )
}
