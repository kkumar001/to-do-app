import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const AllTasks = () => {
    const [uncompletedTasks, setUncompletedTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const allTasksString = localStorage.getItem('tasks');
    console.log(allTasksString);
    let allTasks = [];

    useEffect(() => {
        if (allTasksString.length > 0) {
            allTasks = JSON.parse(allTasksString);
            setCompletedTasks(allTasks.filter(task => task.task_status === 'complete'));
            setUncompletedTasks(allTasks.filter(task => task.task_status === 'uncomplete'));
        }
    }, [])

    const handleTaskCheck = (taskId) => {
        // Find the task in the uncompletedTasks array based on its taskId
        const updatedUncompletedTasks = uncompletedTasks.map(task =>
            task.task_id === taskId ? { ...task, task_status: 'complete' } : task
        );

        // Find the task in the completedTasks array based on its taskId
        const updatedCompletedTasks = completedTasks.map(task =>
            task.task_id === taskId ? { ...task, task_status: 'uncomplete' } : task
        );

        // Update the state with the updated tasks
        setUncompletedTasks(updatedUncompletedTasks);
        setCompletedTasks(updatedCompletedTasks);

        // Update the local storage with the updated tasks
        const updatedTasks = [...updatedUncompletedTasks, ...updatedCompletedTasks];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        window.location.reload();
    }

    const handleTaskDelete = (taskId) => {
        // Remove the task from uncompletedTasks if it exists there
        const updatedUncompletedTasks = uncompletedTasks.filter(task => task.task_id !== taskId);
        setUncompletedTasks(updatedUncompletedTasks);

        // Remove the task from completedTasks if it exists there
        const updatedCompletedTasks = completedTasks.filter(task => task.task_id !== taskId);
        setCompletedTasks(updatedCompletedTasks);

        // Update the local storage with the updated tasks
        const updatedTasks = [...updatedUncompletedTasks, ...updatedCompletedTasks];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        window.location.reload();
    };




    console.log(completedTasks, uncompletedTasks);

    return (
        <div className='w-full min-h-[100vh]'>
            <Navbar />
            <div className='w-full min-h-[calc(100vh-128px)] flex flex-col gap-4 p-2 items-center justify-center'>
                <div className='text-center'>
                    <h3 className='text-2xl font-medium'>React To-Do Application </h3>
                    <div className='h-1 bg-yellow-600 w-[300px] my-1 rounded-lg' />
                </div>
                <div className='flex flex-col p-4 bg-yellow-500 rounded-xl items-center text-yellow-50 w-full'>
                    <h3 className='text-xl font-semibold'>
                        Uncompleted Tasks
                    </h3>
                    <p className='text-center'>Check the box to mark as <b>Completed Task</b></p>
                    <div className='flex flex-col w-full max-w-[600px] gap-2 items-center p-2'>
                        {uncompletedTasks.length > 0 ?
                            uncompletedTasks.map(task => (
                                <div key={task.task_id} className='w-full h-auto flex gap-2 items-center justify-between'>
                                    <div className='flex gap-2 items-center'>
                                        <input
                                            type='checkbox'
                                            className='appearance-none size-6 border-2 rounded-full bg-green-500 checked:bg-blue-500 cursor-pointer'
                                            onChange={() => handleTaskCheck(task.task_id)}
                                        />
                                        <p className='text-lg font-medium text-yellow-900'>{task.task_text}</p>
                                    </div>
                                    <button onClick={() => handleTaskDelete(task.task_id)} className='bg-gradient-to-br from-red-400 to-red-800 px-2 py-1 rounded-xl'>Delete Task</button>
                                </div>
                            ))
                            : (
                                <h3 className='text-yellow-900 text-xl font-semibold'>No Task Yet!</h3>
                            )}
                    </div>
                </div>
                <div className='flex flex-col p-4 bg-green-500 rounded-xl items-center text-yellow-50 w-full'>
                    <h3 className='text-xl font-semibold'>
                        Completed Tasks
                    </h3>
                    <p className='text-center'>Uncheck the box to mark as <b>Uncompleted Task</b></p>
                    <div className='flex flex-col w-full max-w-[600px] gap-2 items-center p-2'>
                        {completedTasks.length > 0 ?
                            completedTasks.map(task => (
                                <div key={task.task_id} className='w-full h-auto flex gap-2 items-center justify-between'>
                                    <div className='flex gap-2'>
                                        <input
                                            type='checkbox'
                                            className='appearance-none size-6 border-2 rounded-full bg-yellow-500 checked:bg-blue-500 cursor-pointer'
                                            onChange={() => handleTaskCheck(task.task_id)}
                                        />
                                        <p className='text-lg font-medium text-green-900'>{task.task_text}</p>
                                    </div>
                                    <button onClick={() => handleTaskDelete(task.task_id)} className='bg-gradient-to-br from-red-400 to-red-800 px-2 py-1 rounded-xl'>Delete Task</button>
                                </div>
                            ))
                            : (
                                <h3 className='text-yellow-900 text-xl font-semibold'>No Completed Task Yet!</h3>
                            )}
                    </div>
                </div>
                <Link to='/addtask' className='sm:w-[180px] w-full text-white text-lg'>
                    <button className='bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-full w-full'>Add New Task</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default AllTasks