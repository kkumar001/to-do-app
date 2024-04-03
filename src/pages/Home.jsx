import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    const [allTasks, setAllTasks] = useState([]);

    const allTasksString = localStorage.getItem('tasks');
    console.log(allTasksString);
    let lastTasks = [];

    useEffect(() => {
        if (allTasksString && allTasksString.length > 0) {
            lastTasks = JSON.parse(allTasksString);
            if (lastTasks.length > 5) {
                setAllTasks(lastTasks.slice(lastTasks.length - 5, lastTasks.length))
            } else {
                setAllTasks(lastTasks);
            }
        }
        console.log(allTasks);
    }, [])

    return (
        <div className='w-full min-h-[100vh]'>
            <Navbar />
            <div className='w-full flex flex-col items-center p-2 h-[calc(100vh-128px)]'>
                <h3 className='text-2xl font-medium'>React To-Do Application </h3>
                <div className='h-1 bg-yellow-600 w-[300px] my-1 rounded-lg' />
                <p className='text-center text-lg'>A React Application in which you can <b>add task</b>, <b>delete task</b> and mark them as <b>completed</b>. <br />
                    Go to All Tasks Page by clicking on the button <b>"View All Tasks"</b> and manage the tasks.
                </p>
                <div className='sm:w-[90%] w-[100%] bg-yellow-100 m-4 p-2 rounded-xl flex flex-col items-center'>
                    <h3 className='text-xl font-medium'>Tasks with Status</h3>
                    <div className='h-1 bg-yellow-600 w-[200px] my-0.5 rounded-lg' />
                    <div className='flex gap-4 justify-between w-full px-4'>
                        <div className=''>
                            <div className='flex flex-col items-center mb-2'>
                                <h3 className='text-lg font-semibold'>Tasks</h3>
                                <div className='h-1 bg-yellow-600 w-[70px] rounded-lg' />
                            </div>
                            {allTasks.length > 0 ? (
                                allTasks.map((task) => (
                                    <p className='mt-1 text-lg font-medium'>{task.task_text}</p>
                                ))
                            ) : (
                                <p className='mt-1 text-lg font-medium'>No Task Yet.</p>
                            )}
                        </div>
                        <div className='text-center'>
                            <div className='flex flex-col items-center mb-2'>
                                <h3 className='text-lg font-semibold'>Status</h3>
                                <div className='h-1 bg-yellow-600 w-[70px] rounded-lg' />
                            </div>
                            {allTasks.length > 0 ? (
                                allTasks.map((task) => (
                                    task.task_status === 'complete' ? (
                                        <p className='mt-1 uppercase text-lg font-medium text-green-500'>{task.task_status}</p>
                                    ) : (
                                        <p className='mt-1 uppercase text-lg font-medium text-yellow-500'>{task.task_status}</p>
                                    )
                                ))
                            ) : (
                                <p className='mt-1 text-lg font-medium'>No Task Yet.</p>
                            )}
                        </div>
                    </div>
                </div>
                <div className='sm:w-[90%] w-[100%] p-2 m-4 items flex sm:flex-row flex-col gap-4 justify-evenly text-lg font-medium text-white'>
                    <Link to='/alltasks' className='sm:w-[180px] w-full'>
                        <button className='bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-full w-full'>View All Tasks</button>
                    </Link>
                    <Link to='/addtask' className='sm:w-[180px] w-full'>
                        <button className='bg-gradient-to-r from-green-400 to-green-700 p-2 rounded-full w-full'>Add New Task</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home