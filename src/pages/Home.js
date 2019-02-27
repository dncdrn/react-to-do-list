import React, { useState, useEffect } from 'react'
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

export default function Home() {
    const intialToDos = () => JSON.parse(localStorage.getItem('toDo')) || [];
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState(intialToDos);

    const handleTaskChange = (e) => { setTask(e.target.value) }

    const addTask = (e) => {
        e.preventDefault();
        const taskItem = { taskName: task, isCompleted: false };
        setTaskList(prevTaskList => {
            const newTask = [...prevTaskList, taskItem];
            console.log('prevTaskList', newTask);
            return newTask;
        });
        setTask('');
    }

    const markTaskCompleted = (taskIndex) => {
        const updatedTodo = {
            ...taskList[taskIndex],
            isCompleted: !taskList[taskIndex].isCompleted
        };
        const updatedList = Object.assign([...taskList], { [taskIndex]: updatedTodo });
        setTaskList(updatedList);
    }

    const deleteTask = (taskIndex) => {
        const newTaskList = taskList.filter((_, index) => index !== taskIndex);
        setTaskList(newTaskList);
    }

    const getCompletedTask = () => {
        return taskList.filter(element => {
            return element.isCompleted === true;
        }).length;
    }


    useEffect(() => {
        console.log('USe Effect', taskList)
        localStorage.setItem('toDo', JSON.stringify(taskList));
    }, [taskList])

    return (
        <div className="app d-flex">
            <div className="app-container container">
                <h1 className="app__title">To-Do App!</h1>
                <p className="app__action">Add new To-Do</p>
                <ToDoForm addTask={addTask}
                    task={task}
                    handleTaskChange={handleTaskChange} />
                <br />
                {taskList.length > 0 && <p className="app__action">To do list:</p>}
                <ToDoList taskList={taskList}
                    markTaskCompleted={markTaskCompleted}
                    deleteTask={deleteTask} />
                {taskList.length > 0 && <p class="task-list-count">{getCompletedTask()} of {taskList.length} task completed </p>}
            </div>
        </div>
    )
}
